import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

import { debates } from '../../src/data/debates';

interface TranscriptRecord {
  debateId: string;
  sourceLanguage: 'en';
  fetchedAt: string;
  source: 'sprs-hansard' | 'unavailable';
  paragraphs: string[];
}

interface TranscriptTranslation {
  debateId: string;
  targetLanguage: 'zh';
  sourceLanguage: string;
  translatedAt: string;
  source: 'openai' | 'manual' | 'source';
  model?: string;
  paragraphs: string[];
}

const RAW_DIR = resolve('scripts/hansard/data/transcripts');
const TRANSLATION_DIR = resolve('scripts/hansard/data/translations');
const TARGET_LANGUAGE = 'zh' as const;
const DEFAULT_MODEL = process.env.OPENAI_TRANSLATION_MODEL || process.env.OPENAI_MODEL || 'gpt-4.1-mini';
const MAX_BATCH_CHARS = Number(process.env.HANSARD_TRANSLATION_BATCH_CHARS || 18000);
const CONCURRENCY = Number(process.env.HANSARD_TRANSLATION_CONCURRENCY || 3);

const args = new Set(process.argv.slice(2));
const force = args.has('--force');
const limitArg = process.argv.find((arg) => arg.startsWith('--limit='));
const limit = limitArg ? Number(limitArg.split('=')[1]) : undefined;
const idsArg = process.argv.find((arg) => arg.startsWith('--ids='));
const requestedIds = idsArg ? new Set(idsArg.split('=')[1].split(',').map((id) => id.trim())) : undefined;

function sleep(ms: number): Promise<void> {
  return new Promise((resolvePromise) => {
    setTimeout(resolvePromise, ms);
  });
}

function readTranscript(debateId: string): TranscriptRecord | null {
  const path = join(RAW_DIR, `${debateId}.json`);
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf8')) as TranscriptRecord;
}

function translationPath(debateId: string): string {
  return join(TRANSLATION_DIR, `${debateId}.${TARGET_LANGUAGE}.json`);
}

function readTranslation(debateId: string): TranscriptTranslation | null {
  const path = translationPath(debateId);
  if (!existsSync(path) || force) return null;
  return JSON.parse(readFileSync(path, 'utf8')) as TranscriptTranslation;
}

function isChineseLanguage(language: string): boolean {
  return language.toLowerCase().startsWith('zh');
}

function chunkParagraphs(paragraphs: string[]): string[][] {
  const chunks: string[][] = [];
  let current: string[] = [];
  let currentLength = 0;

  for (const paragraph of paragraphs) {
    const length = paragraph.length;
    if (current.length > 0 && currentLength + length > MAX_BATCH_CHARS) {
      chunks.push(current);
      current = [];
      currentLength = 0;
    }
    current.push(paragraph);
    currentLength += length;
  }

  if (current.length > 0) chunks.push(current);
  return chunks;
}

function parseParagraphs(content: string): string[] {
  const parsed = JSON.parse(content) as { paragraphs?: unknown };
  if (!Array.isArray(parsed.paragraphs)) throw new Error('Translation response does not contain paragraphs array.');
  if (!parsed.paragraphs.every((item) => typeof item === 'string')) {
    throw new Error('Translation response paragraphs must be strings.');
  }
  return parsed.paragraphs as string[];
}

async function translateBatch(paragraphs: string[], model: string): Promise<string[]> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY is required to translate Hansard transcripts.');

  const payload = {
    model,
    temperature: 0.1,
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'system',
        content:
          'You are a professional translator for a Chinese policy-analysis website. Translate Singapore Hansard transcript paragraphs from English into clear, faithful Simplified Chinese. Preserve names, institutions, numbers, dates, policy terms, bill names, and acronyms. Do not summarize. Do not omit content. Do not add commentary. Return only JSON: {"paragraphs":["..."]}. The output array must have exactly the same number of items as the input array.',
      },
      {
        role: 'user',
        content: JSON.stringify({ paragraphs }),
      },
    ],
  };

  let responseData:
    | {
        choices?: Array<{ message?: { content?: string } }>;
      }
    | undefined;
  let lastError = '';

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      responseData = (await response.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      break;
    }

    const text = await response.text();
    lastError = `OpenAI translation failed: ${response.status} ${text}`;
    if (response.status === 429 || response.status >= 500) {
      await sleep(attempt * attempt * 1500);
      continue;
    }

    throw new Error(lastError);
  }

  if (!responseData) throw new Error(lastError || 'OpenAI translation failed with no response data.');

  const content = responseData.choices?.[0]?.message?.content;
  if (!content) throw new Error('OpenAI translation response was empty.');

  const translated = parseParagraphs(content);
  if (translated.length === 0) throw new Error('Translation response returned no paragraphs.');
  return translated;
}

