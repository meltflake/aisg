# Changelog

记录 SG AI 观察 / SG AI Observatory 的版本变化。日期使用本地时间（新加坡）。

---

## 0.6.8 — 2026-05-02

### 国会辩论：完整原文与中文译文

- 辩论详情页不再折叠 Hansard 原文；英文原文直接展开，方便读者、搜索引擎和 LLM crawler 读取。
- 中文详情页新增“完整译文（中文）”区域，同时保留“英文原文”；英文详情页只展示英文原文。
- 新增 `src/data/debate-transcripts.ts`，用完整 Hansard transcript 替代此前被截断的 `debate.summary` 片段。
- 新增 `npm run fetch:debate-transcripts`、`npm run translate:debate-transcripts`、`npm run check:debate-transcripts`，并把检查并入 `npm run check`。
- 本轮已为 150 条国会辩论生成完整英文原文和中文译文。

## 0.6.7 — 2026-05-02

### Logo：暗色模式颜色微调

- 仅调整 logo 中间 `ai` 的颜色为 Solarized `base0`，不改变原 logo 的形状、字形、尺寸和位置。
- 目的：让 logo 在 dark mode 下可读，同时避免与外圈红色混在一起。

## 0.6.6 — 2026-05-02

### 分享卡片：替换模板默认图

- 替换 AstroWind 模板默认 Open Graph 图，避免 X / Twitter 卡片继续显示模板截图。
- 新增 `npm run generate:og-image`，可重生成本站默认分享图。
- 有 Open Graph 图时，Twitter Card 默认使用 `summary_large_image`，让 X 使用大图卡片。

## 0.6.5 — 2026-05-02

### Footer：移除重复的关于本站入口

- Footer 的“深度分析 / Analysis”分组只保留文章入口，不再放“关于本站 / About”。
- “关于本站 / About”保留在 footer 底部工具区，避免信息架构重复。

## 0.6.4 — 2026-05-02

### 移动端：Header 品牌名避让菜单按钮

- 移动端 header 使用短站名，中文为“新加坡 AI”，英文为“SG AI”；`sm` 以上屏幕继续显示完整站名。
- Header 左侧品牌区增加 `min-w-0`，右侧菜单按钮固定不收缩，避免长英文站名遮挡汉堡菜单。

## 0.6.3 — 2026-05-02

### 首页：国会辩论链接修复

- 中文首页“最近国会辩论”每一条改为链接到对应辩论详情页 `/debates/[id]/`。
- 顶部与移动端“全部 150 场”入口继续指向总列表页 `/debates/`。

## 0.6.2 — 2026-05-02

### 首页：最新分析区视觉平衡微调

- 中文与英文首页的“最新分析 / Latest Analyses”从单列文章列表改为桌面双栏：左侧主稿，右侧“继续阅读 / Continue Reading”两篇次稿。
- 移动端保持单列阅读流，不改变首页整体节奏。
- 目的：减少桌面端右侧大面积空白，让文章区左右视觉重量更均衡。

## 0.6.1 — 2026-05-02

### i18n：视频字幕双语化

修复 v0.6.0 的 transcript 漏洞：YouTube 抓到的字幕多数是英文，但中文视频详情页也直接渲染同一份英文 `paragraphs`。

- `src/data/video-transcripts.ts` 改为默认中文 `paragraphs` + 英文 `paragraphsEn`，保留 `captionLanguage`、`translatedAt`、`translationSource`、`translationModel` 方便追溯。
- 新增 `npm run translate:video-transcripts`：读取 `yt-dlp` 抓到的英文字幕，用 OpenAI 翻译成简体中文，缓存到 `scripts/videos/data/translations/`，再重建页面数据。
- 新增 `npm run check:video-transcripts` 并并入 `npm run check`，只要英文 transcript 存在但中文默认 transcript 缺失，CI 会失败。
- 中文 `/videos/[id]/` 只渲染中文 transcript；英文 `/en/videos/[id]/` 只渲染英文 transcript。
- 本轮 51 条可用视频字幕全部补齐中文翻译；3 条 YouTube 本身无可抓字幕，继续按“无字幕”处理。

