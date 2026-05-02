import { debates } from '../../src/data/debates';
import { debateTranscripts } from '../../src/data/debate-transcripts';

function hasCjk(value: string): boolean {
  return /[\u3400-\u9fff]/.test(value);
}

const errors: string[] = [];

for (const debate of debates) {
  const transcript = debateTranscripts[debate.id];
  if (!transcript) {
    errors.push(`${debate.id}: missing transcript record`);
    continue;
  }

  if (transcript.paragraphsEn.length === 0) errors.push(`${debate.id}: missing English original transcript`);
  if (transcript.paragraphs.length === 0) errors.push(`${debate.id}: missing default zh transcript`);
  const zhText = transcript.paragraphs.join('');
  if (zhText && !hasCjk(zhText)) errors.push(`${debate.id}: default transcript does not appear to contain Chinese`);
}

if (errors.length > 0) {
  console.error(`[check-debate-transcripts] ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 80)) console.error(`- ${error}`);
  if (errors.length > 80) console.error(`... ${errors.length - 80} more`);
  process.exit(1);
}

console.log(`[check-debate-transcripts] OK — ${debates.length} debate transcripts have zh/en parity.`);
