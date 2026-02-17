# Changelog

## 0.0.2 — 2026-02-17

### Refactor: Separate data from templates

- Extracted all hardcoded page data into `src/data/` TypeScript modules:
  - `src/data/policies.ts` — 19 policy documents across 5 categories with full metadata
  - `src/data/tracker.ts` — 16 tracker metrics across 5 sections
  - `src/data/references.ts` — 26 reference links across 6 categories
  - `src/data/stats.ts` — homepage statistics and feature items
- Updated all 4 pages to import from data files instead of hardcoding:
  - `src/pages/index.astro` — imports stats and features
  - `src/pages/policies/index.astro` — imports policy categories
  - `src/pages/tracker/index.astro` — imports tracker sections
  - `src/pages/references/index.astro` — imports reference sections
- Added TypeScript interfaces for all data types
- Tracker rows now use named fields (`name`, `value`, `source`, `sourceUrl`) instead of array indices
- No visual changes — same HTML output
- Bumped version to 0.0.2

## 0.0.1 — Initial release

- AstroWind-based site with hardcoded data in .astro pages
- Pages: homepage, policies, tracker, references, evolution, challenges
