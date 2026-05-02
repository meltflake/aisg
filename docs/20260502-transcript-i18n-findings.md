# Transcript i18n Findings

## 2026-05-02

- Session catchup reported older i18n context, but current `git status -sb` is clean and `main` is aligned with `origin/main`.
- `src/data/video-transcripts.ts` currently stores one transcript language per video with `language: 'en'` and `paragraphs: string[]`; there is no localized sibling field for zh pages.
- `scripts/videos/fetch-transcripts.ts` fetches YouTube captions by language preference but emits only the fetched source paragraphs, so fetched English captions leak into the default zh detail page.
- Chinese and English video detail pages both read the same `transcript.paragraphs` field; the page layer had no locale-specific selection.
- Debate pages expose English Hansard excerpts as deliberately labeled original transcripts, while the video page promises readable transcript content. The video transcript leak is therefore the analogous generated-content problem that needs a guard.
- Added `check:video-transcripts` to fail when an English transcript exists without a Chinese default transcript.
- OpenAI translation often re-segments noisy YouTube captions. Batch translation therefore needs count validation, paragraph-level fallback, and one-paragraph merge handling.
- Final generated transcript data contains 51 records with both zh `paragraphs` and `paragraphsEn`; unavailable videos remain excluded from page data.
