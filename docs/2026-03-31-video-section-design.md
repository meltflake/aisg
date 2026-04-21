# AI 视频观点页面设计

## 概述

新增 `/videos/` 页面，收录新加坡政府官员和本地 AI 行业专家在 YouTube 上关于 AI 的演讲、访谈、发言视频。按主题分类展示，支持筛选，点击跳转 YouTube 观看。

## 数据结构

文件：`src/data/videos.ts`

```typescript
interface VideoItem {
  id: string;                  // 唯一标识，如 'v001'
  title: string;               // 中文标题
  speaker: string;             // 演讲者姓名
  speakerTitle: string;        // 身份，如 '通讯及新闻部长'
  speakerType: 'government' | 'academic' | 'industry';
  date: string;                // ISO 日期 'YYYY-MM-DD'
  duration: string;            // 时长，如 '15:30'
  summary: string;             // 一句话中文摘要
  topic: string;               // 所属主题分类名称
  youtubeUrl: string;          // YouTube 链接
  channel: string;             // 来源频道名
}

interface VideoCategory {
  name: string;                // 分类名称
  icon: string;                // tabler icon 名称
  description: string;         // 分类说明
}
```

### 主题分类

| 分类名称 | icon | 说明 |
|---------|------|------|
| AI 战略与愿景 | `tabler:target` | 国家 AI 战略规划、Smart Nation 愿景 |
| AI 治理与监管 | `tabler:scale` | AI 伦理、法规、安全框架 |
| AI 人才与教育 | `tabler:school` | AI 人才培养、教育计划 |
| AI 产业与应用 | `tabler:building` | 行业应用、企业实践、创业 |
| 国际合作与对标 | `tabler:world` | 跨国合作、国际会议、区域比较 |

### 演讲者类型

| 类型 | 值 | 说明 |
|------|---|------|
| 政府官员 | `government` | 部长、议员、公务员 |
| 学者 | `academic` | 大学教授、研究机构人员 |
| 行业领袖 | `industry` | 企业 CEO、技术负责人 |

## 页面设计

文件：`src/pages/videos/index.astro`

### 页面顶部统计

与 debates 页面风格一致，展示：
- 视频总数
- 覆盖年份范围
- 演讲者人数

### 筛选栏

三排筛选按钮（参考 debates 页面已有模式）：
1. **主题筛选**：5 个主题分类按钮
2. **年份筛选**：从数据中自动提取年份，生成按钮
3. **演讲者类型**：政府官员 / 学者 / 行业领袖

交互行为：
- 点击切换选中状态，支持多选
- 每排有「全部」按钮重置该维度筛选
- 筛选结果实时更新，显示匹配数量

### 内容展示

- 按主题分组，每组显示分类标题 + 描述 + 视频数量
- 组内按日期倒序排列
- 响应式 grid 布局：手机 1 列，平板 2 列，桌面 3 列
- 暗色模式支持

### 视频卡片

每张卡片展示：
- 标题（加粗，可点击）
- 演讲者姓名 + 身份
- 日期 + 时长
- 一句话摘要
- 来源频道名
- 外链图标，暗示跳转行为

点击卡片或标题 → `target="_blank"` 跳转 YouTube。

## 导航集成

### 头部导航

在「AI 追踪」分组下新增：
- 文字：`AI 视频观点`
- 路径：`/videos/`
- 位置：「AI 创业生态」之后

### 底部导航

同步更新，保持和头部一致。

### 首页

`src/data/stats.ts` 更新：
- `stats` 数组新增：`{ title: 'AI 视频', amount: '<实际数量>' }`
- `features` 数组新增视频观点板块，含简介和 `tabler:player-play` icon

## 初始数据采集

### 采集方式

通过 Web 搜索 YouTube，手动判断相关性，直接写入 `videos.ts`。

### 搜索关键词

- `Singapore AI strategy`
- `Smart Nation AI`
- `MDDI AI` / `MCI AI Singapore`
- `IMDA AI`
- `AI Singapore`
- `Singapore AI governance`
- `NUS AI` / `NTU AI` / `SUTD AI`
- 具体人名：Josephine Teo AI, Balakrishnan AI, Ho Teck Hua AI 等

### 筛选标准

- 演讲者是新加坡政府官员、本地学者或行业领袖
- 内容与 AI 政策、战略、治理、应用相关
- 仅 YouTube 链接
- 排除纯新闻播报（保留有实质观点的采访/演讲）

## 未来更新脚本

目录：`scripts/videos/`

Python 脚本，调用 YouTube Data API v3：
- 按关键词搜索新视频
- 输出 JSON 供审核
- 审核后合并到 `videos.ts`
- 结构与现有 `scripts/hansard/` 管线类似

脚本为后续迭代，不在本次实现范围内。

## 涉及文件变更

| 操作 | 文件 |
|------|------|
| 新建 | `src/data/videos.ts` |
| 新建 | `src/pages/videos/index.astro` |
| 修改 | `src/navigation.ts`（头部 + 底部导航） |
| 修改 | `src/data/stats.ts`（首页统计 + features） |
| 修改 | `src/version.ts`（版本号 + 日期） |

## 不在本次范围内

- YouTube 缩略图展示
- 视频内嵌播放
- 自动化采集脚本（后续迭代）
- 搜索功能（筛选已足够）