验证：`npm run check:video-transcripts` 通过，确认 51 条 transcript 均有 zh / en 段落且段落数一致。

## 0.6.0 — 2026-05-02

### SEO / GEO：程序化详情页 + LLM 抓取入口

本轮把“列表页里的卡片内容”拆成可索引、可引用、可互链的独立页面，目标是让搜索引擎和 LLM 都能抓到完整事实页，而不是只看到总览列表。

- **新增程序化详情页**：
  - `/voices/[id]/` + `/en/voices/[id]/`：人物档案，关联国会发言、主导政策、视频观点；旧 `/people/[id]/` 保留并 canonical 到 `/voices/[id]/`。
  - `/videos/[id]/` + `/en/videos/[id]/`：每条视频独立页，含摘要、YouTube embed、`VideoObject` JSON-LD、关联视频、可读字幕。
  - `/benchmarking/[region]/` + `/en/benchmarking/[region]/`：每个国家 / 地区一个对标页，含战略、投资、治理、优势 / 劣势、来源。
  - `/levers/[id]/` + `/en/levers/[id]/`：6 个国家 AI 抓手 + 112 个具体项目独立页。
  - `/legal-ai/[id]/` + `/en/legal-ai/[id]/`：10 个法律框架卡片独立页，含主管机构、状态、正文、来源、同组关联。
- **内链升级**：`RelatedRail`、debates / policies / voices / videos / levers / legal-ai / benchmarking 列表页都改为指向详情页，不再只回到列表页。
- **Transcript Pipeline**：新增 `npm run fetch:video-transcripts`，基于本机 `yt-dlp` 抓 YouTube 字幕，生成 `src/data/video-transcripts.ts`。本轮 54 条视频中 51 条抓到英文字幕。
- **GEO 入口**：新增 `/llms.txt` 和 `/llms-full.txt`，列出高价值页面与全量详情页索引；`robots.txt` 显式允许 GPTBot、ClaudeBot、PerplexityBot、Google-Extended、Bytespider、CCBot，并声明 sitemap。
- **技术 SEO**：`CommonMeta` 生成 zh-CN / en / x-default hreflang（仅对有镜像的核心路径启用），详情页补 Article / Person / VideoObject / GovernmentService / Legislation 等 JSON-LD。
- **复用工具**：新增 `src/utils/entity-pages.ts` 统一生成国家、抓手项目、法律卡片的稳定 slug，后续加数据会自动生成页面。
- **维护文档**：新增 `docs/20260502-programmatic-seo-geo.md`，记录详情页生成、i18n 完整性、transcript 刷新和 GEO 验收规则。

验证：`npm run check` 通过；`npm run build` 生成 1697 页；`npm run check:i18n` 扫描 864 个 EN 页面，中文残留 0。

## 0.5.0 — 2026-05-02

### i18n 多语言化收尾 + 第二轮残留清理

抽查 `/en/voices/` 和 `/en/policies/` 时发现仍有大量中文残留。原因：上一轮 i18n-check 脚本宽容了"短姓名作 zhName 注音"的副显示。撤销这个例外，再扫 → 87 处真实残留全部修复。

- **EN 页面副显示一律隐藏**：人物卡片下的 zhName、政策标题下的 zh title、辩论 zhTitle、MP profile zhName 全部去掉。EN 页面现在是纯英文。
- **数据补齐 `*En` 字段**：`LegalItem.dateEn`、`LeverItem.ministryEn`、`SocialChannel.labelEn` 等。`policies` 数据本来就有 `titleEn`，问题在页面层错把 zh title 当副标题渲染。
- **`pickLocalized` 升级到 N 语言通用形态**：新签名 `pickLocalized(record, baseKey, lang)` 自动按 lang 算 sibling 字段名（`title` → `titleJa` → ...）。旧 4-参形态保留兼容，新代码用新形态。
- **`localizedHref` / `unprefixed` / `localePrefix` / `getLangFromPath` 全 N-locale 化**：加新语言只需扩 `LOCALES` 数组与 `FALLBACK_CHAINS`，不需要改路由逻辑。
- **`scripts/i18n-check.mjs` 接受 `--lang` 参数**：未来加 ja/ko 时复用同一脚本，每个 lang 在 `LANG_CONFIG` 注册自己的 foreign-script 正则与白名单。
- [`docs/i18n.md`](docs/i18n.md) 加"如何新增一门语言"步骤清单。

