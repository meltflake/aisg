#!/usr/bin/env python3
"""
Step 1: Discover all AI-related Hansard debate report IDs via PAIR Search.
Uses Playwright to render the React SPA and extract SPRS report IDs.
"""

import asyncio
import json
import re
import time
from pathlib import Path
from urllib.parse import quote

from playwright.async_api import async_playwright

# ── Configuration ──────────────────────────────────────────────────────────────
PAIR_BASE = "https://search.pair.gov.sg"

# Comprehensive AI-related queries to maximise coverage
AI_QUERIES = [
    "artificial intelligence",
    "AI governance",
    "AI regulation",
    "AI safety",
    "AI ethics",
    "AI employment jobs",
    "AI education schools",
    "AI healthcare",
    "national AI strategy",
    "generative AI",
    "deepfake",
    "machine learning",
    "data sovereignty",
    "AI startups",
    "AI research",
    "AI compute",
    "responsible AI",
    "AI accountability",
    "AI bias",
    "AI economy",
    "digital economy AI",
    "AI workforce",
    "AI public sector",
    "AI military defence",
    "AI financial sector",
    "AI copyright",
    "AI legislation",
    "AI Singapore AISG",
    "AI talent",
    "AI investment",
]

DATA_DIR = Path(__file__).parent / "data"
OUTPUT_FILE = DATA_DIR / "discovered_report_ids.json"

# ── Extract report IDs from page HTML ─────────────────────────────────────────
def extract_ids_from_html(html, query=""):
    """Extract SPRS report IDs and title snippets from page HTML."""
    results = {}
    
    # Pattern: reportid=written-answer-XXXX or reportid=oral-answer-XXXX
    # Also handle: reportid=budget-XXXX, reportid=motion-XXXX
    pattern = r'reportid=((?:written-answer|oral-answer|budget|motion|president|adjournment|committee)-\d+)'
    matches = re.findall(pattern, html)
    
    for rid in matches:
        if rid not in results:
            results[rid] = {
                'report_id': rid,
                'discovered_via': query,
            }
    
    return results

# ── Main async discovery ───────────────────────────────────────────────────────
async def discover_all_ids():
    all_ids = {}
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120"
        )
        page = await context.new_page()
        
        for i, query in enumerate(AI_QUERIES):
            print(f"\n[{i+1}/{len(AI_QUERIES)}] Searching: '{query}'")
            
            url = f"{PAIR_BASE}/search?query={quote(query)}&source=hansard"
            
            try:
                await page.goto(url, timeout=20000, wait_until="domcontentloaded")
                
                # Wait for results to appear
                try:
                    await page.wait_for_selector("a[href*='sprs3topic']", timeout=10000)
                except:
                    print(f"  No results or timeout for '{query}'")
                    continue
                
                # Scroll down to load more results
                for _ in range(4):
                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await asyncio.sleep(1.2)
                
                # Get full page HTML
                html = await page.content()
                
                # Extract IDs
                page_ids = extract_ids_from_html(html, query)
                new_count = 0
                for rid, info in page_ids.items():
                    if rid not in all_ids:
                        all_ids[rid] = info
                        new_count += 1
                
                print(f"  Found {len(page_ids)} IDs on page, {new_count} new. Total: {len(all_ids)}")
                
                # Also try to get title text for each link
                links = await page.query_selector_all("a[href*='sprs3topic']")
                for link in links:
                    href = await link.get_attribute("href") or ""
                    m = re.search(r'reportid=([\w-]+\d+)', href)
                    if m:
                        rid = m.group(1)
                        if rid in all_ids and not all_ids[rid].get('title_snippet'):
                            try:
                                text = (await link.inner_text()).strip()[:150]
                                all_ids[rid]['title_snippet'] = text
                            except:
                                pass
                
            except Exception as e:
                print(f"  Error for '{query}': {e}")
            
            await asyncio.sleep(1.5)  # Be polite
        
        await browser.close()
    
    return all_ids

# ── Main ───────────────────────────────────────────────────────────────────────
async def main():
    print("=" * 60)
    print("PAIR Search → SPRS Report ID Discovery (Playwright)")
    print("=" * 60)
    
    all_ids = await discover_all_ids()
    
    # Save results
    result = {
        "total": len(all_ids),
        "report_ids": sorted(all_ids.values(), key=lambda x: x['report_id'])
    }
    
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*60}")
    print(f"Discovery complete! Found {len(all_ids)} unique report IDs.")
    print(f"Saved to: {OUTPUT_FILE}")
    
    # Print breakdown by type
    type_counts = {}
    for rid in all_ids:
        parts = rid.rsplit('-', 1)
        t = parts[0] if len(parts) == 2 else rid
        type_counts[t] = type_counts.get(t, 0) + 1
    
    print(f"\nBreakdown by type:")
    for t, c in sorted(type_counts.items(), key=lambda x: -x[1]):
        print(f"  {t}: {c}")
    
    return all_ids

if __name__ == "__main__":
    asyncio.run(main())
