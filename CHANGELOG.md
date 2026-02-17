# Changelog

## 0.0.3 — 2026-02-17

### Feature: Grouped dropdown navigation & 3 new pages

- **Navigation refactor**: Flat nav → grouped dropdown menus
  - 政策观察 ▾ (政策文件, 发展时间线, 生态地图)
  - AI 追踪 ▾ (关键指标, 人才培养)
  - 参考资源 (flat link)
- **New page: 发展时间线** (`/timeline/`) — Vertical timeline of Singapore AI milestones from 2014–2027
- **New page: 生态地图** (`/ecosystem/`) — AI ecosystem map with 8 categories covering research, governance, tech, talent, products, innovation, international, and industry partners
- **New page: 人才培养** (`/talent/`) — 8 talent development programmes with key stats cards (AIAP, LADP, PhD Fellowship, AMP, LearnAI, NAISC, IOAI, AI Goes to School)
- New data files: `src/data/timeline.ts`, `src/data/ecosystem.ts`, `src/data/talent.ts`
- Updated footer to match new navigation structure
- Bumped version to 0.0.3

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