## 0.4.0 — 2026-05-02

### Brand: 全名 + 新 Logo + 红色主色调

- **品牌全名**：`SG AI 观察` → `新加坡 AI 观察`；`SG AI Observatory` → `Singapore AI Observatory`。不再用 SG 缩写，关键词"新加坡 / Singapore"前置利于搜索抓取。同步刷新所有页面 title、og 标签、blog 文章 author 字段、CHANGELOG / README / docs。
- **新 Logo**：换成红色环抱 `ai` 字标，替换原 🚀 emoji。新增 favicon（多尺寸 ico + svg + 32px PNG）、apple-touch-icon (180px)、PWA manifest icons (192/512px)。`favicon.svg` 用 `<image>` 包装 PNG 保兼容。
- **主色调**：`theme-color` 与 manifest `theme_color` 从紫色 `#8D46E7` 改为红色 `#dc2626`，匹配新 logo。
- **Header 视觉收紧**：右上角搜索按钮去掉外框（`border border-subtle hover:border-primary` 这套），改纯图标按钮，视觉显著变小，与"中/EN"切换按钮的视觉重量对齐。

### i18n 大整顿：清零所有 EN 页面的中文残留

#### 问题

随手抽查 `/en/debates/`、`/en/voices/`、`/en/videos/` 页面，发现大量中文残留：

- 调研下来 366 个 EN 页面有 1970 处 CJK 字符意外显示给英文读者
- 共享组件（Header / Footer / RelatedRail / AuthorBio / TableOfContents / NextPrevPost / blog ListItem & SinglePost）和 Metadata 都是 zh 硬编码
- 数据文件已经有 `*En` 兄弟字段，但页面没用 `pickLocalized()`
- `og:site_name` 在 EN 页面输出 "SG AI 观察"；`og:locale` 一律 `zh-CN`；title 模板硬编码中文站名

#### 解决方案

1. **i18n 规范文档**：[`docs/i18n.md`](docs/i18n.md) — 数据双字段约定、页面渲染规则、共享组件 lang 推断、SEO metadata、新增内容/页面/组件清单。CLAUDE.md 加章节链接到规范。
2. **自动验证**：`scripts/i18n-check.mjs` 扫 `dist/en/**/*.html` 寻找 CJK 残留。`npm run check:i18n` 调用。0 残留通过。
3. **共享 chrome 修复**：
   - `Footer.astro` 用 `t(lang, 'siteName')` 输出本地化品牌名
   - `Metadata.astro` 接受 `lang` prop，按 lang 输出 `og:site_name`、`og:locale`、title 模板和 description 兜底
   - `Layout.astro` 把 `currentLang` 传给 Metadata
4. **共享组件 lang-aware**：
   - `AuthorBio` / `TableOfContents` / `NextPrevPost` / `RelatedRail` / `blog/ListItem` / `blog/SinglePost` 全部从 URL 推断 lang，按 lang 取字段、生成链接、渲染文案
   - `getRelatedPosts` 限定同语言邻居，EN 文章不再显示 zh 相关阅读
   - `utils/utils.ts` 的 `getFormattedDate(date, lang)` 加 lang 参数，分别用 zh-CN 和 en-US locale
5. **EN 页面修复（17 个）**：debates index/[id]、videos、voices、people/[id]、benchmarking、legal-ai、tracker、fieldnotes、ecosystem、talent、community-opensource、opensource、startups、timeline、references。一律走 `pickLocalized` 或 `*En` 兜底；drop EN 页面下的 zh 副标题。
6. **数据文件补 EN 兄弟字段**：`SocialChannel` 接口新增 `labelEn?: string`，CJK label 全部配对（voices.ts / people.ts 6 处）
7. **新增共享 helper**：`channelLabel(ch, lang)` 在 `src/i18n/index.ts`

