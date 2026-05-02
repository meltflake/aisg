# CLAUDE.md — sgai 项目指南

## 项目概述

新加坡 AI 观察 (https://github.com/meltflake/sgai) — 深度观察新加坡 AI 生态与战略的中文网站。
仓库于 2026-05 从 `aisg` 重命名为 `sgai`（避开 AI Singapore 缩写撞名）。同时从 meltflake-site 子站"毕业"，作为独立站点部署，线上地址 `https://sgai.md/`（DNS/Cloudflare 配置另行处理）。
基于 Astro 5.0 + Tailwind CSS 的静态站点，部署于 Netlify。

## 技术栈

- **框架**: Astro 5.0 (静态站点生成)
- **样式**: Tailwind CSS
- **语言**: TypeScript + Astro
- **内容**: Markdown 博客文章 (`src/data/post/*.md`)，TypeScript 数据文件 (`src/data/*.ts`)
- **部署**: Netlify (自动部署 main 分支)

## CI 管线

```bash
npm run check  # = check:astro && check:eslint && check:prettier && check:graph
```

四项检查全部通过才能合并。修复命令：

```bash
npm run fix           # 一键修复 eslint + prettier
npm run fix:eslint    # 仅修复 eslint
npm run fix:prettier  # 仅修复 prettier (prettier -w .)
```

**提交前必须运行 `npm run check` 确认通过。**

i18n 残留检查（构建产物层）：

```bash
npm run build && npm run check:i18n
# = node scripts/i18n-check.mjs，扫 dist/en/*.html 中的中文残留
```

凡是动了 EN 页面、共享组件、数据双字段的 PR，必须本地跑通 `check:i18n`。

## 编码规范与常见陷阱

### 1. Astro 文件中的注释语法

在 `.astro` 文件的 JSX 表达式（如 `.map()` 回调、三元表达式）内部，**禁止使用 HTML 注释**：

❌ 错误 — HTML 注释在 JSX 表达式内会导致解析错误：

    {items.map((item) => (
      <!-- 这是注释 -->
      <div>{item.name}</div>
    ))}

✅ 正确 — 使用 JSX 注释语法：

    {items.map((item) => (
      {/* 这是注释 */}
      <div>{item.name}</div>
    ))}

> Astro 模板顶层可以用 HTML 注释 `<!-- -->`，但 JSX 表达式内部必须用 `{/* */}`。
> Prettier 解析 Astro 文件时会因此报 SyntaxError。

### 2. 不规则空白字符

数据文件（尤其是从外部来源复制的内容，如国会辩论记录）可能包含不规则空白字符：

- `\u00A0` (NBSP)、`\u3000` (全角空格)、`\u2003` (Em Space)、`\u200B` (零宽空格) 等

ESLint `no-irregular-whitespace` 规则会报错。**粘贴外部文本后，注意检查并替换为普通空格。**

### 3. 类型标注

禁止使用 `as any`（ESLint `@typescript-eslint/no-explicit-any`）。使用具体类型：

```typescript
// ❌ (c as any).relatedTopics as string[]
// ✅ (c as { relatedTopics: string[] }).relatedTopics
```

### 4. Prettier 格式化

项目使用 Prettier 统一格式。如果修改了多个文件，提交前运行：

```bash
npx prettier --write src/
```

### 5. i18n 双字段约定（关键）

完整规范见 [`docs/i18n.md`](docs/i18n.md)。最常踩的几个点：

- 数据接口：用户可见的中文字段都要加 `*En` 兄弟字段（`title` / `titleEn`、`description` / `descriptionEn` ...）。
- EN 页面渲染：**永远不要**直接 `{record.title}`。用 `pickLocalized(record, 'title', 'titleEn', lang)` 或 `record.titleEn || record.title`。
- 内部链接：用 `localizedHref(path, lang)`，不要硬编码 `/en/` 前缀也不要直接给裸路径。
- 共享组件（zh + EN 都用的）：组件顶部 `getLangFromPath(new URL(Astro.url).pathname)` 推断 lang，所有展示文案、链接、字段都按 lang 走。
- SocialChannel：含 CJK 的 `label` 必须配对 `labelEn`。
- 提交前：`npm run build && node scripts/i18n-check.mjs` 必须通过。脚本会扫 `dist/en/**/*.html` 报告所有中文残留。

## 项目结构

```
src/
├── components/widgets/   # Astro 组件
├── content/config.ts     # 内容集合配置 (博客文章 schema)
├── data/
│   ├── post/             # Markdown 博客文章
│   ├── stats.ts          # 首页统计数据和功能板块
│   ├── debates.ts        # 国会辩论数据
│   ├── policies.ts       # 政策文件数据
│   ├── timeline.ts       # 时间线数据
│   └── ...               # 其他数据文件
├── navigation.ts         # 导航菜单配置
├── version.ts            # 版本号和更新日期
├── pages/                # 页面路由
└── layouts/              # 布局组件
```

## 发布流程

1. 修改内容 / 代码
2. 运行 `npm run check` 确认通过
3. 更新 `src/version.ts` 中的版本号和日期
4. 提交并推送到 main 分支，Netlify 自动部署

## 内容管理

### 添加博客文章

在 `src/data/post/` 下创建 `.md` 文件，frontmatter 格式：

```yaml
---
publishDate: 2026-03-20
title: '文章标题'
excerpt: '摘要文字'
category: '深度分析'
tags:
  - 标签1
  - 标签2
author: '新加坡 AI 观察'
---
```

### 更新导航

- 头部/底部导航：`src/navigation.ts`
- 首页功能板块：`src/data/stats.ts`

## 国会辩论数据更新（Hansard Pipeline）

### SPRS API 使用要点

**API 端点**：`POST https://sprs.parl.gov.sg/search/getHansardTopic/?id={report_id}`

**响应格式是字典，不是列表**：

```typescript
// ✅ 正确解析
const data = resp.json(); // { resultHTML: {...}, resultData: null }
const rh = data.resultHTML; // { title, sittingDate, content, reportType, ... }
const title = rh.title;
const date = rh.sittingDate; // 格式 "12-2-2026" (DD-M-YYYY)

// ❌ 错误 — 不要把响应当列表处理
// data[0].title  ← 会返回 undefined，误判为"empty"
```

**调用外部 API 前，先用一个已知有效的 ID 验证响应结构**，不要假设格式。

### Report ID 范围与规律

- `oral-answer-XXXX`：4000+ 区间（2026 年数据约 4023–4088）
- `written-answer-XXXXX`：21000+ 区间（注意是五位数！不要去扫 5000 区间）
- `budget-XXXX`：2800+ 区间
- `cos-{ministry}-{year}`：如 `cos-moh-2026`（HTTP 400 表示不存在）
- Hansard 发布有延迟，一般 sitting 后数周才上线；written answers 通常比 oral 更晚发布

### 更新流程

1. 从已知最高 ID 开始向上扫描（检查 `debates.ts` 中现有 `sourceUrl` 获取最高 ID）
2. 先用 1 个已知 ID 验证 API 响应结构
3. 批量扫描新 ID，提取 AI 相关条目（关键词：artificial intelligence, AI, deepfake, data centre, machine learning 等）
4. 对 AI 相关条目生成中英文摘要、分析数据，写入 `debates.ts`
5. 同步更新 `DEBATE_STATS`（total、byYear、byType、byTopic、topSpeakers）
6. 同步更新 debates 页面的"数据更新"日期、首页辩论数量、README 中的数字

### 现有脚本与工具

**Python Pipeline**（`scripts/hansard/`）— 完整的 5 步数据管线：

| 脚本                     | 功能                         | 依赖           | 备注                                  |
| ------------------------ | ---------------------------- | -------------- | ------------------------------------- |
| `01_discover_debates.py` | 通过 PAIR Search 发现报告 ID | Playwright     | 使用 `search.pair.gov.sg` 语义搜索    |
| `02_fetch_debates.py`    | 从 SPRS API 获取辩论全文     | requests       | 可直接用 API 替代（见上文 API 要点）  |
| `03_enrich_debates.py`   | AI 生成中文摘要              | OpenAI API key | **需 API key**，Claude 可直接完成此步 |
| `04_analyze_patterns.py` | AI 分析政策模式              | OpenAI API key | **需 API key**，Claude 可直接完成此步 |
| `05_generate_ts.py`      | 生成 `debates.ts`            | 无             | 从 JSON 生成 TypeScript 数据文件      |

**Python 虚拟环境**：`/tmp/hansard-venv`（如不存在需重建）

```bash
python3 -m venv /tmp/hansard-venv
source /tmp/hansard-venv/bin/activate
pip install requests playwright beautifulsoup4
```

**实际操作方式**：步骤 1-2 可通过直接调用 SPRS API 替代脚本，步骤 3-4 由 Claude 直接完成（无需 OpenAI API），步骤 5 可手动编辑 `debates.ts`。即：可以完全跳过 Python 脚本，直接用 API + Claude 完成全流程。

### 快速 API 扫描脚本模板

下面是经过验证的 Python 扫描脚本，可直接复用：

```python
import requests

def scan_ids(prefix, start, end):
    """扫描 SPRS 报告 ID 并返回有数据的条目"""
    results = []
    for i in range(start, end):
        rid = f'{prefix}-{i}'
        resp = requests.post(
            'https://sprs.parl.gov.sg/search/getHansardTopic/',
            params={'id': rid},
            headers={'Content-Type': 'application/json'},
            json={}, timeout=10)
        if resp.status_code == 200:
            rh = resp.json().get('resultHTML')
            if rh and rh.get('title'):
                results.append({
                    'id': rid,
                    'date': rh['sittingDate'],
                    'title': rh['title'],
                    'content': rh.get('content', ''),
                })
    return results

# 用法：scan_ids('oral-answer', 4088, 4120)
```

### 部署

独立部署在 Cloudflare Pages，绑定 `sgai.md`。push main 分支后 Cloudflare 自动构建（`npm run build` → `dist/`）。

CI gating 由 `.github/workflows/actions.yaml` 跑 build matrix + `npm run check`，与 Cloudflare 部署相互独立。
