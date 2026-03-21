# SG AI 观察

深度观察新加坡 AI 生态与战略。不只是信息整理，更是独立视角的深度分析。

**在线访问：[meltflake.com/aisg](https://meltflake.com/aisg/)**

## 项目简介

SG AI 观察追踪新加坡 AI 战略的政策文件、执行数据、国会辩论、创业生态和国际对标，并基于这些一手资料提出独立分析。

核心内容：

- **AI 政策库** — 20 份核心政策文档，中英标题、来源机构、摘要与原文链接
- **发展时间线** — 从 2014 年智慧国家倡议到 2026 年 NAIRD 的完整里程碑
- **落地执行追踪** — 42 项关键指标：投资、人才、研究、采用率、基础设施
- **国会 AI 焦点** — 139 场议会辩论的中文摘要、议员立场分析与政策信号提炼
- **开源与研究** — 官方开源项目与产学研生态追踪
- **创业生态** — 650+ AI 创业公司、9 家独角兽、五大垂直领域全景
- **国际对标** — 10 个经济体 AI 政策横向对比
- **深度分析** — 我们的核心观点与分析框架

## 技术栈

- [Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)
- TypeScript 数据文件 + Markdown 博客文章
- 部署：Cloudflare Pages（经由 [meltflake-site](https://github.com/meltflake/meltflake-site) 构建）

## 本地开发

```bash
npm install
npm run dev       # 启动开发服务器 localhost:4321
npm run build     # 构建生产版本到 ./dist/
npm run check     # 运行 astro check + eslint + prettier 检查
npm run fix       # 自动修复 eslint 和 prettier 问题
```

## 项目结构

```
src/
├── data/
│   ├── post/           # Markdown 博客文章
│   ├── debates.ts      # 139 条国会辩论数据
│   ├── policies.ts     # 政策文件数据
│   ├── timeline.ts     # 时间线数据
│   ├── startups.ts     # AI 创业公司数据
│   └── ...             # 其他数据模块
├── pages/              # 页面路由
├── components/widgets/ # UI 组件
├── navigation.ts       # 导航配置
└── version.ts          # 版本号
scripts/
└── hansard/            # 国会辩论数据采集与分析流程
```

## 许可证

基于 [AstroWind](https://github.com/onwidget/astrowind) 模板构建，MIT 许可证。

---

# SG AI Observatory

In-depth analysis of Singapore's AI ecosystem and strategy. More than information aggregation — independent analytical perspectives.

**Live site: [meltflake.com/aisg](https://meltflake.com/aisg/)**

## About

SG AI Observatory tracks Singapore's AI strategy through policy documents, execution data, parliamentary debates, startup ecosystem, and international benchmarking, offering independent analysis based on primary sources.

Key sections:

- **AI Policy Library** — 20 core policy documents with bilingual titles, source agencies, summaries, and original links
- **Development Timeline** — Full milestones from Smart Nation Initiative (2014) to NAIRD (2026)
- **Execution Tracker** — 42 key metrics: investment, talent, research, adoption rates, infrastructure
- **Parliamentary AI Focus** — Chinese summaries of 139 parliamentary debates with MP stance analysis and policy signal extraction
- **Open Source & Research** — Government open-source projects and industry-academia ecosystem
- **Startup Ecosystem** — 650+ AI startups, 9 unicorns, five vertical sectors
- **International Benchmarking** — Cross-comparison of AI policies across 10 economies
- **Deep Analysis** — Our core perspectives and analytical framework

## Tech Stack

- [Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)
- TypeScript data files + Markdown blog posts
- Deployment: Cloudflare Pages (via [meltflake-site](https://github.com/meltflake/meltflake-site) build pipeline)

## Local Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run check     # Run astro check + eslint + prettier
npm run fix       # Auto-fix eslint and prettier issues
```

## License

Built on the [AstroWind](https://github.com/onwidget/astrowind) template. MIT License.
