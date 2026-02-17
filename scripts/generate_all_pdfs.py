#!/usr/bin/env python3
"""Generate all 19 Chinese translation PDFs."""

import sys
import os
sys.path.insert(0, os.path.dirname(__file__))
from generate_pdf import generate_pdf

TRANSLATIONS_DIR = os.path.join(os.path.dirname(__file__), 'translations')
OUTPUT_DIR = os.path.expanduser('~/Projects/aisg/public/pdfs')
os.makedirs(OUTPUT_DIR, exist_ok=True)

DOCS = [
    {"slug": "nais-2.0", "title": "国家人工智能战略 2.0", "org": "智慧国家与数字政府办公室 (SNDGO)", "date": "2023 年 12 月"},
    {"slug": "nais-1.0", "title": "国家人工智能战略 1.0", "org": "智慧国家与数字政府办公室 (SNDGO)", "date": "2019 年 11 月"},
    {"slug": "smart-nation-initiative", "title": "智慧国家倡议", "org": "总理办公室 (PMO)", "date": "2014 年 11 月"},
    {"slug": "smart-nation-2.0", "title": "智慧国家 2.0", "org": "智慧国家与数字政府办公室 (SNDGO)", "date": "2023 年 10 月"},
    {"slug": "agentic-ai-governance", "title": "Agentic AI 治理框架", "org": "资讯通信媒体发展局 (IMDA)", "date": "2026 年 1 月"},
    {"slug": "genai-governance", "title": "生成式 AI 治理框架", "org": "资讯通信媒体发展局 (IMDA)", "date": "2024 年 1 月"},
    {"slug": "ai-verify", "title": "AI Verify 测试框架", "org": "资讯通信媒体发展局 (IMDA)", "date": "2022 年 5 月"},
    {"slug": "ai-governance-model", "title": "AI 治理模型框架", "org": "IMDA / PDPC", "date": "2019 年 1 月"},
    {"slug": "pdpa", "title": "个人数据保护法 (PDPA)", "org": "个人数据保护委员会 (PDPC)", "date": "2012 年"},
    {"slug": "csa-ai-security", "title": "CSA AI 系统安全指南", "org": "网络安全局 (CSA)", "date": "2024 年 10 月"},
    {"slug": "court-genai-guide", "title": "法院生成式 AI 使用指南", "org": "新加坡最高法院", "date": "2024 年 10 月"},
    {"slug": "mas-veritas", "title": "MAS Veritas 倡议", "org": "新加坡金融管理局 (MAS)", "date": "2021 年"},
    {"slug": "mas-feat", "title": "MAS FEAT 原则", "org": "新加坡金融管理局 (MAS)", "date": "2018 年 11 月"},
    {"slug": "budget-2026", "title": "2026 财政预算案 — 国家 AI 全面推进", "org": "财政部 (MOF)", "date": "2026 年 2 月"},
    {"slug": "budget-2025", "title": "2025 财政预算案 — AI 相关措施", "org": "财政部 (MOF)", "date": "2025 年 2 月"},
    {"slug": "rie2025", "title": "RIE2025 研究创新计划", "org": "国家研究基金会 (NRF)", "date": "2020 年"},
    {"slug": "seoul-ai-summit", "title": "首尔 AI 安全峰会承诺", "org": "外交部 (MFA)", "date": "2024 年 5 月"},
    {"slug": "bletchley-park", "title": "布莱切利宣言 — AI 安全峰会 2023", "org": "外交部 (MFA)", "date": "2023 年 11 月"},
    {"slug": "gpai", "title": "全球 AI 合作伙伴关系 (GPAI)", "org": "SNDGO / 外交部 (MFA)", "date": "2020 年"},
]

for doc in DOCS:
    md_path = os.path.join(TRANSLATIONS_DIR, f"{doc['slug']}-zh.md")
    pdf_path = os.path.join(OUTPUT_DIR, f"{doc['slug']}-zh.pdf")
    
    if not os.path.exists(md_path):
        print(f"SKIP (no md): {doc['slug']}")
        continue
    
    try:
        with open(md_path, 'r') as f:
            content = f.read()
        generate_pdf(doc['title'], doc['org'], doc['date'], content, pdf_path)
    except Exception as e:
        print(f"ERROR: {doc['slug']}: {e}")

print("\nDone! Generated PDFs:")
for f in sorted(os.listdir(OUTPUT_DIR)):
    if f.endswith('-zh.pdf'):
        size = os.path.getsize(os.path.join(OUTPUT_DIR, f))
        print(f"  {f} ({size//1024}KB)")
