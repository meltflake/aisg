#!/usr/bin/env python3
"""Generate Chinese translation PDF from markdown content using WeasyPrint."""

import argparse
import sys
import markdown
from weasyprint import HTML

def generate_pdf(title, org, date, content_md, output_path):
    """Generate a well-formatted Chinese PDF."""
    # Convert markdown to HTML
    content_html = markdown.markdown(content_md, extensions=['tables', 'fenced_code', 'toc'])
    
    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<style>
@page {{
    size: A4;
    margin: 2.5cm 2cm 2.5cm 2cm;
    @top-center {{
        content: "{title} — 中文翻译版";
        font-size: 8pt;
        color: #666;
        font-family: 'Noto Serif CJK SC', 'Noto Sans CJK SC', serif;
    }}
    @bottom-center {{
        content: "第 " counter(page) " 页";
        font-size: 8pt;
        color: #666;
        font-family: 'Noto Serif CJK SC', 'Noto Sans CJK SC', serif;
    }}
}}
@page :first {{
    @top-center {{ content: none; }}
    @bottom-center {{ content: none; }}
}}
body {{
    font-family: 'Noto Serif CJK SC', 'Noto Sans CJK SC', 'SimSun', serif;
    font-size: 11pt;
    line-height: 1.8;
    color: #333;
}}
.cover {{
    page-break-after: always;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    text-align: center;
}}
.cover h1 {{
    font-size: 28pt;
    color: #1a365d;
    margin-bottom: 0.5em;
    line-height: 1.3;
}}
.cover .org {{
    font-size: 14pt;
    color: #555;
    margin-bottom: 0.3em;
}}
.cover .date {{
    font-size: 12pt;
    color: #777;
    margin-bottom: 1.5em;
}}
.cover .badge {{
    display: inline-block;
    background: #e2e8f0;
    color: #2d3748;
    padding: 0.3em 1em;
    border-radius: 4px;
    font-size: 11pt;
}}
h1 {{ font-size: 20pt; color: #1a365d; margin-top: 1.5em; margin-bottom: 0.5em; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.2em; }}
h2 {{ font-size: 16pt; color: #2a4365; margin-top: 1.2em; margin-bottom: 0.4em; }}
h3 {{ font-size: 13pt; color: #2c5282; margin-top: 1em; margin-bottom: 0.3em; }}
h4 {{ font-size: 11.5pt; color: #2b6cb0; margin-top: 0.8em; margin-bottom: 0.3em; }}
p {{ margin-bottom: 0.6em; text-align: justify; }}
ul, ol {{ margin-bottom: 0.6em; padding-left: 1.5em; }}
li {{ margin-bottom: 0.3em; }}
table {{ border-collapse: collapse; width: 100%; margin: 1em 0; font-size: 10pt; }}
th, td {{ border: 1px solid #ccc; padding: 6px 10px; text-align: left; }}
th {{ background: #f0f4f8; font-weight: bold; }}
blockquote {{ border-left: 3px solid #cbd5e0; padding-left: 1em; color: #555; margin: 1em 0; }}
code {{ background: #f7fafc; padding: 1px 4px; font-size: 10pt; border-radius: 2px; }}
</style>
</head>
<body>
<div class="cover">
    <h1>{title}</h1>
    <div class="org">{org}</div>
    <div class="date">{date}</div>
    <div class="badge">中文翻译版</div>
</div>
{content_html}
</body>
</html>"""
    
    HTML(string=html).write_pdf(output_path)
    print(f"Generated: {output_path}")

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--title', required=True)
    parser.add_argument('--org', required=True)
    parser.add_argument('--date', required=True)
    parser.add_argument('--input', required=True, help='Markdown file path')
    parser.add_argument('--output', required=True, help='Output PDF path')
    args = parser.parse_args()
    
    with open(args.input, 'r') as f:
        content = f.read()
    
    generate_pdf(args.title, args.org, args.date, content, args.output)
