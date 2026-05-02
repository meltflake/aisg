# 新加坡 AI 观察 — SEO 优化实施计划

> 文档创建：2026-03-22
> 站点地址：https://sgai.md/
> 技术栈：Astro 5.0 + Tailwind CSS，静态站点，部署于 Cloudflare Pages

---

## 一、现状评估

### 已有 SEO 基础（无需改动）

| 项目                     | 实现方式                                                | 文件                                   |
| ------------------------ | ------------------------------------------------------- | -------------------------------------- |
| Meta Title / Description | `@astrolib/seo` + config.yaml 模板系统                  | `src/components/common/Metadata.astro` |
| Open Graph 标签          | 含默认 OG 图 (1200x628)，支持逐页覆盖                   | `src/config.yaml` L15-21               |
| Twitter Card             | 自动根据 OG 图切换 summary / summary_large_image        | `Metadata.astro` L43                   |
| Canonical URL            | 自动生成，统一无尾斜杠                                  | `src/utils/permalinks.ts`              |
| XML Sitemap              | `@astrojs/sitemap` 构建时自动生成                       | `astro.config.ts` L33                  |
| Robots.txt               | 允许所有爬虫，构建时自动注入 sitemap 地址               | `public/robots.txt`                    |
| RSS Feed                 | 完整实现                                                | `src/pages/rss.xml.ts`                 |
| 图片优化                 | 强制 alt 文本、lazy loading、响应式尺寸、async decoding | `src/components/common/Image.astro`    |
| HTML/CSS/JS 压缩         | `astro-compress`                                        | `astro.config.ts` L58-69               |
| URL 结构                 | 干净、语义化、无参数、无尾斜杠                          | `src/config.yaml` L5                   |
| Favicon 全套             | ico + svg + apple-touch-icon                            | `src/components/Favicons.astro`        |
| 语言声明                 | `<html lang="zh-CN">`                                   | `src/layouts/Layout.astro` L29         |

### 缺口总览

| 缺口                         | 影响                           | 优先级 |
| ---------------------------- | ------------------------------ | ------ |
| 无 JSON-LD 结构化数据        | 无法获得 Google 富搜索结果     | P0     |
| 未注册 Google Search Console | 无法监控索引和搜索表现         | P0     |
| 各页面缺少独立 description   | 很多页面使用全局默认描述       | P1     |
| 无面包屑导航                 | 用户体验和搜索展示受限         | P1     |
| 未配置 Google Analytics      | 无法衡量流量和用户行为         | P1     |
| 博客文章仅 2 篇              | 内容覆盖面不足，长尾关键词缺失 | P2     |
| 无 hreflang / 多语言标记     | 中文内容可能被搜索引擎误判语言 | P2     |
| 无 PWA Manifest              | 移动端体验略受影响             | P3     |

---

## 二、实施计划

### Phase 0：基础配置（30 分钟）

> 零代码改动，配置即生效。

#### 0.1 注册并验证 Google Search Console

1. 访问 https://search.google.com/search-console
2. 添加资源 `https://sgai.md/`（URL 前缀类型）
3. 选择「HTML 标记」验证方式，获取验证 ID
4. 填入 `src/config.yaml`，在 `analytics` 部分添加：

```yaml
# src/config.yaml — 在现有内容后添加
# （注意：SiteVerification 组件已存在，只需填 ID）
```

**涉及文件**：`src/config.yaml`
**验证方式**：项目中 `src/components/common/SiteVerification.astro` 已支持此功能，需确认它读取的配置路径，可能需要检查 vendor 配置。

#### 0.2 配置 Google Analytics

1. 在 Google Analytics 创建 GA4 媒体资源
2. 获取衡量 ID（格式 `G-XXXXXXXXXX`）
3. 更新 `src/config.yaml`：

```yaml
analytics:
  vendors:
    googleAnalytics:
      id: 'G-XXXXXXXXXX' # 替换为实际 ID
```

**涉及文件**：`src/config.yaml` L62

---

### Phase 1：结构化数据 JSON-LD（1-2 小时）

> 最高 SEO 价值改动。让 Google 理解页面类型，获得富搜索结果展示。

#### 1.1 创建 JSON-LD 组件

创建 `src/components/common/JsonLd.astro`，封装 `<script type="application/ld+json">` 的输出逻辑。

