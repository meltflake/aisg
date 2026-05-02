# Transcript i18n Progress

## 2026-05-02

- Started a focused follow-up after identifying that fetched video captions are English-only while zh pages need localized transcript content.
- Inspected transcript generator and generated data shape; confirmed transcript records are single-language rather than multilingual.
- Updated transcript generation plumbing so generated records can carry default zh `paragraphs` plus `paragraphsEn`.
- Updated video detail pages to read transcript paragraphs by locale instead of sharing one field.
- Added `scripts/videos/check-transcript-i18n.ts`; it correctly fails until zh translations are generated.
- Smoke-tested `translate:video-transcripts -- --limit=1`; `v053` generated valid zh paragraphs and retained English paragraphs in `paragraphsEn`.
- Added paragraph-level fallback after `v054` exposed a batch paragraph-count mismatch.
- Added single-paragraph merge handling after `v003` showed that even one input paragraph can be split by the model.
- Ran full `npm run translate:video-transcripts`; generated zh translations for all 51 available English transcripts, with 3 unavailable videos skipped.
- Ran `npm run check:video-transcripts`; it passed with 51 available transcript records.
- Ran `npm run check`, `npm run build`, and `npm run check:i18n`; all passed. Build generated 1697 pages and Pagefind indexed 1725 pages. EN i18n scan covered 864 pages with 0 residue findings.
- Spot-checked built `v053` pages: zh page contains Chinese transcript and not the English source phrase; EN page contains English transcript and not the Chinese translation phrase.
