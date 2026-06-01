export const techTheme = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', monospace;
    font-size: 10pt;
    line-height: 1.7;
    color: #c9d1d9;
    background: #0d1117;
    padding: 48px 56px;
    max-width: 820px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 22pt;
    font-weight: 700;
    color: #00FF88;
    margin-bottom: 8px;
    letter-spacing: -1px;
  }

  h1::before { content: '> '; color: #555; }

  h2 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10pt;
    font-weight: 700;
    color: #00FF88;
    margin-top: 32px;
    margin-bottom: 12px;
  }

  h2::before { content: '## '; color: #555; font-weight: 400; }

  p { margin-bottom: 12px; color: #8b949e; }

  ul, ol { margin-left: 20px; margin-bottom: 12px; color: #8b949e; }
  li { margin-bottom: 6px; }
  li::marker { color: #00FF88; }

  table { width: 100%; border-collapse: collapse; margin: 16px 0; font-family: 'JetBrains Mono', monospace; font-size: 9pt; }
  th { background: #161b22; color: #00FF88; padding: 10px 14px; text-align: left; border: 1px solid #30363d; }
  td { padding: 8px 14px; border: 1px solid #21262d; color: #8b949e; }
  tr:nth-child(even) td { background: #0d1117; }

  hr { border: none; border-top: 1px solid #21262d; margin: 28px 0; }

  strong { font-weight: 500; color: #c9d1d9; }

  blockquote {
    background: #161b22;
    border-left: 3px solid #00FF88;
    padding: 12px 16px;
    margin: 16px 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9pt;
    color: #8b949e;
  }

  a { color: #00FF88; text-decoration: none; }

  code { font-family: 'JetBrains Mono', monospace; background: #161b22; padding: 2px 6px; border-radius: 3px; color: #00FF88; font-size: 9pt; }
`;
