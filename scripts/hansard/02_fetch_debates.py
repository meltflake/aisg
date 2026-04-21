#!/usr/bin/env python3
"""
Step 2: Fetch full debate content from SPRS API for all discovered report IDs.
Cleans HTML, extracts structured data, and saves to JSON.
"""

import json
import re
import time
import concurrent.futures
from datetime import datetime
from pathlib import Path
from bs4 import BeautifulSoup
import requests

# ── Configuration ──────────────────────────────────────────────────────────────
SPRS_BASE = "https://sprs.parl.gov.sg"
DATA_DIR = Path(__file__).parent / "data"
INPUT_FILE = DATA_DIR / "discovered_report_ids.json"
OUTPUT_FILE = DATA_DIR / "all_ai_debates.json"
MAX_WORKERS = 5   # Concurrent requests
DELAY = 0.3       # Seconds between requests per worker

HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120",
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "Referer": "https://sprs.parl.gov.sg/search/",
}

# ── Speaker extraction ─────────────────────────────────────────────────────────
def extract_speakers(text, mps_raw):
    """Extract unique speaker names from debate text."""
    speakers = set()
    
    # From mpNames field
    if mps_raw:
        for name in mps_raw.split(','):
            name = name.strip()
            # Clean up titles
            name = re.sub(r'^(Mr|Mrs|Ms|Dr|Prof|Mdm|The|A)\s+', '', name).strip()
            name = re.sub(r'\s*\(.*?\)\s*$', '', name).strip()
            if len(name) > 3 and name not in ('Speaker', 'Chairman'):
                speakers.add(name)
    
    return sorted(speakers)

# ── Date parsing ───────────────────────────────────────────────────────────────
def parse_date(date_str):
    """Convert SPRS date format (DD-M-YYYY) to ISO format (YYYY-MM-DD)."""
    if not date_str:
        return None
    try:
        # Handle formats like "22-9-2025", "3-2-2026", "12-2-2026"
        parts = date_str.strip().split('-')
        if len(parts) == 3:
            day, month, year = parts
            return f"{year}-{int(month):02d}-{int(day):02d}"
    except:
        pass
    return date_str

# ── Content cleaning ───────────────────────────────────────────────────────────
def clean_debate_content(html_content):
    """Parse HTML debate content into structured speech segments."""
    if not html_content:
        return [], ""
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Extract full plain text
    full_text = soup.get_text(separator='\n', strip=True)
    
    # Extract structured speeches
    speeches = []
    current_speaker = None
    current_text = []
    
    for elem in soup.find_all(['p', 'div', 'span', 'b', 'strong']):
        text = elem.get_text(strip=True)
        if not text:
            continue
        
        # Detect speaker names (bold elements or specific patterns)
        is_bold = elem.name in ('b', 'strong') or elem.find('b') or elem.find('strong')
        
        # Check if this looks like a speaker attribution
        # Patterns: "Mr Name :", "Mrs Name :", "The Minister (Mr Name) :"
        speaker_match = re.match(
            r'^((?:Mr|Mrs|Ms|Dr|Prof|Mdm|The|A)\s+[A-Z][^:]{3,60}?)\s*:',
            text
        )
        
        if speaker_match and (is_bold or len(text) < 100):
            # Save previous speech
            if current_speaker and current_text:
                speeches.append({
                    'speaker': current_speaker,
                    'text': ' '.join(current_text).strip()
                })
            current_speaker = speaker_match.group(1).strip()
            remaining = text[speaker_match.end():].strip()
            current_text = [remaining] if remaining else []
        elif current_speaker and text and not text.isdigit():
            current_text.append(text)
    
    # Save last speech
    if current_speaker and current_text:
        speeches.append({
            'speaker': current_speaker,
            'text': ' '.join(current_text).strip()
        })
    
    return speeches, full_text

# ── Determine AI topics ────────────────────────────────────────────────────────
AI_TOPIC_KEYWORDS = {
    'AI Governance & Regulation': ['governance', 'regulation', 'regulate', 'framework', 'policy', 'legislation', 'law', 'rules', 'accountability', 'liability'],
    'AI Safety & Ethics': ['safety', 'ethics', 'ethical', 'responsible', 'bias', 'fairness', 'transparency', 'explainability', 'harm', 'risk'],
    'AI Economy & Industry': ['economy', 'industry', 'startup', 'investment', 'business', 'company', 'enterprise', 'commercial', 'innovation', 'competitive'],
    'AI & Employment': ['employment', 'jobs', 'workers', 'workforce', 'displacement', 'reskilling', 'upskilling', 'retraining', 'redundant', 'labour'],
    'AI in Education': ['education', 'school', 'student', 'curriculum', 'university', 'learning', 'teaching', 'academic'],
    'AI in Healthcare': ['healthcare', 'health', 'medical', 'hospital', 'patient', 'diagnosis', 'clinical', 'medicine'],
    'AI & National Security': ['security', 'defence', 'military', 'cyber', 'surveillance', 'national security', 'intelligence'],
    'AI Infrastructure & Research': ['compute', 'infrastructure', 'research', 'development', 'talent', 'capability', 'data centre', 'GPU', 'model'],
    'Deepfakes & Disinformation': ['deepfake', 'disinformation', 'misinformation', 'fake', 'synthetic media', 'manipulated'],
    'AI in Public Sector': ['government', 'public sector', 'civil service', 'ministry', 'agency', 'GovTech', 'e-government'],
    'Generative AI': ['generative', 'ChatGPT', 'GPT', 'large language model', 'LLM', 'foundation model', 'GenAI'],
    'AI Strategy': ['strategy', 'NAIS', 'national AI', 'roadmap', 'vision', 'plan', 'initiative'],
}