#### 产出

- 1970 → 0 处 CJK 残留（`npm run check:i18n` 通过）
- 366 → 0 个污染页面
- `docs/i18n.md` 长期规范文档
- 新增内容 / 页面 / 组件按规范执行，自动验证防回归

---

## 0.3.1 — 2026-05-02

### Fix: 多语言切换 + Header 重排

- **修复语言切换按钮无效**：Astro `<ClientRouter>` 视图转场会 swap DOM，把绑定到 `#lang-toggle` 的 click 监听器丢掉。改用 document-level 事件委托（`[data-lang-toggle]`，挂在 `document` 上），监听器跨 view transition 存活。同方案应用到 LangBanner 切换链接。
- **Header 顶部重叠修复**：1440px 视口下 "About" 和 Search 框相互覆盖。Header 改用 flex 布局（不再用 3-col grid），Search 按钮改为图标-only（去掉 "Search" 文字，kbd 提示从 xl 起显示），LanguageToggle 加 min-width 防抖。
- **导航大瘦身**：去掉主题切换 / RSS / GitHub 按钮 / "关于"菜单——这些下放到 Footer 的社交行。Header 现只保留 Logo + 4 组 Nav + Search + 语言切换。
- **浏览器自动语言检测**：首次访问 `/`，读 `navigator.languages[0]`，是 EN 偏好就跳 `/en/`，写 `sgai_lang` 到 localStorage。返回访客尊重已存选择。Bots 无 JS 仍看到 canonical 页。
- **Footer 增强**：新增 ToggleTheme + GitHub + RSS + 关于链接。
- **署名修正**：`由 wulujia 维护` / `Maintained by wulujia`，去掉链接。About 页 lead 也改为 wulujia。

## 0.3.0 — 2026-05-02

### Feature: 完整双语站（中文 + 英文）

中文站留在 `/`（保 SEO，不破坏既有外链），英文站镜像在 `/en/`。两套都是完整内容，不留半截。

#### 架构

- `astro.config.ts` 启用 i18n：`{ defaultLocale: 'zh', locales: ['zh', 'en'], prefixDefaultLocale: false, fallback: { en: 'zh' } }`
- 新建 `src/i18n/index.ts`：双语字典 + `pickLocalized()`（自动 fallback）+ `getLangFromPath()` / `localizedHref()` 工具
- `src/navigation.ts` 改为 `getHeaderData(lang)` / `getFooterData(lang)` 函数，nav 标签全部走字典
- `PageLayout` / `Layout` / `Header` / `Logo` / `SearchModal` / `ToBlogLink` / `Breadcrumb` 全部从 URL 检测 lang
- 新增 `LanguageToggle` 组件（header 切换芯片）+ `LangBanner`（顶部非阻塞条幅）

#### 数据 schema 双语化（EN sibling 字段）

- `Policy.{summaryEn, contentEn, sourceEn}` + `PolicyCategory.nameEn`
- `Debate.{summaryShortEn, keyPointsEn, governmentStanceEn, oppositionStanceEn, policySignalEn, notableQuoteEn}`
- `Lever.{nameEn, subtitleEn, whatStateDoesEn, bottleneckSolvedEn, insightEn}` + `LeverGroup.titleEn` + `LeverItem.{nameEn, scaleEn, descriptionEn}` + `transmissionExplainer.{titleEn, bodyEn}`
- `TimelineEvent.{titleEn, descriptionEn}`
- `Person.summaryEn`（核心 7 人 + 213 议员 stub 标 "Profile pending."）
- `Institution.roleEn` / `MddiSpeech.speakerTitleEn`（voices.ts）
- 博客 frontmatter `lang: 'zh' | 'en'`；EN 文件存放在 `src/data/post/en/<slug>.md` 子目录

#### 翻译（4 个并行 agents）

- 30/30 政策、150/150 国会辩论、112 抓手项 + 30 group + 6 lever + transmissionExplainer、11/11 时间线、4/4 博客全文、字典 ~70 chrome 字符串
- DEBATE_STATS 6 个 metadata exports（POLICY_EVOLUTION / RECURRING_CONTROVERSIES / MP_PROFILES / KEY_INSIGHTS / POLICY_SIGNALS / TENSION_MAP）

