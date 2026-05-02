#!/usr/bin/env node
// Inject digest objects from /tmp/sgai-digests/batch-*.json into
// src/data/video-transcripts.ts.
//
// For each `vXXX: { ... }` block, insert
//   digest: { keyPoints: [...], narrative: [...] },
//   digestEn: { keyPoints: [...], narrative: [...] },
// after `paragraphsEn: [...]` and before `translatedAt`.
//
// Idempotent: if a block already has a `digest` field, the existing one is replaced.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET = resolve(__dirname, '../src/data/video-transcripts.ts');
const BATCH_DIR = '/tmp/sgai-digests';

function loadDigests() {
  const out = {};
  const files = readdirSync(BATCH_DIR).filter((f) => /^batch-\d+\.json$/.test(f));
  for (const f of files) {
    const data = JSON.parse(readFileSync(join(BATCH_DIR, f), 'utf8'));
    Object.assign(out, data);
  }
  return out;
}

function indent(str, spaces) {
  const pad = ' '.repeat(spaces);
  return str.split('\n').map((l) => (l.length ? pad + l : l)).join('\n');
}

function tsLiteralFromJsonValue(value) {
  // Use single-quoted strings to match the file's existing style and to avoid
  // re-escaping double quotes inside content.
  return JSON.stringify(value, null, 2)
    .replace(/"((?:[^"\\]|\\.)*)":/g, '$1:')
    .replace(/"((?:[^"\\]|\\.)*)"/g, (_, s) => {
      const unescaped = s.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      const escaped = unescaped.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      return `'${escaped}'`;
    });
}

function buildDigestBlock(digest, digestEn) {
  const zhLit = tsLiteralFromJsonValue(digest);
  const enLit = tsLiteralFromJsonValue(digestEn);
  return `digest: ${indent(zhLit, 4).trimStart()},\n    digestEn: ${indent(enLit, 4).trimStart()},`;
}

function injectInto(source, videoId, digestBlock) {
  // Locate the video block.
  const blockStart = source.indexOf(`  ${videoId}: {`);
  if (blockStart < 0) {
    console.warn(`  ! ${videoId} not found in source`);
    return source;
  }
  // Find the end of paragraphsEn array within this block.
  // Strategy: find translatedAt line within the block; insert digest before it.
  const blockEnd = source.indexOf(`\n  },`, blockStart);
  if (blockEnd < 0) return source;
  const block = source.slice(blockStart, blockEnd);

  // If digest already present, strip it first so this is idempotent.
  let cleaned = block;
  // Match "    digest: { ... },\n    digestEn: { ... },\n" non-greedy until newline + 4 spaces or translatedAt.
  cleaned = cleaned.replace(/\n {4}digest: \{[\s\S]*?\n {4}\},\n {4}digestEn: \{[\s\S]*?\n {4}\},\n/g, '\n');

  // Insert before translatedAt line.
  const translatedAtIdx = cleaned.indexOf('    translatedAt:');
  if (translatedAtIdx < 0) {
    console.warn(`  ! ${videoId}: no translatedAt — inserting before block end`);
    // Insert before final closing brace
    const lastNewline = cleaned.lastIndexOf('\n');
    return source.slice(0, blockStart) + cleaned.slice(0, lastNewline) + `\n    ${digestBlock}` + cleaned.slice(lastNewline) + source.slice(blockEnd);
  }
  const newBlock = cleaned.slice(0, translatedAtIdx) + '    ' + digestBlock + '\n' + cleaned.slice(translatedAtIdx);
  return source.slice(0, blockStart) + newBlock + source.slice(blockEnd);
}

const digests = loadDigests();
console.log(`Loaded ${Object.keys(digests).length} digests from ${BATCH_DIR}`);

let source = readFileSync(TARGET, 'utf8');
const ids = Object.keys(digests);
let injected = 0;
for (const id of ids) {
  const entry = digests[id];
  if (!entry.digest || !entry.digestEn) {
    console.warn(`  ! ${id}: missing digest or digestEn — skipping`);
    continue;
  }
  const block = buildDigestBlock(entry.digest, entry.digestEn);
  const before = source.length;
  source = injectInto(source, id, block);
  if (source.length !== before) injected++;
}

writeFileSync(TARGET, source);
console.log(`Injected ${injected}/${ids.length} digests into ${TARGET}`);
