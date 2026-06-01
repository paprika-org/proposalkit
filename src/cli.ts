#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import minimist from 'minimist';
import { generateMarkdown, ProposalData } from './generator.js';
import { generatePDF, isValidTheme, ThemeName } from './pdf.js';

const THEMES = ['clean', 'modern', 'agency', 'minimal', 'tech', 'creative'];
const GUMROAD_URL = 'https://proposalkit.gumroad.com';

function isPro(): boolean {
  return !!(process.env.PROPOSALKIT_PRO_KEY);
}

function printHelp(): void {
  console.log(`
ProposalKit — Generate polished proposals for freelance developers

USAGE
  proposalkit [options]

FREE OPTIONS
  --client <name>      Client or company name
  --project <title>    Project title
  --budget <amount>    Budget (e.g. "$5,000")
  --timeline <period>  Timeline (e.g. "4 weeks")
  --scope <items>      Comma-separated deliverables
  --about <text>       About you / your agency
  --output <file>      Output filename (default: proposal.md)

PRO OPTIONS (PROPOSALKIT_PRO_KEY required)
  --pdf                Export to PDF
  --theme <name>       PDF theme: ${THEMES.join(', ')} (default: clean)

EXAMPLES
  # Free — generate markdown proposal
  proposalkit \\
    --client "Acme Corp" \\
    --project "E-commerce Redesign" \\
    --budget "\\$8,000" \\
    --timeline "6 weeks" \\
    --scope "UI design,Frontend development,CMS integration,QA testing" \\
    --about "We are a 2-person studio specialising in e-commerce UX."

  # Pro — generate PDF with modern theme
  PROPOSALKIT_PRO_KEY=your_key proposalkit \\
    --client "Acme Corp" --project "E-commerce Redesign" \\
    --budget "\\$8,000" --timeline "6 weeks" \\
    --scope "UI design,Frontend development" \\
    --about "We are a 2-person studio." \\
    --pdf --theme modern

PRO
  Get ProposalKit Pro at ${GUMROAD_URL}
  $19 one-time — unlocks PDF export with 6 professional themes
`);
}

async function main(): Promise<void> {
  const argv = minimist(process.argv.slice(2), {
    string: ['client', 'project', 'budget', 'timeline', 'scope', 'about', 'output', 'theme'],
    boolean: ['pdf', 'help', 'pro'],
    alias: { h: 'help' },
    default: { theme: 'clean', output: '' },
  });

  if (argv.help || argv.h) {
    printHelp();
    process.exit(0);
  }

  // Validate required args
  const missing: string[] = [];
  if (!argv.client) missing.push('--client');
  if (!argv.project) missing.push('--project');
  if (!argv.budget) missing.push('--budget');
  if (!argv.timeline) missing.push('--timeline');
  if (!argv.scope) missing.push('--scope');
  if (!argv.about) missing.push('--about');

  if (missing.length > 0) {
    console.error(`Error: missing required options: ${missing.join(', ')}`);
    console.error('Run with --help for usage.');
    process.exit(1);
  }

  const scope = (argv.scope as string).split(',').map((s: string) => s.trim()).filter(Boolean);

  const data: ProposalData = {
    client: argv.client as string,
    project: argv.project as string,
    budget: argv.budget as string,
    timeline: argv.timeline as string,
    scope,
    about: argv.about as string,
  };

  const wantPdf = argv.pdf;

  // Pro gate
  if (wantPdf && !isPro()) {
    console.error(`ProposalKit Pro required for PDF export.`);
    console.error(`Get it at ${GUMROAD_URL} — $19 one-time.`);
    process.exit(1);
  }

  const markdown = generateMarkdown(data);

  if (wantPdf) {
    const theme = argv.theme as string;
    if (!isValidTheme(theme)) {
      console.error(`Unknown theme: "${theme}". Available: ${THEMES.join(', ')}`);
      process.exit(1);
    }
    const outputFile = (argv.output as string) || 'proposal.pdf';
    const outputPath = path.resolve(outputFile);
    console.log(`Generating PDF with "${theme}" theme...`);
    await generatePDF(markdown, outputPath, theme as ThemeName);
    console.log(`✓ PDF saved to ${outputPath}`);
  } else {
    const outputFile = (argv.output as string) || 'proposal.md';
    const outputPath = path.resolve(outputFile);
    fs.writeFileSync(outputPath, markdown, 'utf8');
    console.log(`✓ Proposal saved to ${outputPath}`);
    if (!isPro()) {
      console.log(`\n  → Upgrade to Pro for PDF export with 6 themes: ${GUMROAD_URL}`);
    }
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
