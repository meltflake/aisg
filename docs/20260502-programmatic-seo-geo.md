# Programmatic SEO / GEO 页面生成规范

> Last updated: 2026-05-02
> 适用范围：voices、videos、benchmarking、levers、legal-ai，以及未来所有“列表 / 卡片 / 数据条目 → 独立详情页”的内容模块。

## 1. 目标

sgai.md 的核心资产不是少数导航页，而是每一个可被引用的实体：一场辩论、一个人、一个国家、一段视频、一个政策杠杆、一个法律 AI 项目。

每个实体都应该有稳定 URL、完整元信息、双语内容、相关链接、结构化数据，并能被 Google、Pagefind 和 LLM crawler 直接读取。

## 2. 当前已生成的详情页

| 模块         | 中文 URL                  | 英文 URL                     | 数据来源                          | 主要 schema                     |
| ------------ | ------------------------- | ---------------------------- | --------------------------------- | ------------------------------- |
| 国会辩论     | `/debates/[id]/`          | `/en/debates/[id]/`          | `src/data/debates.ts` + transcript | `Article`                       |
| 人物观点     | `/voices/[id]/`           | `/en/voices/[id]/`           | `src/data/people.ts`              | `Person`                        |
| 视频观点     | `/videos/[id]/`           | `/en/videos/[id]/`           | `src/data/videos.ts` + transcript | `VideoObject`                   |
| 国际对标     | `/benchmarking/[region]/` | `/en/benchmarking/[region]/` | `src/data/benchmarking.ts`        | `Article`                       |
| 政策杠杆项目 | `/levers/[id]/`           | `/en/levers/[id]/`           | `src/data/levers.ts`              | `GovernmentService` / `Article` |
| Legal AI 卡片 | `/legal-ai/[id]/`         | `/en/legal-ai/[id]/`         | `src/data/legal-ai.ts`            | `Legislation` / `DefinedTerm`   |

旧的 `/people/[id]/` 继续保留，canonical 指向新的 `/voices/[id]/`，避免断掉历史入口。

## 3. URL 与 slug 规则

统一使用 `src/utils/entity-pages.ts` 管理可复用的实体 slug 与扁平化页面数据。

- `toSeoSlug(value)`：把标题、人名、机构名转成小写、连字符分隔的可读 slug。
- `regionPages` / `regionSlug()`：生成国际对标国家页。
- `leverPages` / `leverItemSlug()`：把政策杠杆和项目扁平化成详情页。
- `legalItemPages` / `legalItemSlug()`：把 legal-ai 卡片扁平化成详情页。

新增模块时优先扩展这个文件，而不是在页面里临时拼 slug。这样 sitemap、llms.txt、详情页和列表页能共用同一套 URL 规则。

## 4. i18n 内容完整性

新增实体详情页必须同时满足：

- 中文页和英文页都存在，路径结构一一镜像。
- 用户可见字段必须有 `*En` 兄弟字段；未来新语言按 `*Ja`、`*Ko` 等扩展。
- 渲染字段优先用 `pickLocalized(record, 'title', lang)` 这类通用 helper。
- 内部链接统一用 `localizedHref(path, lang)`，不要硬编码 `/en/`。
- 英文页不能展示中文副标题、中文说明、中文状态值；提交前跑 `npm run build && npm run check:i18n`。

未来新增第三语言时，先更新 `docs/i18n.md` 里的 `LOCALES`、fallback chain、字典和页面镜像规则，再复制这些详情页结构。

## 5. 关联阅读与内部链接

详情页不是孤岛。每类页面至少应有一种向内链接：

- 人物页：关联辩论、政策、视频观点、社交链接。
- 辩论页：关联人物、政策、相近主题内容。
- 视频页：关联人物、transcript、原视频链接、同主题页面。
- 国家页：关联政策维度、比较结论、相关国家。
- 杠杆页：关联执行部门、阶段、相关政策与项目。
- Legal AI 页：关联分类、阶段、年份、来源链接。

