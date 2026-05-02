#!/usr/bin/env node
// i18n consistency check — scans dist/en/ for Chinese residue.
//
// Run after `npm run build`:
//   node scripts/i18n-check.mjs
//
// Strategy:
//   1. Walk dist/en/**.html
//   2. Strip <script>, <style>, HTML comments, attributes
//   3. Find CJK Unified Ideographs (一-鿿) in remaining text
//   4. Allow-list a small set of intentional cross-lang strings
//      (lang banner copy, switcher label "中", zhName ruby sub-line, etc.)
//   5. Report unique residual strings per page; exit non-zero if any
//
// Allow-list rule of thumb: any phrase shown to invite the user to switch
// languages, OR a documented bilingual sub-display (e.g. zhName under the
// English name on /people/* cards) is allowed. Everything else is a bug.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import process from 'node:process';

const ROOT = 'dist/en';

// Strings that ARE allowed to appear in zh on EN-rendered HTML.
// Keep this list short and well-justified.
const ALLOW_PATTERNS = [
  // LangBanner: invite user to switch to zh
  '中文版可用',
  '阅读中文版',
  // LanguageToggle: button label that leads to zh page
  '中', // single character, used as toggle target label
  // zhName ruby sub-display below English name on /people/* and /voices/
  // Names get a separate allowance: any 2-4 char string in <p class="...zhName...">
  // We can't reliably scope by class via regex, so we accept short pure-CJK runs
  // (≤ 6 chars) when they look like proper names. See PROPER_NAME_HEURISTIC below.
];

// Proper-name heuristic: stand-alone short CJK runs (2-6 chars) that appear
// inside known bilingual sub-display contexts. We approximate by length.
function isLikelyZhName(s) {
  return /^[一-鿿·\s]{2,8}$/.test(s);
}

function listHtml(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...listHtml(p));
    else if (st.isFile() && p.endsWith('.html')) out.push(p);
  }
  return out;
}

function visibleText(htmlSrc) {
  let s = htmlSrc;
  // Strip <script> / <style> / <template> blocks
  s = s.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  s = s.replace(/<template[\s\S]*?<\/template>/gi, ' ');
  // Strip <head>...</head> entirely — meta/title is checked separately
  s = s.replace(/<head[\s\S]*?<\/head>/i, ' ');
  // Remove HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, ' ');
  // Strip every opening / self-closing / closing tag completely (attrs and all).
  // Data-search blobs, alt text, title attrs, aria-label etc. live inside attrs
  // and are NOT user-visible body text — drop them.
  s = s.replace(/<\/?[a-zA-Z][^>]*>/g, ' ');
  // Drop any leftover stray angle bracket
  s = s.replace(/<[^>]+>/g, ' ');
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function metaText(htmlSrc) {
  // Pull og:site_name, og:locale, og:title, og:description, twitter:title,
  // twitter:description, <title>, <meta name="description">
  const out = [];
  const head = htmlSrc.match(/<head[\s\S]*?<\/head>/i)?.[0] ?? '';
  const titleMatch = head.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) out.push(['<title>', titleMatch[1].trim()]);
  for (const m of head.matchAll(/<meta\s+([^>]+?)\/?>/gi)) {
    const attrs = m[1];
    const name = attrs.match(/(?:property|name)=["']([^"']+)["']/i)?.[1];
    const content = attrs.match(/content=["']([^"']*)["']/i)?.[1] ?? '';
    if (!name) continue;
    if (
      [
        'og:site_name',
        'og:title',
        'og:description',
        'og:locale',
        'twitter:title',
        'twitter:description',
        'description',
      ].includes(name)
    ) {
      out.push([name, content]);
    }
  }
  return out;
}

function findCjk(text) {
  const re = /[一-鿿]+(?:[一-鿿\s·。，、！？：；'-]*[一-鿿]+)*/g;
  return [...text.matchAll(re)].map((m) => m[0]);
}

function isAllowed(s) {
  if (ALLOW_PATTERNS.some((p) => s.includes(p))) return true;
  if (isLikelyZhName(s)) return true;
  return false;
}

function scanFile(file) {
  const html = readFileSync(file, 'utf8');
  const findings = [];

  // 1) Visible body text
  const body = visibleText(html);
  for (const hit of findCjk(body)) {
    if (!isAllowed(hit)) findings.push({ where: 'body', hit });
  }

  // 2) Meta tags & <title>
  for (const [name, content] of metaText(html)) {
    for (const hit of findCjk(content)) {
      if (!isAllowed(hit)) findings.push({ where: name, hit });
    }
  }

  // De-dup
  const seen = new Set();
  const uniq = [];
  for (const f of findings) {
    const k = f.where + '||' + f.hit;
    if (seen.has(k)) continue;
    seen.add(k);
    uniq.push(f);
  }
  return uniq;
}

function main() {
  let files;
  try {
    files = listHtml(ROOT);
  } catch {
    console.error(`[i18n-check] Cannot read ${ROOT}. Run \`npm run build\` first.`);
    process.exit(2);
  }

  let totalPages = 0;
  let dirtyPages = 0;
  let totalHits = 0;
  const perPage = [];

  for (const f of files) {
    totalPages++;
    const findings = scanFile(f);
    if (findings.length > 0) {
      dirtyPages++;
      totalHits += findings.length;
      perPage.push({ path: relative('dist', f), findings });
    }
  }

  perPage.sort((a, b) => b.findings.length - a.findings.length);

  console.log(`[i18n-check] Scanned ${totalPages} EN pages.`);
  console.log(`[i18n-check] Pages with residue: ${dirtyPages}`);
  console.log(`[i18n-check] Total residue findings: ${totalHits}`);

  const max = parseInt(process.env.I18N_REPORT_LIMIT || '20', 10);
  for (const { path, findings } of perPage.slice(0, max)) {
    console.log(`\n  ${findings.length}  ${path}`);
    const sample = findings.slice(0, 8);
    for (const { where, hit } of sample) {
      console.log(`     [${where}] ${hit}`);
    }
    if (findings.length > sample.length) {
      console.log(`     … and ${findings.length - sample.length} more`);
    }
  }

  if (dirtyPages > 0) {
    console.log(`\n[i18n-check] FAIL — fix the residue above.`);
    process.exit(1);
  } else {
    console.log(`\n[i18n-check] OK — no Chinese residue on EN pages.`);
  }
}

main();