#### 镜像 EN 路由（23 个页面）

- `/en/index.astro`（editorial homepage，独立 voice）+ `/en/about/`（去除中文 framing）
- `/en/blog/[...page].astro` + `/en/rss.xml.ts`
- `/en/policies/` + `[id].astro`、`/en/debates/` + `[id].astro`、`/en/people/[id].astro`
- `/en/levers/`、`/en/timeline/`、`/en/voices/`、`/en/videos/`、`/en/tracker/`、`/en/benchmarking/`、`/en/talent/`、`/en/opensource/`、`/en/community-opensource/`、`/en/startups/`、`/en/ecosystem/`、`/en/legal-ai/`、`/en/references/`、`/en/fieldnotes/`、`/en/evolution/`、`/en/challenges/`

#### 关键陷阱

Astro glob loader 把 `.` 当 slug 分隔符（`foo.en.md` → id `fooen`），所以 EN 博客文件改用 `post/en/<slug>.md` 子目录方案。

#### 验证

`npm run check` 0 errors / 901 HTML / 4.77 MB compressed / 54 核心页面 200 / 760 内部链接全 200。

## 0.2.0 — 2026-05-01

### Feature: Pagefind 全文搜索 + 实体详情页

- **搜索**：Pagefind `/` 键唤起，懒加载 UI bundle，主题色 vermillion
- **`/policies/[id]` × 30** 政策详情：完整内容、作者解析、RelatedRail
- **`/debates/[id]` × 150** 辩论详情：keyPoints / 立场 / 政策信号 / 完整 speaker 列表 + Hansard 原文折叠

### Feature: 长文打磨

- `Footnotes.astro` + `Cite.astro`：frontmatter `citations` 驱动，空数组时零渲染
- 接入 `[...blog]/index.astro` SinglePost 之后

### Polish: 移动 + a11y

- `/debates` 筛选行 < md 折叠为 `<details>` drawer，桌面保持展开
- `:focus-visible` ring 改为 vermillion 主题色

### Fix: 链接审计

- 27 采样页 × 397 unique hrefs，修复 6 处断链（旧 `/blog/<slug>` 前缀 + 缺尾斜杠）

### Refactor: About 页清洗

- 去掉真名、公司列表、wlj.me、Person schema
- 仅保留 "Luca"，反馈渠道收窄到 GitHub Issues（v0.3.1 进一步改成 wulujia）

## 0.1.0 — 2026-05-01

### Feature: 视觉识别 + 导航重构 + Editorial 首页

- **字体**：Source Serif 4（拉丁）+ Noto Serif SC（chinese-simplified 子集 400/600/700），浏览器按字符 fallback，CJK fallback 不闪烁
- **主色**：Vermillion `#C8102E` + 暖纸 `#FAF7F2` + Ink 中性栈，dark mode 单独 token
- **导航**：17 项 / 4 dropdown → 5 组扁平化，"深度分析"提到顶级，全站 chrome 去 emoji
- **首页重写**：杀掉 11 张 feature card，改 editorial 模板（Hero + freshness strip + 最新分析 + 抓手图谱 + 最近辩论 + 引言收尾）
- **新建 `/about` 页**：定位、方法论、利益声明、CC BY 4.0 授权

## 0.0.30 — 2026-05-01

### Feature: 长文阅读体验（Phase 2）

- TOC（自动生成自 h2/h3，安全降级）
- AuthorBio（解析 people.ts，含频道）
- NextPrevPost（基于 publishDate 排序，前后篇导航）
- ReadingProgress（顶部 2px 进度条，IntersectionObserver 驱动）
- TOC 视觉 bug 修复：1500-1700px 视口下侧栏覆盖正文，改为内联 `<details>` 折叠

## 0.0.20 — 2026-04-30

### Feature: 知识图谱 schema（Phase 1）

