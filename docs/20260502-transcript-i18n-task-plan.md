# Transcript i18n Fix Plan

## Goal

Make video transcripts follow the same multilingual data contract as the rest of sgai.md: English captions should be available on English pages, Chinese pages should render translated Chinese transcript text, and future languages should have a clear extension point.

## Phases

| Phase                                | Status      | Notes                                                                 |
| ------------------------------------ | ----------- | --------------------------------------------------------------------- |
| 1. Audit transcript data and rendering | complete    | Confirmed video transcript records and pages were single-language.      |
| 2. Audit analogous single-language content | complete    | Found debate raw transcripts are intentionally labeled as original English; no same leak pattern found in generated detail pages. |
| 3. Implement localized transcript data | complete    | Added generator/check/page plumbing and generated zh translations for all available transcripts. |
| 4. Verify and document               | complete    | Full checks, build, EN i18n scan, and static transcript spot checks passed. |

## Decisions

| Decision | Reason |
| -------- | ------ |
| Keep transcript source language explicit. | Captions may be fetched in English today, but future videos may have other source languages. |
| Prefer generated data over runtime translation. | Static HTML is better for SEO/GEO and avoids client-side or API dependency at read time. |

## Errors Encountered

| Error | Attempt | Resolution |
| ----- | ------- | ---------- |
| Shell expanded `[id].astro` as a glob and failed. | Tried `sed` without quoting bracketed route names. | Re-ran reads with quoted paths. |
| `check:video-transcripts` failed after structural migration. | Ran check before translation cache existed. | Expected guard failure; next step is generating zh translations. |
| `v054` translation returned 5 paragraphs for 4 source paragraphs. | Ran full translation after one-record smoke test. | Added fallback that retries a failed batch paragraph-by-paragraph to preserve one-to-one paragraph counts. |
| A single `v003` paragraph was translated as two paragraphs. | Paragraph-level fallback still enforced exact count and failed. | If a one-paragraph input returns multiple translated paragraphs, join them back into one paragraph. |
