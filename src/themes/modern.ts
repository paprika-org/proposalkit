export const modernTheme = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 10.5pt;
    line-height: 1.6;
    color: #1a1a2e;
    background: #fff;
    padding: 48px 56px;
    max-width: 820px;
    margin: 0 auto;
  }

  h1 {
    font-size: 24pt;
    font-weight: 700;
    color: #0052CC;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
  }

  h2 {
    font-size: 13pt;
    font-weight: 600;
    color: #0052CC;
    margin-top: 28px;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 9pt;
  }

  p { margin-bottom: 12px; color: #444; }

  ul, ol { margin-left: 20px; margin-bottom: 12px; color: #444; }
  li { margin-bottom: 6px; }

  table { width: 100%; border-collapse: collapse; margin: 16px 0; }
  th { background: #0052CC; color: #fff; padding: 10px 14px; text-align: left; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.5px; }
  td { padding: 9px 14px; border-bottom: 1px solid #e8edf5; color: #444; }
  tr:nth-child(even) td { background: #f5f8ff; }

  hr { border: none; border-top: 2px solid #e8edf5; margin: 28px 0; }

  strong { font-weight: 600; color: #1a1a2e; }

  blockquote {
    border-left: 4px solid #0052CC;
    background: #f5f8ff;
    padding: 12px 16px;
    margin: 16px 0;
    border-radius: 0 4px 4px 0;
    color: #555;
  }

  a { color: #0052CC; text-decoration: none; }
`;