- 新建 `src/data/people.ts`（核心 7 人 + JSON 导入 213 议员 stub）+ `src/utils/people.ts`（模糊匹配 / honorific stripping）
- 所有数据接口加外键：`debates → personIds / topicIds / relatedPolicyIds / relatedLeverNumbers / relatedTimelineYears / relatedPostSlugs`，policies / levers / timeline 同
- 博客 frontmatter 加 cross-ref schema
- `src/utils/graph.ts`：`getRelated(EntityRef)` 跨实体查询，反向索引
- `RelatedRail` 组件（compact + full 两种 variant，empty 时零渲染）
- `scripts/audit-speakers.ts` + `codemod-debates.ts` + `codemod-policies.ts` + `codemod-levers.ts` + `verify-graph.ts`
- `/people/[id]` 个人页（核心 7 人 + 213 stub）

### Feature: 性能 + a11y 基线（Phase 0）

- 删除 `/debates` 内联 ~302 KB JSON，改为 SSG 渲染卡片 + URL 参数筛选
- 字体：删除 Inter（无 CJK 字形），先加载 fontsource 包等待 Phase 3 接入
- 全站 `:focus-visible` ring + `.overflow-x-auto` 滚动阴影

## 部署 / 仓库变化

- 2026-05 仓库重命名 `aisg → sgai`（避免与 AI Singapore 缩写撞名）
- 从 meltflake-site 子站毕业为独立站点，部署到 Cloudflare Pages，绑定 `https://sgai.md`
- CI：`npm run check`（astro check + eslint + prettier + verify-graph）

---

## 0.0.17 — 2026-04-02

### Feature: AI 影响力图谱页面

- **新页面：AI 影响力图谱** (`/voices/`) — 新加坡 AI 领域关键人物与核心机构信息渠道
  - 7 位关键人物：杨莉明、黄循财、维文、尚达曼、陈杰豪、何德华、刘劲松
  - 6 个核心机构：MDDI、IMDA、AI Singapore、Smart Nation、AI Verify Foundation、PDPC
  - 每个人物/机构展示所有官方信息渠道（Twitter、LinkedIn、Facebook、官网等），标注主力渠道
  - 56 篇 MDDI AI 相关演讲稿全文链接（2017–2026），支持按年份和演讲者筛选
- 新数据文件：`src/data/voices.ts`
- 导航栏「AI 追踪」分组新增「AI 影响力图谱」入口

### Chore: MDDI 演讲稿采集脚本

- 新增 `scripts/voices/01_scan_mddi.py`，基于 MDDI sitemap.xml 的演讲稿采集脚本
  - 从 sitemap 获取全部新闻室 URL，用关键词过滤 AI 相关演讲稿
  - 自动提取标题、日期、演讲者信息
  - 支持按年份过滤和排除已有
- Bumped version to 0.0.17

## 0.0.16 — 2026-04-01

### Feature: AI 视频观点页面

- **新页面：AI 视频观点** (`/videos/`) — 收录新加坡政府官员、学者和行业领袖关于 AI 的 YouTube 演讲与访谈
  - 46 条视频，覆盖 2019–2026 年
  - 按 5 大主题分类：AI 战略与愿景、AI 治理与监管、AI 人才与教育、AI 产业与应用、国际合作与对标
  - 三维筛选：主题 / 年份 / 演讲者类型（政府官员 / 学者 / 行业领袖）
  - 统计行：视频总数、演讲者人数、覆盖年份
  - 卡片式展示：中文标题、演讲者、身份、日期、时长、摘要、来源频道
  - 点击跳转 YouTube 观看
- 新数据文件：`src/data/videos.ts`，含 `VideoItem` / `VideoCategory` 接口
- 导航栏「AI 追踪」分组新增「AI 视频观点」入口（头部 + 底部）
- 首页统计新增 AI 视频数量，features 新增视频观点板块

### Chore: YouTube 视频采集脚本

- 新增 `scripts/videos/` 目录，基于 YouTube RSS feed 的频道扫描脚本
  - `01_scan_channels.py` — 扫描 7 个 YouTube 频道，用关键词过滤 AI 相关视频，支持按天数和频道筛选
  - `02_review_and_merge.py` — 交互式审核候选视频，生成 TypeScript 代码片段
  - 监控频道：CNA、The Straits Times、govsg、Smart Nation、AI Singapore、WEF、Bloomberg
  - 无需 API key，依赖 `requests` + `feedparser`
