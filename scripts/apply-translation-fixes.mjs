#!/usr/bin/env node
// Apply structured translation fixes from /tmp/sgai-digests/translation-fixes.json.
// Each fix has { file, old, new, reason }. Performs an exact string replace if
// `old` appears exactly once in the target file. Reports any fix that fails.

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const fixes = JSON.parse(readFileSync('/tmp/sgai-digests/translation-fixes.json', 'utf8')).fixes;

const byFile = new Map();
for (const fix of fixes) {
  if (!byFile.has(fix.file)) byFile.set(fix.file, []);
  byFile.get(fix.file).push(fix);
}

let total = 0;
let succeeded = 0;
const failures = [];
for (const [relPath, list] of byFile) {
  const abs = resolve(process.cwd(), relPath);
  let src = readFileSync(abs, 'utf8');
  for (const fix of list) {
    total++;
    if (fix.old === fix.new) {
      succeeded++;
      continue;
    }
    const occurrences = src.split(fix.old).length - 1;
    if (occurrences === 0) {
      failures.push({ ...fix, occurrences });
      continue;
    }
    if (occurrences > 1) {
      failures.push({ ...fix, occurrences });
      continue;
    }
    src = src.replace(fix.old, fix.new);
    succeeded++;
  }
  writeFileSync(abs, src);
}

console.log(`Applied ${succeeded}/${total} fixes`);
if (failures.length) {
  console.log(`\n${failures.length} fixes need manual attention:\n`);
  for (const f of failures) {
    console.log(`  [${f.file}] (${f.occurrences} matches) — ${f.reason}`);
    console.log(`    old: ${JSON.stringify(f.old.slice(0, 80))}`);
  }
}
