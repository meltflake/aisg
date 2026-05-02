# Debate Transcript i18n Progress

## 2026-05-02

- 修复国会辩论详情页：英文原文从折叠 `<details>` 改为直接展开。
- 新增 `src/data/debate-transcripts.ts`，把详情页长文本从 `src/data/debates.ts` 拆出，避免继续使用被截断的 `summary` 片段。
- 新增 `npm run fetch:debate-transcripts`：从 SPRS API 抓完整 Hansard 原文；站内自定义 id 会从 `sourceUrl` 的 `reportid=` 解析真实 report id。
- 新增 `npm run translate:debate-transcripts`：把英文 Hansard 原文翻译成默认中文；支持缓存、并发、429 / 5xx 重试。
- 新增 `npm run check:debate-transcripts` 并并入 `npm run check`：检查每场辩论都有英文原文和中文译文。
- 中文 `/debates/[id]/` 展示完整中文译文 + 英文原文；英文 `/en/debates/[id]/` 只展示英文原文。
- 本轮已为 150 条辩论生成完整英文原文和中文译文。
