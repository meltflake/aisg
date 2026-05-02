import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

import { debates } from '../../src/data/debates';

interface TranscriptRecord {
  debateId: string;
  reportId: string;
  title: string;
  sourceUrl: string;
  sourceLanguage: 'en';
  fetchedAt: string;
  source: 'sprs-hansard' | 'unavailable';
  paragraphs: string[];
  error?: string;
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
const OUT_FILE = resolve('src/data/debate-transcripts.ts');

const args = new Set(process.argv.slice(2));
const force = args.has('--force');
const emitOnly = args.has('--emit-only');
const limitArg = process.argv.find((arg) => arg.startsWith('--limit='));
const limit = limitArg ? Number(limitArg.split('=')[1]) : undefined;
const idsArg = process.argv.find((arg) => arg.startsWith('--ids='));
const requestedIds = idsArg ? new Set(idsArg.split('=')[1].split(',').map((id) => id.trim())) : undefined;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function readString(record: Record<string, unknown>, key: string): string {
  const value = record[key];
  return typeof value === 'string' ? value : '';
}

function decodeEntities(value: string): string {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, '-');
}

function htmlToParagraphs(html: string): string[] {
  const withBreaks = html
    .replace(/\r?\n/g, ' ')
    .replace(/<(br|hr)\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6]|tr)>/gi, '\n')
    .replace(/<(p|div|li|h[1-6]|tr)(\s[^>]*)?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');

  return decodeEntities(withBreaks)
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

function cachedRecord(debateId: string): TranscriptRecord | null {
  const path = join(RAW_DIR, `${debateId}.json`);
  if (!existsSync(path) || force) return null;
  return JSON.parse(readFileSync(path, 'utf8')) as TranscriptRecord;
}

function getSprsReportId(debate: (typeof debates)[number]): string {
  const match = debate.sourceUrl.match(/[?&]reportid=([^&]+)/) || debate.sourceUrl.match(/reportid=([^&]+)/);
  return match ? decodeURIComponent(match[1]) : debate.id;
}

function readTranslation(debateId: string): TranscriptTranslation | null {
  const path = join(TRANSLATION_DIR, `${debateId}.zh.json`);
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf8')) as TranscriptTranslation;
}

async function fetchTranscript(debate: (typeof debates)[number]): Promise<TranscriptRecord> {
  const cached = cachedRecord(debate.id);
  if (cached) return cached;

  mkdirSync(RAW_DIR, { recursive: true });

  const reportId = getSprsReportId(debate);
  const fetchedAt = new Date().toISOString().slice(0, 10);
  const url = new URL('https://sprs.parl.gov.sg/search/getHansardTopic/');
  url.searchParams.set('id', reportId);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Referer: 'https://sprs.parl.gov.sg/search/',
        'User-Agent': 'Mozilla/5.0',
      },
      body: '{}',
    });

    if (!response.ok) throw new Error(`SPRS returned ${response.status}`);

    const data = (await response.json()) as unknown;
    if (!isRecord(data) || !isRecord(data.resultHTML)) throw new Error('SPRS response missing resultHTML.');

    const result = data.resultHTML;
    const contentHtml =
      readString(result, 'content') || readString(result, 'htmlFullContent') || readString(result, 'htmlContent');
    const paragraphs = htmlToParagraphs(contentHtml);
    if (paragraphs.length === 0) throw new Error('SPRS response contained no transcript text.');

    const record: TranscriptRecord = {
      debateId: debate.id,
      reportId,
      title: readString(result, 'title') || debate.title,
      sourceUrl: debate.sourceUrl,
      sourceLanguage: 'en',
      fetchedAt,
      source: 'sprs-hansard',
      paragraphs,
    };
    writeFileSync(join(RAW_DIR, `${debate.id}.json`), `${JSON.stringify(record, null, 2)}\n`);
    return record;
  } catch (error) {
    const record: TranscriptRecord = {
      debateId: debate.id,
      reportId,
      title: debate.title,
      sourceUrl: debate.sourceUrl,
      sourceLanguage: 'en',
      fetchedAt,
      source: 'unavailable',
      paragraphs: [],
      error: error instanceof Error ? error.message : String(error),
    };
    writeFileSync(join(RAW_DIR, `${debate.id}.json`), `${JSON.stringify(record, null, 2)}\n`);
    return record;
  }
}

function emitData(records: TranscriptRecord[]): void {
  const available = records
    .filter((record) => record.paragraphs.length > 0)
    .map((record) => {
      const translation = readTranslation(record.debateId);
      return [
        record.debateId,
        {
          debateId: record.debateId,
          reportId: record.reportId,
          sourceUrl: record.sourceUrl,
          sourceLanguage: record.sourceLanguage,
          fetchedAt: record.fetchedAt,
          source: record.source,
          paragraphs: translation?.paragraphs || [],
          paragraphsEn: record.paragraphs,
          ...(translation
            ? {
                translatedAt: translation.translatedAt,
                translationSource: translation.source,
                translationModel: translation.model,
              }
            : {}),
          ...(record.error ? { error: record.error } : {}),
        },
      ] as const;
    });

  const data = JSON.stringify(Object.fromEntries(available), null, 2);
  const body = `export interface DebateTranscript {
  debateId: string;
  reportId: string;
  sourceUrl: string;
  sourceLanguage: 'en';
  fetchedAt: string;
  source: 'sprs-hansard' | 'manual' | 'unavailable';
  /** Default-locale readable transcript (zh). */
  paragraphs: string[];
  /** Original Hansard transcript (English). */
  paragraphsEn: string[];
  translatedAt?: string;
  translationSource?: 'openai' | 'manual' | 'source';
  translationModel?: string;
  error?: string;
}

export const debateTranscripts: Record<string, DebateTranscript> = ${data};

export function getDebateTranscript(debateId: string): DebateTranscript | undefined {
  return debateTranscripts[debateId];
}

export function getDebateTranscriptParagraphs(debateId: string, lang: 'zh' | 'en'): string[] {
  const transcript = getDebateTranscript(debateId);
  if (!transcript) return [];
  return lang === 'en' ? transcript.paragraphsEn : transcript.paragraphs;
}

export function getDebateTranscriptLanguage(debateId: string, lang: 'zh' | 'en'): string | undefined {
  const transcript = getDebateTranscript(debateId);
  if (!transcript) return undefined;
  if (lang === 'en') return transcript.paragraphsEn.length ? 'en' : undefined;
  return transcript.paragraphs.length ? 'zh-CN' : undefined;
}
`;

  writeFileSync(OUT_FILE, body);
}

function loadCachedRecords(): TranscriptRecord[] {
  return debates
    .map((debate) => {
      const path = join(RAW_DIR, `${debate.id}.json`);
      if (!existsSync(path)) return null;
      return JSON.parse(readFileSync(path, 'utf8')) as TranscriptRecord;
    })
    .filter(Boolean) as TranscriptRecord[];
}

const selected = debates.filter((debate) => !requestedIds || requestedIds.has(debate.id)).slice(0, limit);

if (!emitOnly) {
  for (const debate of selected) {
    process.stdout.write(`Fetching ${debate.id} ... `);
    const record = await fetchTranscript(debate);
    process.stdout.write(record.paragraphs.length ? `ok (${record.paragraphs.length} paragraphs)\n` : 'unavailable\n');
  }
}

emitData(loadCachedRecords());

if (existsSync(RAW_DIR)) {
  process.stdout.write(`Emitted ${readdirSync(RAW_DIR).filter((file) => file.endsWith('.json')).length} cached records.\n`);
}
