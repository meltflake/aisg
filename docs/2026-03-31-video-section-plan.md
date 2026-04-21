# AI 视频观点页面实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 新增 `/videos/` 页面，收录新加坡政府官员和本地 AI 行业专家的 YouTube 演讲/访谈视频，按主题分类展示，支持筛选。

**Architecture:** 数据层 `src/data/videos.ts` 导出类型接口 + 视频数据数组 + 分类常量。页面层 `src/pages/videos/index.astro` 消费数据，使用客户端 JS 实现筛选（与 debates 页面同一模式）。导航和首页同步更新。

**Tech Stack:** Astro 5.0, Tailwind CSS, TypeScript, 客户端原生 JS（筛选逻辑）

---

## 文件结构

| 操作 | 文件 | 职责 |
|------|------|------|
| 新建 | `src/data/videos.ts` | 视频数据接口、分类常量、视频数组 |
| 新建 | `src/pages/videos/index.astro` | 视频页面：统计、筛选、卡片列表 |
| 修改 | `src/navigation.ts` | 头部 + 底部导航新增视频入口 |
| 修改 | `src/data/stats.ts` | 首页统计数字 + features 板块 |
| 修改 | `src/version.ts` | 版本号 + 更新日期 |

---

### Task 1: 创建视频数据文件

**Files:**
- Create: `src/data/videos.ts`

- [ ] **Step 1: 创建 `src/data/videos.ts`，定义接口和分类常量**

```typescript
// src/data/videos.ts
// 新加坡 AI 视频观点数据

export interface VideoItem {
  id: string;
  title: string;
  speaker: string;
  speakerTitle: string;
  speakerType: 'government' | 'academic' | 'industry';
  date: string;
  duration: string;
  summary: string;
  topic: string;
  youtubeUrl: string;
  channel: string;
}

export interface VideoCategory {
  name: string;
  icon: string;
  description: string;
}

export const VIDEO_CATEGORIES: VideoCategory[] = [
  {
    name: 'AI 战略与愿景',
    icon: 'tabler:target',
    description: '国家 AI 战略规划、Smart Nation 愿景',
  },
  {
    name: 'AI 治理与监管',
    icon: 'tabler:scale',
    description: 'AI 伦理、法规、安全框架',
  },
  {
    name: 'AI 人才与教育',
    icon: 'tabler:school',
    description: 'AI 人才培养、教育计划',
  },
  {
    name: 'AI 产业与应用',
    icon: 'tabler:building',
    description: '行业应用、企业实践、创业',
  },
  {
    name: '国际合作与对标',
    icon: 'tabler:world',
    description: '跨国合作、国际会议、区域比较',
  },
];

export const SPEAKER_TYPE_LABELS: Record<string, string> = {
  government: '政府官员',
  academic: '学者',
  industry: '行业领袖',
};

export const videos: VideoItem[] = [
  // 初始数据将在 Task 2 中通过采集填入
];
```

- [ ] **Step 2: 运行类型检查确认无误**

Run: `npx astro check 2>&1 | head -20`
Expected: 无关于 `videos.ts` 的错误

- [ ] **Step 3: Commit**

```bash
git add src/data/videos.ts
git commit -m "feat: add video data structure with categories and types"
```

---

### Task 2: 采集初始视频数据

**Files:**
- Modify: `src/data/videos.ts`

- [ ] **Step 1: 通过 Web 搜索采集 YouTube 视频**

搜索关键词（逐一搜索）：
- `Singapore AI strategy minister speech youtube`
- `Josephine Teo AI speech youtube`
- `Smart Nation AI Singapore youtube`
- `IMDA AI Singapore youtube`
- `AI Singapore AISG youtube`
- `NUS AI research Singapore youtube`
- `Singapore AI governance framework youtube`
- `Ho Teck Hua AI youtube`
- `Balakrishnan AI Singapore youtube`
- `Singapore AI industry leaders youtube`

对每个搜索结果，记录：标题、演讲者、身份、日期、时长、YouTube URL、频道名。判断是否属于目标范围（政府官员 / 学者 / 行业领袖谈 AI），排除纯新闻播报。