- Bumped version to 0.0.16

## 0.0.11 — 2026-03-01

### Feature: 国会 AI 焦点页面全面升级

- **AI 驱动的中文摘要与观点提炼**
  - 用 LLM (GPT-4.1-mini) 对 132 条辩论批量生成中文摘要（100-150字）
  - 提炼每条辩论的政府立场 vs 质询立场
  - 标注争议度（1-5级）、政策信号、值得引用的原文
- **新增 6 大分析模块**
  - **核心洞察**：从 132 条辩论中提炼出 6 条高价值规律
  - **政策演变脉络**：将 2015-2026 年分为 4 个历史时期
  - **反复争议焦点**：7 大持续议题，含双方立场对比
  - **核心政策张力**：5 个维度的张力分析
  - **议员档案**：8 位关键议员，含中文名、党派、发言次数、关注领域和最值得关注的观点
  - **政策信号追踪**：8 条政策信号，标注首次出现年份和落实状态
- **页面交互升级**
  - 支持按争议度筛选
  - 双语展示：中文摘要 + 英文原文节选

### Chore: 新增数据采集脚本与文档

- 新增 `scripts/hansard/` 目录，包含完整的数据采集、处理、分析脚本链
- 新增 `scripts/hansard/README.md`，详细说明数据来源、流水线、API 协议和如何重新运行
- 将分析过程中产生的中间数据文件（如 report_id 列表、分析结果）存入 `scripts/hansard/data/`
- 更新项目根目录的 `README.md`
- Bumped version to 0.0.11

## 0.0.10 — 2026-02-22

### Feature: 实战经验 (Field Notes) 板块

- **新页面：实战经验** (`/fieldnotes/`) — 来自社区的结构化落地经验
  - 按主题聚合，匿名化处理，标注公司画像和适用条件
  - 卡片式呈现：标题、标签、公司画像、分段要点、highlight 标注、总结
  - 首条内容：AI 创业公司与 EDB 会议纪要（涵盖公司属性判定、EP 申请、团队多元化、税务合规、补贴政策、公司注册）
- 新数据文件：`src/data/fieldnotes.ts`，TypeScript 接口定义
- 导航栏新增"实战经验"入口（顶部导航 + 页脚）
- Bumped version to 0.0.10

## 0.0.9 — 2026-02-19

### Feature: 公共 AI 研究投资计划 + 多项数据更新

- 新增政策：公共 AI 研究投资计划 (2026-2030)，S$1B / US$779M，来源 MDDI 2026.1.24 公告
- 更新 NAIS 2.0：补充九大优先领域（交通物流、制造业、金融、安全、网络安全、智慧城市、医疗、教育、政府服务）
- 更新 Smart Nation 2.0：补充 S$120M AI 应用基金和五大国家 AI 项目（智能货运、市政服务、慢性病管理、个性化教育、边境清关）
- 时间线更新：2026 AI Research Week + AAAI；2025 Google DeepMind/MSRA 实验室；2024 NUS AI Institute + Smart Nation 2.0 落地
- Tracker 新增：公共 AI 研究投资额、人均 AI 投资对比（SG $139 vs US $33 vs CN $7）、AI 人才目标 15K by 2029、RUSSELL-GPT 医疗案例、五大国家 AI 项目
- 生态系统：Google DeepMind 东南亚首个实验室 (2025.11)、MSRA 东南亚首个实验室 (2025.7)、NUS AI Institute (2024.3)、NVIDIA 合作
- 核心政策数从 19 → 20
- Bumped version to 0.0.9

## 0.0.8 — 2026-02-17

### Feature: 国际对标 (International Benchmarking) page

- **New page: 国际对标** (`/benchmarking/`) — Compare Singapore's AI strategy with 9 global economies
  - Overview comparison table with 10 regions (Singapore highlighted)
  - 4 key insight cards (governance divergence, investment gap, talent, SG positioning)
  - 9 detailed region profiles with expandable cards:
    - Hong Kong, Taiwan, UAE, Israel, South Korea, Estonia, Switzerland, Finland, Canada
    - Each includes: strategies, investment table, governance, initiatives, strengths/weaknesses vs SG, key bodies, sources
  - Data disclaimer and update date footer
