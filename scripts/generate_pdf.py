#!/usr/bin/env python3
"""Generate Chinese PDF from markdown content using WeasyPrint."""

import sys
import markdown
from weasyprint import HTML

CSS = """
@page {
    size: A4;
    margin: 2.5cm 2cm;
    @top-center {
        content: string(doc-title);
        font-size: 9pt;
        color: #666;
    }
    @bottom-center {
        content: "第 " counter(page) " 页";
        font-size: 9pt;
        color: #666;
    }
}
@page :first {
    @top-center { content: none; }
    @bottom-center { content: none; }
}
body {
    font-family: "Noto Serif CJK SC", "Noto Sans CJK SC", "PingFang SC", "Microsoft YaHei", serif;
    font-size: 11pt;
    line-height: 1.8;
    color: #1a1a1a;
}
h1 {
    string-set: doc-title content();
    font-size: 22pt;
    text-align: center;
    margin-top: 3cm;
    margin-bottom: 0.5cm;
    page-break-after: avoid;
}
.cover-meta {
    text-align: center;
    color: #555;
    font-size: 11pt;
    margin-bottom: 1cm;
}
.cover-note {
    text-align: center;
    color: #888;
    font-size: 10pt;
    border-top: 1px solid #ccc;
    padding-top: 0.5cm;
    margin-top: 2cm;
}
h2 { font-size: 16pt; margin-top: 1.2cm; border-bottom: 1px solid #ddd; padding-bottom: 3pt; page-break-after: avoid; }
h3 { font-size: 13pt; margin-top: 0.8cm; page-break-after: avoid; }
h4 { font-size: 11pt; font-weight: bold; margin-top: 0.5cm; }
p { margin: 0.3cm 0; text-align: justify; }
ul, ol { margin: 0.3cm 0; padding-left: 1.5em; }
li { margin: 0.15cm 0; }
table { width: 100%; border-collapse: collapse; margin: 0.5cm 0; font-size: 10pt; }
th, td { border: 1px solid #ccc; padding: 6px 8px; text-align: left; }
th { background: #f5f5f5; font-weight: bold; }
blockquote { border-left: 3px solid #ddd; margin: 0.5cm 0; padding: 0.3cm 1cm; color: #555; background: #fafafa; }
code { font-family: monospace; font-size: 10pt; background: #f5f5f5; padding: 1px 4px; }
.english-note { color: #666; font-size: 10pt; }
hr { border: none; border-top: 1px solid #ddd; margin: 1cm 0; }
"""

def generate_pdf(md_content, output_path):
    html_body = markdown.markdown(md_content, extensions=['tables', 'fenced_code'])
    full_html = f"""<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body>{html_body}</body></html>"""
    HTML(string=full_html).write_pdf(output_path, stylesheets=[],
        presentational_hints=True)
    # Re-do with CSS
    full_html2 = f"""<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>{CSS}</style></head>
<body>{html_body}</body></html>"""
    HTML(string=full_html2).write_pdf(output_path)
    return output_path

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: generate_pdf.py <input.md> <output.pdf>")
        sys.exit(1)
    with open(sys.argv[1]) as f:
        content = f.read()
    generate_pdf(content, sys.argv[2])
    import os
    size = os.path.getsize(sys.argv[2])
    print(f"Generated {sys.argv[2]} ({size:,} bytes)")
