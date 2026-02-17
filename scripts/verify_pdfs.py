#!/usr/bin/env python3
"""Verify all 19 Chinese translation PDFs for quality."""
import os, sys, re
import fitz  # pymupdf

PDF_DIR = os.path.expanduser("~/Projects/aisg/public/pdfs")
DIST_DIR = os.path.expanduser("~/Projects/aisg/dist/aisg/pdfs")
ASTRO_FILE = os.path.expanduser("~/Projects/aisg/src/pages/policies/index.astro")

EXPECTED = [
    "nais-2.0-zh.pdf", "nais-1.0-zh.pdf", "smart-nation-initiative-zh.pdf",
    "smart-nation-2.0-zh.pdf", "agentic-ai-governance-zh.pdf",
    "genai-governance-zh.pdf", "ai-verify-zh.pdf", "ai-governance-model-zh.pdf",
    "pdpa-zh.pdf", "csa-ai-security-zh.pdf", "court-genai-guide-zh.pdf",
    "mas-veritas-zh.pdf", "mas-feat-zh.pdf", "budget-2026-zh.pdf",
    "budget-2025-zh.pdf", "rie2025-zh.pdf", "seoul-ai-summit-zh.pdf",
    "bletchley-park-zh.pdf", "gpai-zh.pdf",
]

# Term patterns: English term followed by Chinese explanation or vice versa
TERM_PATTERNS = [
    r'[A-Z]{2,}',  # Has English acronyms
    r'[\u4e00-\u9fff]',  # Has Chinese characters
]

issues = []

# Read astro file for link verification
with open(ASTRO_FILE, 'r') as f:
    astro_content = f.read()

print("=" * 70)
print("PDF QUALITY VERIFICATION REPORT")
print("=" * 70)

for fname in EXPECTED:
    path = os.path.join(PDF_DIR, fname)
    slug = fname.replace("-zh.pdf", "")
    print(f"\n--- {fname} ---")
    
    # 1. Check exists and non-empty
    if not os.path.exists(path):
        issues.append((fname, "MISSING"))
        print("  ❌ FILE MISSING")
        continue
    
    size = os.path.getsize(path)
    if size < 10240:
        issues.append((fname, f"TOO SMALL: {size}B"))
        print(f"  ❌ Too small: {size}B")
        continue
    
    # 2. Read PDF, check pages and content
    try:
        doc = fitz.open(path)
    except Exception as e:
        issues.append((fname, f"CORRUPT: {e}"))
        print(f"  ❌ Cannot open: {e}")
        continue
    
    pages = len(doc)
    if pages < 2:
        issues.append((fname, f"Only {pages} page(s)"))
        print(f"  ⚠️  Only {pages} page(s)")
    
    # Extract text from all pages
    full_text = ""
    for page in doc:
        full_text += page.get_text()
    doc.close()
    
    text_len = len(full_text.strip())
    if text_len < 200:
        issues.append((fname, f"Very little text: {text_len} chars"))
        print(f"  ❌ Very little text: {text_len} chars")
        continue
    
    # Check for Chinese content
    chinese_chars = len(re.findall(r'[\u4e00-\u9fff]', full_text))
    if chinese_chars < 100:
        issues.append((fname, f"Low Chinese content: {chinese_chars} chars"))
        print(f"  ❌ Low Chinese content: {chinese_chars} chars")
    
    # Check for mojibake patterns
    mojibake = len(re.findall(r'[�□■]', full_text))
    if mojibake > 0:
        issues.append((fname, f"Mojibake detected: {mojibake} occurrences"))
        print(f"  ❌ Mojibake: {mojibake} occurrences")
    
    # 3. Check English terms preserved
    english_terms = re.findall(r'[A-Z][A-Za-z]{2,}', full_text)
    has_bilingual = len(english_terms) > 3
    
    # Show first 500 chars for manual review
    preview = full_text[:500].replace('\n', ' ').strip()
    
    # 4. Check astro link
    expected_link = f"/aisg/pdfs/{fname}"
    link_ok = expected_link in astro_content
    
    print(f"  📄 Size: {size//1024}KB | Pages: {pages} | Chinese chars: {chinese_chars} | English terms: {len(english_terms)}")
    print(f"  🔗 Astro link: {'✅' if link_ok else '❌ MISSING'}")
    print(f"  📝 Preview: {preview[:200]}...")
    
    if not link_ok:
        issues.append((fname, "Astro link missing"))
    if not has_bilingual:
        issues.append((fname, "Few English terms - check bilingual requirement"))

# 5. Check dist directory
print(f"\n{'=' * 70}")
print("DIST DIRECTORY CHECK")
print("=" * 70)

if os.path.exists(DIST_DIR):
    dist_files = os.listdir(DIST_DIR)
    for fname in EXPECTED:
        dpath = os.path.join(DIST_DIR, fname)
        if os.path.exists(dpath):
            dsize = os.path.getsize(dpath)
            status = "✅" if dsize >= 10240 else f"❌ {dsize}B"
            print(f"  {status} {fname} ({dsize//1024}KB)")
        else:
            print(f"  ❌ MISSING in dist: {fname}")
            issues.append((fname, "Missing from dist/"))
else:
    print(f"  ⚠️  dist dir not found: {DIST_DIR} (run npm run build first)")

# Summary
print(f"\n{'=' * 70}")
print("SUMMARY")
print("=" * 70)
print(f"Total PDFs expected: {len(EXPECTED)}")
print(f"Issues found: {len(issues)}")
for fname, issue in issues:
    print(f"  ❌ {fname}: {issue}")
if not issues:
    print("  ✅ All PDFs passed verification!")
sys.exit(1 if issues else 0)