#### 1.2 首页添加 Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "新加坡 AI 观察",
  "url": "https://sgai.md/",
  "logo": "https://sgai.md/favicon.svg",
  "description": "持续整理新加坡 AI 相关政策、治理框架与落地执行情况",
  "sameAs": ["https://github.com/meltflake/sgai"]
}
```

**涉及文件**：新建 `src/components/common/JsonLd.astro`，修改 `src/pages/index.astro`

#### 1.3 博客文章添加 Article Schema

每篇文章自动注入：

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "文章标题",
  "datePublished": "2026-03-20",
  "author": { "@type": "Organization", "name": "新加坡 AI 观察" },
  "publisher": { "@type": "Organization", "name": "新加坡 AI 观察" },
  "description": "摘要文字",
  "inLanguage": "zh-CN"
}
```

**涉及文件**：修改 `src/components/blog/SinglePost.astro` 或对应布局

#### 1.4 面包屑 BreadcrumbList Schema

与 Phase 2 的面包屑组件一起实现——面包屑的可视化 UI 和 JSON-LD 数据放在同一个组件中。

---

### Phase 2：面包屑导航（1 小时）

#### 2.1 创建 Breadcrumb 组件

创建 `src/components/common/Breadcrumb.astro`，同时包含：

- 可视化面包屑 HTML（带 `nav[aria-label="Breadcrumb"]`）
- `BreadcrumbList` JSON-LD schema

面包屑路径逻辑示例：

| 页面       | 面包屑                         |
| ---------- | ------------------------------ |
| 首页       | （不显示）                     |
| 政策文件   | 首页 > 政策观察 > 政策文件     |
| 发展时间线 | 首页 > 政策观察 > 发展时间线   |
| 关键指标   | 首页 > AI 追踪 > 关键指标      |
| 博客列表   | 首页 > 深度分析                |
| 博客文章   | 首页 > 深度分析 > {文章标题}   |
| 国会辩论   | 首页 > 政策观察 > 国会 AI 焦点 |

#### 2.2 集成到 PageLayout

在 `src/layouts/PageLayout.astro` 的 `<Header>` 之后、页面内容之前插入面包屑组件。

**涉及文件**：

- 新建 `src/components/common/Breadcrumb.astro`
- 修改 `src/layouts/PageLayout.astro`
- 各页面传入面包屑路径数据

---

### Phase 3：各页面独立 Meta Description（1 小时）

> 目前只有首页和部分页面设置了 description，其他页面使用全局默认值。

为每个页面添加针对性的 description，确保包含核心关键词。

| 页面                    | 建议 description                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `/policies`             | 新加坡 AI 政策文档汇编——NAIS 2.0、AI Verify、模型治理框架等核心政策全文索引与分类。   |
| `/timeline`             | 新加坡 AI 发展时间线：从 2019 年 NAIS 1.0 到 2024 年 NAIS 2.0，关键里程碑按时间排列。 |
| `/ecosystem`            | 新加坡 AI 生态地图——政府机构、研究院所、企业与初创公司的完整版图。                    |
| `/debates`              | 新加坡议会 AI 辩论记录，含中文摘要、议员立场分析与政策演变脉络。                      |
| `/tracker`              | 新加坡 AI 发展关键指标追踪——投资规模、人才数量、算力基建等核心数据。                  |
| `/talent`               | 新加坡 AI 人才培养体系——高校项目、政府培训计划、人才引进政策一览。                    |
| `/opensource`           | 新加坡政府与官方机构的 AI 开源项目和研究成果汇总。                                    |
| `/community-opensource` | 新加坡产学研 AI 开源生态——大学、企业、社区的开源贡献全景。                            |
| `/startups`             | 新加坡 AI 创业生态——融资、孵化器、加速器与代表性初创公司。                            |
| `/benchmarking`         | 新加坡 AI 战略国际对标——与美国、英国、中国、欧盟等主要经济体的对比分析。              |
| `/fieldnotes`           | 在新加坡从事 AI 工作的一线观察与实战经验分享。                                        |
| `/references`           | 新加坡 AI 参考资源——报告、论文、数据集、工具与推荐阅读。                              |
| `/blog`                 | 新加坡 AI 观察深度分析——新加坡 AI 生态的研究文章与评论。                                  |

