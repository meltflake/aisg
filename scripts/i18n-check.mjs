#!/usr/bin/env node
// i18n consistency check — scans a built locale directory for residue
// of any other locale's script.
//
// Run after `npm run build`:
//   node scripts/i18n-check.mjs                   # default: scan dist/en for CJK
//   node scripts/i18n-check.mjs --lang en         # same as above
//   node scripts/i18n-check.mjs --lang ja         # scan dist/ja for non-Japanese leaks (CJK ok except CN-only)
//   node scripts/i18n-check.mjs --lang en --root dist
//
// Strategy:
//   1. Walk dist/<lang>/**.html
//   2. Strip <script>, <style>, <head>, HTML comments, attributes
//   3. Match the "foreign script" regex defined per target lang
//   4. Allow-list a small set of intentional cross-lang strings
//      (lang banner copy, switcher labels)
//   5. Report unique residual strings per page; exit non-zero if any
//
// The default config below targets EN pages and flags CJK Unified
// Ideographs. To support a new locale L, add a config entry under
// LANG_CONFIG. The script is locale-agnostic; only the regex and
// allow-list change per target.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import process from 'node:process';

// Parse --lang and --root flags.
const argv = process.argv.slice(2);
function arg(name, fallback) {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
}
const LANG = arg('--lang', 'en');
const ROOT_BASE = arg('--root', 'dist');
const ROOT = `${ROOT_BASE}/${LANG}`;

// Per-target-lang config. Each entry says "what foreign script should
// NOT appear on a page in this locale", plus intentional exceptions.
const LANG_CONFIG = {
  en: {
    // Match CJK Unified Ideographs runs.
    foreignRegex: /[一-鿿]+(?:[一-鿿\s·。，、！？：；'-]*[一-鿿]+)*/g,
    // Strings that ARE allowed despite containing CJK.
    allowPatterns: [
      // LangBanner: invite user to switch to zh.
      '中文版可用',
      '阅读中文版',
      // LanguageToggle: target-language button label.
      '中',
    ],
  },
  // Example future locale: ja. The foreignRegex would flag CJK Unified
  // Ideographs that aren't valid Japanese kanji + kana — but in practice
  // a coarse "any zh-only character" filter is hard. For now if/when JA
  // ships, we can refine. Today the only active scan is EN.
};

const conf = LANG_CONFIG[LANG];
if (!conf) {
  console.error(`[i18n-check] No config for lang "${LANG}". Add an entry to LANG_CONFIG.`);
  process.exit(2);
}

const ALLOW_PATTERNS = conf.allowPatterns;

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
  // English Hansard originals can contain quoted Chinese names, idioms,
  // titles, or programme names. Strip only explicitly marked original-source
  // blocks so EN UI/content leaks are still caught elsewhere.
  s = s.replace(/<section[^>]*data-i18n-allow-cjk=["']hansard-original["'][^>]*>[\s\S]*?<\/section>/gi, ' ');
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

function findForeign(text) {
  // Reset stateful regex's lastIndex so repeated calls on different texts work.
  conf.foreignRegex.lastIndex = 0;
  return [...text.matchAll(conf.foreignRegex)].map((m) => m[0]);
}

function isAllowed(s) {
  return ALLOW_PATTERNS.some((p) => s.includes(p));
}

function scanFile(file) {
  const html = readFileSync(file, 'utf8');
  const findings = [];

  // 1) Visible body text
  const body = visibleText(html);
  for (const hit of findForeign(body)) {
    if (!isAllowed(hit)) findings.push({ where: 'body', hit });
  }

  // 2) Meta tags & <title>
  for (const [name, content] of metaText(html)) {
    for (const hit of findForeign(content)) {
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

  console.log(`[i18n-check] lang=${LANG}, root=${ROOT}`);
  console.log(`[i18n-check] Scanned ${totalPages} pages.`);
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
    const what = LANG === 'en' ? 'Chinese residue on EN' : `foreign-script residue on ${LANG.toUpperCase()}`;
    console.log(`\n[i18n-check] OK — no ${what} pages.`);
  }
}

main();
