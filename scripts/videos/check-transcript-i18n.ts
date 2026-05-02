import { videoTranscripts } from '../../src/data/video-transcripts';

const missingZh: string[] = [];
const mismatch: string[] = [];
const suspiciousZh: string[] = [];

function hasCjk(paragraphs: string[]): boolean {
  return /[\u3400-\u9fff]/.test(paragraphs.join(''));
}

for (const transcript of Object.values(videoTranscripts)) {
  const hasEnglish = Boolean(transcript.paragraphsEn?.length);
  if (hasEnglish && transcript.paragraphs.length === 0) missingZh.push(transcript.videoId);
  if (hasEnglish && transcript.paragraphs.length !== transcript.paragraphsEn?.length) mismatch.push(transcript.videoId);
  if (transcript.paragraphs.length > 0 && !hasCjk(transcript.paragraphs)) suspiciousZh.push(transcript.videoId);
}

if (missingZh.length || mismatch.length || suspiciousZh.length) {
  if (missingZh.length) console.error(`Missing zh transcript for: ${missingZh.join(', ')}`);
  if (mismatch.length) console.error(`Transcript paragraph count mismatch for: ${mismatch.join(', ')}`);
  if (suspiciousZh.length) console.error(`Transcript zh field has no CJK characters for: ${suspiciousZh.join(', ')}`);
  process.exit(1);
}

console.log(`✓ transcript i18n ok (${Object.keys(videoTranscripts).length} available transcript records)`);