**涉及文件**：各 `src/pages/*/index.astro` 的 `metadata` 对象

---

### Phase 4：内容策略与长尾关键词（持续）

> 当前仅 2 篇博客文章。内容数量是 SEO 最大的杠杆。

#### 4.1 优先撰写的文章主题

基于搜索需求和现有数据，建议的内容方向：

| 主题                       | 目标关键词               | 内容来源          |
| -------------------------- | ------------------------ | ----------------- |
| 新加坡 NAIS 2.0 解读       | 新加坡 AI 战略, NAIS 2.0 | 已有政策数据      |
| AI Verify 框架实操指南     | AI Verify, AI 测试框架   | 已有政策数据      |
| 新加坡 vs 中国 AI 政策对比 | 新加坡 AI 对比中国       | benchmarking 数据 |
| 新加坡国会议员如何看待 AI  | 新加坡议会 AI 辩论       | 已有辩论数据      |
| 新加坡 AI 创业融资盘点     | 新加坡 AI 创业, AI 投资  | startups 数据     |
| Data Centre 扩建争议       | 新加坡数据中心, 算力     | 辩论数据          |
| 新加坡 AI 人才市场分析     | 新加坡 AI 工作, AI 人才  | talent 数据       |

#### 4.2 内容 SEO 写作规范

每篇文章确保：

- 标题包含主要关键词，50-60 字符
- excerpt（摘要）包含关键词，150-160 字符
- 正文前 100 字出现核心关键词
- 使用 H2/H3 结构化内容，每个 heading 描述性强
- 文末添加相关内容的内部链接（利用已有的 relatedPosts 功能）
- 为文章配图设置有描述性的 alt 文本

---

### Phase 5：技术增强（可选，按需实施）

#### 5.1 hreflang 标注

虽然站点是纯中文，但由于部署在 `.com` 域名下，建议在 `<head>` 中添加：

```html
<link rel="alternate" hreflang="zh-CN" href="https://sgai.md/" />
<link rel="alternate" hreflang="x-default" href="https://sgai.md/" />
```

**涉及文件**：`src/components/common/CommonMeta.astro`

#### 5.2 PWA Manifest

创建 `public/manifest.json`：

```json
{
  "name": "新加坡 AI 观察",
  "short_name": "SG AI",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#8D46E7",
  "icons": [{ "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml" }]
}
```

并在 `<head>` 中引用。

**涉及文件**：新建 `public/manifest.json`，修改 `CommonMeta.astro`

#### 5.3 自定义 404 页面 SEO

当前 `src/pages/404.astro` 已存在，确认它：

- 返回正确的 404 状态码
- 包含返回首页的链接
- 有合理的 title / description

---

## 三、实施优先级总览

```
Phase 0  [30 min]   Search Console + Analytics 配置
  ↓
Phase 1  [1-2 hr]   JSON-LD 结构化数据
  ↓
Phase 2  [1 hr]     面包屑导航
  ↓
Phase 3  [1 hr]     各页面独立 Meta Description
  ↓
Phase 4  [持续]     内容策略与长尾关键词
  ↓
Phase 5  [可选]     hreflang / PWA / 404
```

## 四、效果衡量

实施后 2-4 周，通过以下方式验证效果：

| 指标            | 工具                                            | 目标                          |
| --------------- | ----------------------------------------------- | ----------------------------- |
| 索引页面数      | Google Search Console `site:sgai.md` | 全部页面被索引                |
| 富搜索结果      | Google Rich Results Test                        | Article / Breadcrumb 通过验证 |
| 搜索展现 / 点击 | Google Search Console 效果报告                  | 建立基线，逐月增长            |
| Core Web Vitals | PageSpeed Insights                              | LCP < 2.5s, CLS < 0.1         |
| 页面流量        | Google Analytics                                | 建立基线                      |

## 五、快速验证工具

实施每个 Phase 后，可用以下工具即时验证：

- **结构化数据**：https://search.google.com/test/rich-results （输入页面 URL）
- **Meta 标签**：浏览器查看源代码，或用 Chrome 扩展 SEO Meta in 1 Click
- **Sitemap**：访问 https://sgai.md/sitemap-index.xml
- **移动端**：Chrome DevTools 的 Lighthouse 审计
- **整体检查**：`npm run check` 确保代码规范无报错