共享关联模块优先改 `src/components/data/RelatedRail.astro`，不要在各页面复制同一套链接规则。

## 6. 视频 transcript 刷新

视频 transcript 通过脚本生成，不手工维护。流程分两步：先抓 YouTube 原始字幕，再翻译成默认语言。

```bash
npm run fetch:video-transcripts
npm run fetch:video-transcripts -- --limit=3
npm run fetch:video-transcripts -- --force
npm run fetch:video-transcripts -- --emit-only
npm run translate:video-transcripts
npm run check:video-transcripts
```

脚本位置：

- `scripts/videos/fetch-transcripts.ts`：抓字幕 / 根据缓存重建数据
- `scripts/videos/translate-transcripts.ts`：把非默认语言字幕翻译成默认中文
- `scripts/videos/check-transcript-i18n.ts`：检查 transcript i18n 完整性

输出文件：`src/data/video-transcripts.ts`

缓存目录：`scripts/videos/data/`，已被 git ignore。当前 YouTube 自动字幕并非每条视频都有，脚本会跳过不可用 transcript；详情页会自动显示 transcript 可用性。

数据字段遵守 i18n 约定：`paragraphs` 是默认中文 transcript，`paragraphsEn` 是英文 transcript。抓到英文字幕后必须运行 `translate:video-transcripts`，不能让中文页直接展示英文原文。

## 7. 国会辩论 transcript 刷新

国会辩论详情页必须让搜索引擎和 LLM 直接看到完整正文，不再把原文藏在折叠区。英文页展示完整 Hansard 原文；中文页同时展示完整中文译文和英文原文。

```bash
npm run fetch:debate-transcripts
npm run fetch:debate-transcripts -- --ids=written-answer-21161
npm run fetch:debate-transcripts -- --force
npm run fetch:debate-transcripts -- --emit-only
npm run translate:debate-transcripts
npm run check:debate-transcripts
```

脚本位置：

- `scripts/hansard/fetch-debate-transcripts.ts`：从 SPRS API 抓完整 Hansard 原文，并生成页面数据
- `scripts/hansard/translate-debate-transcripts.ts`：把英文原文翻译成默认中文，支持缓存、并发、5xx/429 重试
- `scripts/hansard/check-debate-transcript-i18n.ts`：检查每场辩论都有英文原文和中文译文

输出文件：`src/data/debate-transcripts.ts`

缓存目录：`scripts/hansard/data/transcripts/`、`scripts/hansard/data/translations/`，已被 git ignore。少数站内自定义 id（如 `cos-moh-2026`）不是 SPRS report id，脚本会从 `sourceUrl` 的 `reportid=` 解析真实 ID。

数据字段遵守 i18n 约定：`paragraphs` 是默认中文完整译文，`paragraphsEn` 是英文完整原文。非英文页面不得只展示英文原文；英文页不需要显示中文译文。

## 8. LLM / GEO 可读面

GEO 的重点是让模型能低成本理解站点结构和引用具体页面。

- `public/robots.txt` 显式允许主流搜索与 LLM crawler，并保留 sitemap。
- `/llms.txt` 暴露高价值入口与主要专题页面。
- `/llms-full.txt` 暴露完整详情页 URL 索引，方便 LLM crawler 发现实体页。
- 详情页尽量用服务端生成 HTML，不把核心内容藏在客户端 JS 里。

新增大型模块后，同步更新 `/llms.txt` 或 `/llms-full.txt` 的生成逻辑。

## 9. 验收命令

涉及详情页、共享组件、数据字段、EN 页面时，至少跑：

```bash
npm run check
npm run build
npm run check:i18n
```

如果改了视频数据或 transcript：

```bash
npm run fetch:video-transcripts
npm run translate:video-transcripts
npm run check:video-transcripts
npm run check
```

如果改了国会辩论数据或 transcript：

```bash
npm run fetch:debate-transcripts
npm run translate:debate-transcripts
npm run check:debate-transcripts
npm run check
```

如果只是补文档，跑 `npm run check` 即可。
