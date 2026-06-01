import { marked } from 'marked';
import { cleanTheme } from './themes/clean.js';
import { modernTheme } from './themes/modern.js';
import { agencyTheme } from './themes/agency.js';
import { minimalTheme } from './themes/minimal.js';
import { techTheme } from './themes/tech.js';
import { creativeTheme } from './themes/creative.js';

export type ThemeName = 'clean' | 'modern' | 'agency' | 'minimal' | 'tech' | 'creative';

const themes: Record<ThemeName, string> = {
  clean: cleanTheme,
  modern: modernTheme,
  agency: agencyTheme,
  minimal: minimalTheme,
  tech: techTheme,
  creative: creativeTheme,
};

export function isValidTheme(name: string): name is ThemeName {
  return name in themes;
}

export async function generatePDF(
  markdown: string,
  outputPath: string,
  theme: ThemeName = 'clean'
): Promise<void> {
  // Dynamic import to avoid loading puppeteer in free-tier mode
  const puppeteer = await import('puppeteer');

  const html = await marked(markdown);
  const css = themes[theme];

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${css}</style>
</head>
<body>
${html}
</body>
</html>`;

  const browser = await puppeteer.default.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      printBackground: true,
    });
  } finally {
    await browser.close();
  }
}
