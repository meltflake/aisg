# Changelog

## 2026-02-17 — Switch to AstroWind Theme

### What changed
- **Theme**: Migrated from Astro minimal template + custom CSS to AstroWind (Tailwind CSS)
- **Structure**: All content now in dedicated page routes instead of content collections
  - `/policies/` — 7 policy cards with full details inline
  - `/evolution/` — 5-phase timeline with visual indicators
  - `/tracker/` — Data tables for 16+ execution metrics
  - `/challenges/` — 6 challenge analysis cards
  - `/references/` — 30+ categorized reference links
- **Navigation**: Chinese nav bar (政策库、政策演进、执行追踪、挑战分析、参考资料)
- **Homepage**: Hero section + Features grid + Stats + CTA
- **Config**: site=`https://meltflake.com`, base=`/aisg/`, language=zh-CN
- **Removed**: All AstroWind demo pages (homes, landing, pricing, about, contact, services)
- **Removed**: Demo blog posts from `src/data/post/`
- **Kept**: GitHub Actions deploy workflow, blog routing (for future use)

### Decisions
- Policies are rendered as inline data in the page component rather than using content collections, since AstroWind's content schema differs from the original. This keeps it simple.
- Blog system is kept enabled but empty, available for future articles.
- Force-pushed to main (clean history, no relation to old template).