- New data file: `src/data/benchmarking.ts` with full TypeScript interfaces
- Added "国际对标" as top-level nav link between "AI 追踪" and "参考资源"
- Added to footer under "更多"
- Bumped version to 0.0.8

## 0.0.7 — 2026-02-17

### Update: Tracker 数据大更新

- 投资与资金：政府 AI 专项从 S$1B 更新为 S$2B+（含 NAIRD S$1B、企业计算 S$150M）；新增科技巨头基础设施 US$26B+、AI 创业融资 US$8.4B+、Budget 2026 税收激励
- 人才培养：新增 SkillsFuture 105K 人、TeSA 21K/340K、AIAP 详细数据、Google AI 技能计划、职场 AI 使用率、AI Springboard
- 研究产出：新增 NTU/NUS 排名、SEA-LION v4、100 Experiments、ICLR 2025、DBS AI 模型
- 产业采用：新增数字经济 GDP 占比、大企业/中小企业 AI 采用率、独角兽 32 家、东盟 AI 交易份额
- 基础设施：新增 NSCC ASPIRE 2A+、国家 AI 计算网格、商用 GPU 集群、NVIDIA 营收、数据中心市场、5G 覆盖
- 国际排名：新增 Tortoise 第 3、Oxford 第 2、WIPO 第 5 等排名数据
- Tracker 从 16 项扩展至 42 项指标，6 大分类
- Bumped version to 0.0.7

## 0.0.6 — 2026-02-17

### Feature: AI 创业生态 (AI Startup Ecosystem) page

- **New page: AI 创业生态** (`/startups/`) — Singapore AI startup ecosystem overview
  - Overview stats: 650+ startups, global rank #3, $8.4B+ VC raised, 9 unicorns
  - Unicorn table with valuations (Grab, Trax, Advance Intelligence, Biofourmis, etc.)
  - 5 vertical sections: 金融科技, 医疗健康, 企业 SaaS, AI 基础设施, 机器人与自动驾驶
  - Notable exits & acquisitions table (Manus/Meta $2B+, etc.)
  - Investor ecosystem cards (SGInnovate, Temasek, GIC, Antler, etc.)
- New data file: `src/data/startups.ts`
- Added "AI 创业生态" to AI 追踪 dropdown nav and footer
- Bumped version to 0.0.6

## 0.0.5 — 2026-02-17

### Feature: Split 开源与研究 into two pages

- Renamed existing page nav text from "开源与研究" to "官方开源与研究"
- Added intro text clarifying scope (AISG & government-funded projects)
- **New page: 产学研开源生态** (`/community-opensource/`) — community open source ecosystem
  - University projects: Colossal-AI, OpenMMLab, NExT-GPT, Show-o/ShowUI, VideoSys, TSLANet
  - Corporate lab projects: LAVIS/BLIP, CodeGen, BAGEL, VideoLLaMA3, Sailor LLM, OAT, Zero-Bubble
  - Startup projects: Jan
  - Summary info box and data disclaimer
- New data file: `src/data/community-opensource.ts`
- Updated header and footer navigation with both pages
- Bumped version to 0.0.5

## 0.0.4 — 2026-02-17

### Feature: 开源与研究 (Open Source & Research) page

- **New page: 开源与研究** (`/opensource/`) — AI Singapore open source projects, model ecosystem, and research papers
  - SEA-LION model ecosystem stats (56 models, version breakdown v1–v4)
  - SEA-Guard safety models section (4 models, early stage)
  - AI Verify governance framework with features and partners
  - Open source project cards (TagUI, SEA-LION, PeekingDuck, SGNLP, Speech Lab, Synergos)
  - Research papers listing (4 papers with arXiv links)
  - Honest context comparison with global models
- New data file: `src/data/opensource.ts`
- Added "开源与研究" to AI 追踪 dropdown nav and footer
- Bumped version to 0.0.4

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