- [ ] **Step 2: 将采集到的视频数据填入 `videos.ts` 的 `videos` 数组**

每条视频格式如下（示例）：

```typescript
{
  id: 'v001',
  title: '新加坡 AI 战略：小国的大野心',
  speaker: 'Josephine Teo',
  speakerTitle: '通讯及新闻部长',
  speakerType: 'government',
  date: '2024-06-15',
  duration: '25:30',
  summary: '尤芳达部长阐述新加坡如何以小国身份在全球 AI 竞争中找到独特定位。',
  topic: 'AI 战略与愿景',
  youtubeUrl: 'https://www.youtube.com/watch?v=XXXXXXXXX',
  channel: 'CNA',
},
```

要求：
- 每条视频的 `topic` 必须是 `VIDEO_CATEGORIES` 中定义的 5 个分类名称之一
- `speakerType` 必须是 `'government' | 'academic' | 'industry'` 之一
- `date` 格式 `YYYY-MM-DD`
- `id` 格式 `v001`, `v002`, ... 按日期倒序编号
- 确保所有字符串不含不规则空白字符（`\u00A0`, `\u3000` 等）

- [ ] **Step 3: 运行 lint 检查**

Run: `npm run check`
Expected: 全部通过

- [ ] **Step 4: Commit**

```bash
git add src/data/videos.ts
git commit -m "feat: add initial video data collection (YouTube)"
```

---

### Task 3: 创建视频页面

**Files:**
- Create: `src/pages/videos/index.astro`

- [ ] **Step 1: 创建 `src/pages/videos/index.astro`**

完整页面代码如下。页面结构：元信息 → 统计行 → 筛选栏 → 按主题分组的视频列表。筛选通过客户端 JS 实现。

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import { videos, VIDEO_CATEGORIES, SPEAKER_TYPE_LABELS } from '~/data/videos';

const meta = {
  title: 'AI 视频观点 — 新加坡政府官员与行业专家',
  description:
    '新加坡政府官员、学者和行业领袖关于 AI 战略、治理、人才和产业的 YouTube 演讲与访谈合集。',
};

// 构建统计数据
const totalVideos = videos.length;
const years = [...new Set(videos.map((v) => v.date.slice(0, 4)))].sort();
const yearRange = years.length > 0 ? `${years[0]}–${years[years.length - 1]}` : '';
const speakerCount = new Set(videos.map((v) => v.speaker)).size;

// 按主题分组，组内按日期倒序
const videosByTopic = VIDEO_CATEGORIES.map((cat) => ({
  ...cat,
  videos: videos.filter((v) => v.topic === cat.name).sort((a, b) => b.date.localeCompare(a.date)),
})).filter((group) => group.videos.length > 0);

// 提取所有年份用于筛选
const allYears = [...new Set(videos.map((v) => v.date.slice(0, 4)))].sort().reverse();

// 序列化视频数据供客户端 JS 使用
const videosJson = JSON.stringify(
  videos.map((v) => ({
    id: v.id,
    title: v.title,
    speaker: v.speaker,
    speakerTitle: v.speakerTitle,
    speakerType: v.speakerType,
    date: v.date,
    duration: v.duration,
    summary: v.summary,
    topic: v.topic,
    youtubeUrl: v.youtubeUrl,
    channel: v.channel,
  }))
);
---