async function translateBatchWithFallback(paragraphs: string[], model: string): Promise<string[]> {
  try {
    return await translateBatch(paragraphs, model);
  } catch (error) {
    if (paragraphs.length === 1) throw error;

    const message = error instanceof Error ? error.message : String(error);
    process.stdout.write(`\n  batch fallback: ${message}\n`);
    const translated: string[] = [];
    for (let index = 0; index < paragraphs.length; index += 1) {
      process.stdout.write(`  paragraph ${index + 1}/${paragraphs.length}\n`);
      translated.push(...(await translateBatch([paragraphs[index]], model)));
    }
    return translated;
  }
}

async function translateRecord(record: TranscriptRecord, model: string): Promise<TranscriptTranslation> {
  if (isChineseLanguage(record.sourceLanguage)) {
    return {
      debateId: record.debateId,
      targetLanguage: TARGET_LANGUAGE,
      sourceLanguage: record.sourceLanguage,
      translatedAt: record.fetchedAt,
      source: 'source',
      paragraphs: record.paragraphs,
    };
  }

  const chunks = chunkParagraphs(record.paragraphs);
  const translated: string[] = [];

  for (let index = 0; index < chunks.length; index += 1) {
    process.stdout.write(` ${record.debateId} batch ${index + 1}/${chunks.length}\n`);
    translated.push(...(await translateBatchWithFallback(chunks[index], model)));
  }

  return {
    debateId: record.debateId,
    targetLanguage: TARGET_LANGUAGE,
    sourceLanguage: record.sourceLanguage,
    translatedAt: new Date().toISOString().slice(0, 10),
    source: 'openai',
    model,
    paragraphs: translated,
  };
}

function regenerateTranscriptData(): void {
  const result = spawnSync('npx', ['tsx', 'scripts/hansard/fetch-debate-transcripts.ts', '--emit-only'], {
    stdio: 'inherit',
    encoding: 'utf8',
  });
  if (result.status !== 0) throw new Error('Failed to regenerate src/data/debate-transcripts.ts.');
}

async function main(): Promise<void> {
  mkdirSync(TRANSLATION_DIR, { recursive: true });

  const selected = debates.filter((debate) => !requestedIds || requestedIds.has(debate.id)).slice(0, limit);
  const rawFiles = new Set(existsSync(RAW_DIR) ? readdirSync(RAW_DIR).filter((file) => file.endsWith('.json')) : []);
  let translatedCount = 0;
  let skippedCount = 0;
  let missingCount = 0;

  async function processDebate(debate: (typeof debates)[number]): Promise<void> {
    if (!rawFiles.has(`${debate.id}.json`)) {
      process.stdout.write(`Skipping ${debate.id}: no fetched Hansard cache\n`);
      missingCount += 1;
      return;
    }

    const record = readTranscript(debate.id);
    if (!record || record.paragraphs.length === 0) {
      process.stdout.write(`Skipping ${debate.id}: transcript unavailable\n`);
      missingCount += 1;
      return;
    }

    const cached = readTranslation(debate.id);
    if (cached) {
      process.stdout.write(`Skipping ${debate.id}: cached zh translation\n`);
      skippedCount += 1;
      return;
    }

    process.stdout.write(`Translating ${debate.id} (${record.paragraphs.length} paragraphs) ...\n`);
    const translation = await translateRecord(record, DEFAULT_MODEL);
    writeFileSync(translationPath(debate.id), `${JSON.stringify(translation, null, 2)}\n`);
    translatedCount += 1;
    process.stdout.write(`Translated ${debate.id}\n`);
  }

  let nextIndex = 0;
  async function worker(): Promise<void> {
    while (nextIndex < selected.length) {
      const debate = selected[nextIndex];
      nextIndex += 1;
      await processDebate(debate);
    }
  }

  await Promise.all(Array.from({ length: Math.max(1, CONCURRENCY) }, () => worker()));

  regenerateTranscriptData();
  process.stdout.write(
    `Done. translated=${translatedCount}, cached=${skippedCount}, missing=${missingCount}, model=${DEFAULT_MODEL}, concurrency=${CONCURRENCY}\n`
  );
}

await main();