def classify_topics(title, full_text):
    """Classify a debate into AI topic categories."""
    combined = (title + ' ' + full_text[:2000]).lower()
    topics = []
    for topic, keywords in AI_TOPIC_KEYWORDS.items():
        if any(kw.lower() in combined for kw in keywords):
            topics.append(topic)
    return topics[:4]  # Max 4 topics per debate

# ── Fetch single debate ────────────────────────────────────────────────────────
def fetch_debate(report_id_info):
    """Fetch and process a single debate from SPRS API."""
    report_id = report_id_info['report_id']
    
    try:
        r = requests.post(
            f"{SPRS_BASE}/search/getHansardTopic/?id={report_id}",
            headers=HEADERS,
            json={},
            timeout=15
        )
        
        if r.status_code != 200:
            return None
        
        data = r.json()
        html_data = data.get('resultHTML', {})
        
        if not html_data or not html_data.get('title'):
            return None
        
        title = html_data.get('title', '').strip()
        date_raw = html_data.get('sittingDate', '')
        report_type = html_data.get('reportType', '')
        parl_no = html_data.get('parlNo', '')
        mps_raw = html_data.get('mpNames', '')
        content_html = html_data.get('content', '')
        
        # Parse content
        speeches, full_text = clean_debate_content(content_html)
        
        # Extract speakers
        speakers = extract_speakers(full_text, mps_raw)
        
        # Classify topics
        topics = classify_topics(title, full_text)
        
        # Parse date
        date_iso = parse_date(date_raw)
        
        # Build structured record
        debate = {
            'id': report_id,
            'title': title,
            'date': date_iso,
            'date_raw': date_raw,
            'parliament': str(parl_no),
            'type': report_type,
            'speakers': speakers,
            'topics': topics,
            'full_text': full_text[:8000],  # Cap at 8000 chars
            'speeches': speeches[:20],       # Cap at 20 speech segments
            'source_url': f"https://sprs.parl.gov.sg/search/#/sprs3topic?reportid={report_id}",
            'discovered_via': report_id_info.get('discovered_via', ''),
            'title_snippet': report_id_info.get('title_snippet', ''),
        }
        
        time.sleep(DELAY)
        return debate
    
    except Exception as e:
        print(f"  Error fetching {report_id}: {e}")
        return None

# ── Main ───────────────────────────────────────────────────────────────────────
def main():
    print("=" * 60)
    print("SPRS API — Batch Debate Content Fetcher")
    print("=" * 60)
    
    # Load discovered IDs
    with open(INPUT_FILE, 'r') as f:
        data = json.load(f)
    
    report_ids = data['report_ids']
    print(f"\nLoaded {len(report_ids)} report IDs to fetch.")
    
    # Fetch all debates
    all_debates = []
    failed = []
    
    print(f"\nFetching with {MAX_WORKERS} concurrent workers...")
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {executor.submit(fetch_debate, rid): rid for rid in report_ids}
        
        for i, future in enumerate(concurrent.futures.as_completed(futures)):
            rid = futures[future]
            try:
                result = future.result()
                if result:
                    all_debates.append(result)
                    print(f"[{i+1}/{len(report_ids)}] ✓ {result['id']}: {result['title'][:60]} ({result['date']})")
                else:
                    failed.append(rid['report_id'])
                    print(f"[{i+1}/{len(report_ids)}] ✗ {rid['report_id']}: no data")
            except Exception as e:
                failed.append(rid['report_id'])
                print(f"[{i+1}/{len(report_ids)}] ✗ {rid['report_id']}: {e}")
    
    # Sort by date (newest first)
    all_debates.sort(key=lambda x: x.get('date', '') or '', reverse=True)
    
    # Save results
    output = {
        "fetched_at": datetime.now().isoformat(),
        "total": len(all_debates),
        "failed": len(failed),
        "debates": all_debates
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*60}")
    print(f"Done! Fetched {len(all_debates)} debates, {len(failed)} failed.")
    print(f"Saved to: {OUTPUT_FILE}")
    
    # Stats
    print(f"\nDate range: {all_debates[-1]['date']} → {all_debates[0]['date']}")
    
    type_counts = {}
    for d in all_debates:
        t = d['type']
        type_counts[t] = type_counts.get(t, 0) + 1
    print(f"\nBy type:")
    for t, c in sorted(type_counts.items(), key=lambda x: -x[1]):
        print(f"  {t}: {c}")
    
    topic_counts = {}
    for d in all_debates:
        for t in d['topics']:
            topic_counts[t] = topic_counts.get(t, 0) + 1
    print(f"\nBy AI topic:")
    for t, c in sorted(topic_counts.items(), key=lambda x: -x[1]):
        print(f"  {t}: {c}")
    
    # Show a few samples
    print(f"\nSample debates (newest first):")
    for d in all_debates[:5]:
        print(f"  [{d['date']}] {d['title'][:70]}")
        print(f"    Speakers: {', '.join(d['speakers'][:3])}")
        print(f"    Topics: {', '.join(d['topics'][:2])}")

if __name__ == "__main__":
    main()