<Layout metadata={meta} breadcrumbs={[{ label: 'AI 追踪' }, { label: 'AI 视频观点' }]}>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <!-- Header -->
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">AI 视频观点</h1>
      <p class="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
        新加坡政府官员、学者和行业领袖关于人工智能的 YouTube 演讲与访谈。点击视频卡片跳转 YouTube 观看。
      </p>
    </div>

    <!-- Stats Row -->
    <div class="grid grid-cols-3 gap-4 mb-10">
      <div
        class="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-slate-700 text-center"
      >
        <div class="text-3xl font-bold text-blue-600">{totalVideos}</div>
        <div class="text-sm text-gray-500 mt-1">视频总数</div>
      </div>
      <div
        class="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-slate-700 text-center"
      >
        <div class="text-3xl font-bold text-purple-600">{speakerCount}</div>
        <div class="text-sm text-gray-500 mt-1">演讲者</div>
      </div>
      <div
        class="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-slate-700 text-center"
      >
        <div class="text-3xl font-bold text-green-600">{yearRange}</div>
        <div class="text-sm text-gray-500 mt-1">覆盖年份</div>
      </div>
    </div>

    <!-- Filter Bar -->
    <div
      class="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-slate-700 mb-8"
    >
      <div class="mb-3">
        <div class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
          主题
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            data-filter="topic"
            data-value=""
            class="filter-btn filter-btn-active px-3 py-1.5 rounded-full text-sm border transition-all cursor-pointer"
          >
            全部
          </button>
          {
            VIDEO_CATEGORIES.map((cat) => {
              const count = videos.filter((v) => v.topic === cat.name).length;
              return (
                <button
                  data-filter="topic"
                  data-value={cat.name}
                  class="filter-btn px-3 py-1.5 rounded-full text-sm border transition-all cursor-pointer"
                >
                  {cat.name}
                  <span class="text-xs opacity-60 ml-1">({count})</span>
                </button>
              );
            })
          }
        </div>
      </div>

      <div class="mb-3">
        <div class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
          年份
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            data-filter="year"
            data-value=""
            class="filter-btn filter-btn-active px-3 py-1.5 rounded-full text-sm border transition-all cursor-pointer"
          >
            全部
          </button>
          {
            allYears.map((year) => {
              const count = videos.filter((v) => v.date.startsWith(year)).length;
              return (
                <button
                  data-filter="year"
                  data-value={year}
                  class="filter-btn px-3 py-1.5 rounded-full text-sm border transition-all cursor-pointer"
                >
                  {year}
                  <span class="text-xs opacity-60 ml-1">({count})</span>
                </button>
              );
            })
          }
        </div>
      </div>

      <div class="mb-2">
        <div class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
          演讲者类型
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            data-filter="speakerType"
            data-value=""
            class="filter-btn filter-btn-active px-3 py-1.5 rounded-full text-sm border transition-all cursor-pointer"
          >
            全部
          </button>
          {
            Object.entries(SPEAKER_TYPE_LABELS).map(([key, label]) => {
              const count = videos.filter((v) => v.speakerType === key).length;
              return (
                <button
                  data-filter="speakerType"
                  data-value={key}
                  class="filter-btn px-3 py-1.5 rounded-full text-sm border transition-all cursor-pointer"
                >
                  {label}
                  <span class="text-xs opacity-60 ml-1">({count})</span>
                </button>
              );
            })
          }
        </div>
      </div>

      <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-slate-700">
        <div id="result-count" class="text-sm text-gray-500"></div>
        <button
          id="clear-filters-btn"
          class="hidden text-sm text-red-500 hover:text-red-700 border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-lg transition-all"
        >
          清除筛选
        </button>
      </div>
    </div>

    <!-- Video List (grouped by topic) -->
    <div id="video-list">
      {
        videosByTopic.map((group) => (
          <section class="mb-10" data-topic-section={group.name}>
            <div class="flex items-center gap-3 mb-4">
              <h2 class="text-xl font-bold text-gray-800 dark:text-white">{group.name}</h2>
              <span class="text-sm text-gray-400">({group.videos.length})</span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{group.description}</p>
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.videos.map((video) => (
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener"
                  data-video-id={video.id}
                  data-topic={video.topic}
                  data-year={video.date.slice(0, 4)}
                  data-speaker-type={video.speakerType}
                  class="video-card block bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-slate-700 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <div class="flex items-start justify-between mb-2">
                    <h3 class="font-semibold text-gray-800 dark:text-white text-sm leading-snug group-hover:text-blue-600 transition-colors flex-1">
                      {video.title}
                    </h3>
                    <svg
                      class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors shrink-0 ml-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span class="font-medium text-gray-700 dark:text-gray-300">{video.speaker}</span>
                    <span class="mx-1">·</span>
                    {video.speakerTitle}
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {video.summary}
                  </p>
                  <div class="flex items-center justify-between text-xs text-gray-400">
                    <div class="flex items-center gap-2">
                      <span>{video.date}</span>
                      <span class="mx-1">·</span>
                      <span>{video.duration}</span>
                    </div>
                    <span>{video.channel}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))
      }
    </div>

    <!-- Empty state -->
    <div id="empty-state" class="hidden text-center py-16">
      <p class="text-gray-400 text-lg">没有符合筛选条件的视频</p>
      <button
        onclick="clearAllFilters()"
        class="mt-3 text-blue-600 hover:text-blue-800 text-sm underline"
      >
        清除所有筛选
      </button>
    </div>
  </div>
</Layout>

<style>
  .filter-btn {
    background: transparent;
    border-color: theme('colors.gray.200');
    color: theme('colors.gray.600');
  }
  :global(.dark) .filter-btn {
    border-color: theme('colors.slate.600');
    color: theme('colors.gray.400');
  }
  .filter-btn:hover {
    border-color: theme('colors.blue.400');
    color: theme('colors.blue.600');
  }
  .filter-btn-active {
    background: theme('colors.blue.50');
    border-color: theme('colors.blue.400');
    color: theme('colors.blue.700');
    font-weight: 600;
  }
  :global(.dark) .filter-btn-active {
    background: theme('colors.blue.900/30');
    border-color: theme('colors.blue.500');
    color: theme('colors.blue.300');
  }
</style>

<script>
  const filters: Record<string, string> = { topic: '', year: '', speakerType: '' };

  function init() {
    // Bind filter buttons
    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dim = (btn as HTMLElement).dataset.filter!;
        const val = (btn as HTMLElement).dataset.value!;
        filters[dim] = val;
        updateFilterButtons();
        applyFilters();
      });
    });
  }

  function updateFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach((btn) => {
      const dim = (btn as HTMLElement).dataset.filter!;
      const val = (btn as HTMLElement).dataset.value!;
      btn.classList.toggle('filter-btn-active', filters[dim] === val);
    });
  }

  function applyFilters() {
    const hasFilter = Object.values(filters).some((v) => v !== '');
    let visibleCount = 0;

    // Filter individual cards
    document.querySelectorAll('.video-card').forEach((card) => {
      const el = card as HTMLElement;
      const matchTopic = !filters.topic || el.dataset.topic === filters.topic;
      const matchYear = !filters.year || el.dataset.year === filters.year;
      const matchType = !filters.speakerType || el.dataset.speakerType === filters.speakerType;
      const visible = matchTopic && matchYear && matchType;
      el.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });

    // Hide empty topic sections
    document.querySelectorAll('[data-topic-section]').forEach((section) => {
      const visibleCards = section.querySelectorAll('.video-card:not([style*="display: none"])');
      (section as HTMLElement).style.display = visibleCards.length > 0 ? '' : 'none';
    });

    // Update count and clear button
    const countEl = document.getElementById('result-count');
    const clearBtn = document.getElementById('clear-filters-btn');
    const emptyState = document.getElementById('empty-state');
    const videoList = document.getElementById('video-list');

    if (countEl) {
      countEl.textContent = hasFilter ? `显示 ${visibleCount} 条结果` : '';
    }
    if (clearBtn) {
      clearBtn.classList.toggle('hidden', !hasFilter);
      clearBtn.onclick = () => clearAllFilters();
    }
    if (emptyState && videoList) {
      emptyState.classList.toggle('hidden', visibleCount > 0);
      videoList.classList.toggle('hidden', visibleCount === 0);
    }
  }

  (window as unknown as Record<string, unknown>).clearAllFilters = clearAllFilters;

  function clearAllFilters() {
    Object.keys(filters).forEach((k) => (filters[k] = ''));
    updateFilterButtons();
    applyFilters();
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('astro:page-load', init);
</script>
```

- [ ] **Step 2: 运行构建检查**

Run: `npm run check`
Expected: 全部通过

- [ ] **Step 3: 本地预览确认页面渲染**

Run: `npm run dev`
打开 `http://localhost:4321/videos/`，确认：
- 统计行显示正确数字
- 筛选按钮可点击，切换高亮状态
- 视频卡片按主题分组展示
- 点击卡片能跳转 YouTube
- 暗色模式正常

- [ ] **Step 4: Commit**

```bash
git add src/pages/videos/index.astro
git commit -m "feat: add videos page with topic grouping and filters"
```

---

### Task 4: 更新导航

**Files:**
- Modify: `src/navigation.ts:17-23` (header AI 追踪 links)
- Modify: `src/navigation.ts:50-56` (footer AI 追踪 links)

- [ ] **Step 1: 在头部导航「AI 追踪」分组末尾添加视频入口**

在 `src/navigation.ts` 第 22 行 `{ text: 'AI 创业生态', href: getPermalink('/startups') },` 之后添加：

```typescript
        { text: 'AI 视频观点', href: getPermalink('/videos') },
```

- [ ] **Step 2: 在底部导航「AI 追踪」分组末尾添加视频入口**

在 `src/navigation.ts` 第 56 行 `{ text: 'AI 创业生态', href: getPermalink('/startups') },` 之后添加：

```typescript
        { text: 'AI 视频观点', href: getPermalink('/videos') },
```

- [ ] **Step 3: 运行检查**

Run: `npm run check`
Expected: 全部通过

- [ ] **Step 4: Commit**

```bash
git add src/navigation.ts
git commit -m "feat: add video section to header and footer navigation"
```

---

### Task 5: 更新首页统计和 features

**Files:**
- Modify: `src/data/stats.ts`

- [ ] **Step 1: 在 `stats` 数组中添加视频统计**

在 `src/data/stats.ts` 第 4 行 `{ title: '对标地区', amount: '10' },` 之后添加：

```typescript
  { title: 'AI 视频', amount: '<实际采集数量>' },
```

（将 `<实际采集数量>` 替换为 Task 2 中实际采集到的视频条数）

- [ ] **Step 2: 在 `features` 数组末尾添加视频板块**

在 `features` 数组最后一项（深度分析）之后添加：

```typescript
  {
    title: 'AI 视频观点',
    description: '新加坡政府官员、学者和行业领袖关于 AI 的 YouTube 演讲与访谈，按主题分类，支持筛选。',
    icon: 'tabler:player-play',
  },
```

- [ ] **Step 3: 同时更新专题页面数量**

将 `stats` 数组中 `{ title: '专题页面', amount: '15' }` 的 amount 改为 `'16'`。

- [ ] **Step 4: 运行检查**

Run: `npm run check`
Expected: 全部通过

- [ ] **Step 5: Commit**

```bash
git add src/data/stats.ts
git commit -m "feat: add video stats and feature block to homepage"
```

---

### Task 6: 更新版本号

**Files:**
- Modify: `src/version.ts`

- [ ] **Step 1: 更新版本号和日期**

将 `src/version.ts` 改为：

```typescript
export const SITE_VERSION = '0.0.16';
export const SITE_UPDATED = '2026-03-31';
```

- [ ] **Step 2: Commit**

```bash
git add src/version.ts
git commit -m "chore: bump version to 0.0.16"
```

---

### Task 7: 最终验证

- [ ] **Step 1: 运行完整检查**

Run: `npm run check`
Expected: `check:astro`, `check:eslint`, `check:prettier` 全部通过

- [ ] **Step 2: 本地预览全站检查**

Run: `npm run dev`

检查清单：
- `/videos/` 页面正常渲染，统计数字正确
- 筛选按钮正常工作（主题 / 年份 / 演讲者类型）
- 多维筛选组合正常
- 「清除筛选」按钮正常
- 空结果状态正常显示
- 卡片点击跳转 YouTube（新窗口）
- 暗色模式下所有元素可见
- 首页统计数字和 features 板块更新
- 头部/底部导航包含「AI 视频观点」链接
- 导航链接能正确跳转到 `/videos/`

- [ ] **Step 3: 运行 Prettier 格式化**

Run: `npx prettier --write src/`
Then: `npm run check`
Expected: 全部通过

- [ ] **Step 4: 最终 Commit（如有格式化变更）**

```bash
git add -A
git commit -m "style: format all files"
```
