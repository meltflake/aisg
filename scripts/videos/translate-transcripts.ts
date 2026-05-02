import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

import { videos } from '../../src/data/videos';

interface TranscriptRecord {
  videoId: string;
  youtubeId: string;
  language: string;
  fetchedAt: string;
  source: 'youtube-subtitles' | 'unavailable';
  paragraphs: string[];
  error?: string;
}

interface TranscriptTranslation {
  videoId: string;
  targetLanguage: 'zh';
  sourceLanguage: string;
  translatedAt: string;
  source: 'openai' | 'manual' | 'source';
  model?: string;
  paragraphs: string[];
}

const RAW_DIR = resolve('scripts/videos/data/transcripts');
const TRANSLATION_DIR = resolve('scripts/videos/data/translations');
const TARGET_LANGUAGE = 'zh' as const;
const DEFAULT_MODEL = process.env.OPENAI_TRANSLATION_MODEL || process.env.OPENAI_MODEL || 'gpt-4.1-mini';
const MAX_BATCH_CHARS = Number(process.env.TRANSCRIPT_TRANSLATION_BATCH_CHARS || 9000);

const args = new Set(process.argv.slice(2));
const force = args.has('--force');
const limitArg = process.argv.find((arg) => arg.startsWith('--limit='));
const limit = limitArg ? Number(limitArg.split('=')[1]) : undefined;
const idsArg = process.argv.find((arg) => arg.startsWith('--ids='));
const requestedIds = idsArg ? new Set(idsArg.split('=')[1].split(',').map((id) => id.trim())) : undefined;

function readTranscript(videoId: string): TranscriptRecord | null {
  const path = join(RAW_DIR, `${videoId}.json`);
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf8')) as TranscriptRecord;
}

function translationPath(videoId: string): string {
  return join(TRANSLATION_DIR, `${videoId}.${TARGET_LANGUAGE}.json`);
}

function readTranslation(videoId: string): TranscriptTranslation | null {
  const path = translationPath(videoId);
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
  if (!apiKey) throw new Error('OPENAI_API_KEY is required to translate transcripts.');

  const payload = {
    model,
    temperature: 0.1,
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'system',
        content:
          'You are a professional translator for a Chinese policy-analysis website. Translate English video transcript paragraphs into clear, faithful Simplified Chinese. Preserve names, institutions, numbers, dates, acronyms, and policy terms. Do not summarize. Do not add commentary. Return only JSON: {"paragraphs":["..."]}. The output array must have exactly the same number of items as the input array.',
      },
      {
        role: 'user',
        content: JSON.stringify({ paragraphs }),
      },
    ],
  };

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI translation failed: ${response.status} ${text}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error('OpenAI translation response was empty.');

  const translated = parseParagraphs(content);
  if (paragraphs.length === 1 && translated.length > 1) {
    return [translated.join(' ')];
  }
  if (translated.length !== paragraphs.length) {
    throw new Error(`Translation paragraph count mismatch: expected ${paragraphs.length}, got ${translated.length}.`);
  }
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
  if (isChineseLanguage(record.language)) {
    return {
      videoId: record.videoId,
      targetLanguage: TARGET_LANGUAGE,
      sourceLanguage: record.language,
      translatedAt: record.fetchedAt,
      source: 'source',
      paragraphs: record.paragraphs,
    };
  }

  const chunks = chunkParagraphs(record.paragraphs);
  const translated: string[] = [];

  for (let index = 0; index < chunks.length; index += 1) {
    process.stdout.write(` batch ${index + 1}/${chunks.length}`);
    translated.push(...(await translateBatchWithFallback(chunks[index], model)));
  }
  process.stdout.write('\n');

  return {
    videoId: record.videoId,
    targetLanguage: TARGET_LANGUAGE,
    sourceLanguage: record.language,
    translatedAt: new Date().toISOString().slice(0, 10),
    source: 'openai',
    model,
    paragraphs: translated,
  };
}

function regenerateTranscriptData(): void {
  const result = spawnSync('npx', ['tsx', 'scripts/videos/fetch-transcripts.ts', '--emit-only'], {
    stdio: 'inherit',
    encoding: 'utf8',
  });
  if (result.status !== 0) throw new Error('Failed to regenerate src/data/video-transcripts.ts.');
}

async function main(): Promise<void> {
  mkdirSync(TRANSLATION_DIR, { recursive: true });

  const selected = videos.filter((video) => !requestedIds || requestedIds.has(video.id)).slice(0, limit);
  const rawFiles = new Set(readdirSync(RAW_DIR).filter((file) => file.endsWith('.json')));
  let translatedCount = 0;
  let skippedCount = 0;
  let missingCount = 0;

  for (const video of selected) {
    if (!rawFiles.has(`${video.id}.json`)) {
      process.stdout.write(`Skipping ${video.id}: no fetched transcript cache\n`);
      missingCount += 1;
      continue;
    }

    const record = readTranscript(video.id);
    if (!record || record.paragraphs.length === 0) {
      process.stdout.write(`Skipping ${video.id}: transcript unavailable\n`);
      missingCount += 1;
      continue;
    }

    const cached = readTranslation(video.id);
    if (cached) {
      process.stdout.write(`Skipping ${video.id}: cached zh translation\n`);
      skippedCount += 1;
      continue;
    }

    process.stdout.write(`Translating ${video.id} (${record.language}, ${record.paragraphs.length} paragraphs) ...`);
    const translation = await translateRecord(record, DEFAULT_MODEL);
    writeFileSync(translationPath(video.id), `${JSON.stringify(translation, null, 2)}\n`);
    translatedCount += 1;
  }

  regenerateTranscriptData();
  process.stdout.write(
    `Done. translated=${translatedCount}, cached=${skippedCount}, missing=${missingCount}, model=${DEFAULT_MODEL}\n`
  );
}

await main();
