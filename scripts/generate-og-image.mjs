import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const output = path.join(root, 'src/assets/images/og-default.png');
const logoPath = path.join(root, 'src/assets/favicons/logo.png');
const logo = await readFile(logoPath);
const logoDataUrl = `data:image/png;base64,${logo.toString('base64')}`;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#F8F3EA"/>
  <circle cx="1040" cy="80" r="240" fill="#D80D32" fill-opacity="0.08"/>
  <circle cx="114" cy="520" r="220" fill="#0F172A" fill-opacity="0.05"/>
  <path d="M822 98C936 129 1020 208 1074 333C1129 462 1047 551 908 521C790 496 717 405 681 297C645 190 708 67 822 98Z" fill="#D80D32" fill-opacity="0.1"/>
  <path d="M757 141C825 118 917 155 974 238C1030 320 1028 421 962 465C896 509 790 480 731 398C671 316 689 164 757 141Z" fill="#D80D32" fill-opacity="0.1"/>
  <rect x="72" y="72" width="1056" height="486" rx="36" fill="#FFFDF9" stroke="#E5DDD2" stroke-width="2"/>
  <image href="${logoDataUrl}" x="104" y="104" width="92" height="92"/>
  <text x="224" y="138" fill="#D80D32" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" letter-spacing="7">SGAI.MD</text>
  <text x="224" y="183" fill="#0F172A" font-family="Georgia, 'Times New Roman', serif" font-size="38" font-weight="700">Singapore AI Observatory</text>
  <line x1="104" y1="238" x2="1096" y2="238" stroke="#E5DDD2" stroke-width="2"/>
  <text x="104" y="324" fill="#0F172A" font-family="Georgia, 'Times New Roman', serif" font-size="66" font-weight="700">
    <tspan x="104" dy="0">Singapore’s AI strategy,</tspan>
    <tspan x="104" dy="80">tracked from the source.</tspan>
  </text>
  <text x="104" y="504" fill="#475569" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="500">
    <tspan x="104" dy="0">Policies · Parliamentary debates · National levers · Ecosystem signals</tspan>
  </text>
</svg>`;

await mkdir(path.dirname(output), { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(output);
console.log(`Generated ${path.relative(root, output)}`);
