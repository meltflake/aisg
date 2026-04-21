# 新加坡 AI 生态图谱 — 数据采集计划

目标：建立 500-1000 人规模的新加坡 AI 从业者目录，支撑 aisg 站点的"生态图谱"页面。

当前状态：已有初步手工调研 50+ 人（见 `docs/20260401-sg-ai-ecosystem-directory.md`），太单薄，需要系统化采集。

---

## 第一优先级：API 可达，可编程批量采集

### 1. GitHub

- 方法：GitHub API 搜索 `location:Singapore` + AI/ML 相关 repo（关键词：machine-learning, deep-learning, nlp, computer-vision, llm, transformer, pytorch, tensorflow）
- 提取：用户名、真名、bio、公司、个人网站、follower 数、主要 repo
- 预估：200-500 人
- 脚本思路：先搜高星 repo 的贡献者，再搜 location 过滤，按 follower 或 repo star 排序
- 特别关注：SEA-LION、AI Verify、Colossal-AI、Jan 等新加坡项目的贡献者

### 2. 学术论文（Semantic Scholar / arXiv）

- 方法：Semantic Scholar API 按 affiliation 搜索（NUS、NTU、SUTD、SMU、A*STAR CFAR、A*STAR I2R、SAIL）
- 领域过滤：cs.AI, cs.CL, cs.CV, cs.LG, cs.RO
- 提取：作者名、机构、h-index、近 3 年论文数、代表作、Google Scholar 链接
- 预估：300-800 人
- 额外：检查 ICLR/NeurIPS/ICML/CVPR/ACL 近两年的新加坡 affiliation 论文

### 3. VC Portfolio 页面

- 目标站点：
  - SGInnovate portfolio（sginnovate.com/portfolio）— 167 笔投资
  - Antler portfolio（antler.co/portfolio）— 筛选 SG + AI
  - Vertex Ventures（vertexventures.com）
  - Monk's Hill Ventures（monkshill.com/portfolio）
  - Wavemaker Partners
  - Iterative.vc（YC for SEA）
- 提取：公司名、创始人、一句话描述、融资阶段、网站
- 预估：150-300 家公司/创始人
- 方法：爬页面或手动整理（大部分 portfolio 页是静态列表）

### 4. HuggingFace

- 方法：搜索 organization 为新加坡机构的模型/数据集作者
- 关注：aisingapore、sea-lion、sail、nuscomputing 等 org
- 提取：用户名、机构、模型/数据集列表
- 预估：50-100 人

---

## 第二优先级：半结构化，信息密度高

### 5. Meetup / 活动演讲者

- 目标活动：
  - SuperAI Conference（superai.com）— 2024/2025/2026 speaker list
  - AI Tinkerers Singapore（singapore.aitinkerers.org）
  - Global AI Singapore（meetup.com/global-ai-singapore-community）
  - Singapore AI Meetup（meetup.com/singapore-artificial-intelligence）
  - PyCon SG、DataCouncil、MLOps Community SG
- 提取：演讲者名、头衔、公司、演讲主题
- 预估：100-200 人
- 方法：爬历史活动页面的 speaker list

### 6. AISG 官方生态数据

- AIAP 校友（aisingapore.org）— 22 批次 500+ 毕业生
- 100E 合作企业列表
- AI Verify 合作伙伴
- 提取：人名（如有）、公司、项目
- 预估：500+ 人（但可能只有公司名没有个人名）

### 7. 新闻报道提取

- 目标媒体：CNA、Straits Times、TechInAsia、GovInsider、e27
- 方法：搜 "Singapore AI" 相关报道，提取被采访/引用的人名和头衔
- 预估：50-100 人（高质量 KOL）
- 工具：可用 Claude 批量处理文章提取结构化数据

---

## 第三优先级：补充

### 8. 已有 debates 数据再挖掘

- 从 `src/data/debates.ts` 提取所有 speaker，按 AI 相关发言频次排序
- 高频发言者 = 真正关注 AI 的政策制定者
- 这部分数据已有，只需跑一个统计脚本

### 9. LinkedIn 搜索（手动辅助）

- 搜索组合：`"AI" OR "machine learning" site:linkedin.com/in Singapore`
- 用于补充其他渠道找不到的中层从业者
- 无法自动化，手动为主

### 10. Kaggle / 竞赛平台

- Kaggle 搜 location:Singapore 的 Competition Master / Grandmaster
- 预估：20-50 人

---

## 数据字段标准

每个人的记录应包含：

```
name: 全名
name_cn: 中文名（如有）
role: 当前职务
org: 所属机构
category: government | startup | research | investor | community | practitioner
source: 数据来源（github/paper/vc/meetup/news/...）
github: GitHub 用户名
twitter: X handle
linkedin: LinkedIn URL
website: 个人网站
verified: true/false（信息是否经过验证）
updated: 日期
```

## 技术实现

- 采集脚本放 `scripts/ecosystem/`
- 原始数据存 `scripts/ecosystem/data/`（JSON）
- 清洗合并后生成 `src/data/ecosystem.ts`
- 页面组件：`src/pages/ecosystem.astro` + `src/components/widgets/EcosystemDirectory.astro`

## 执行顺序

1. GitHub API 采集（最快出结果，脚本简单）
2. VC portfolio 爬取（数据结构化程度高）
3. 学术论文 API（Semantic Scholar 免费 API）
4. Meetup speaker 提取
5. 新闻 + AISG 官网补充
6. 数据合并去重，生成页面
