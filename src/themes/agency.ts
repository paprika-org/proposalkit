export const agencyTheme = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&family=Open+Sans:wght@400;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 10.5pt;
    line-height: 1.7;
    color: #e8e8f0;
    background: #0d1b2a;
    padding: 48px 56px;
    max-width: 820px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 28pt;
    font-weight: 800;
    color: #FF6B6B;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 11pt;
    font-weight: 700;
    color: #FF6B6B;
    margin-top: 32px;
    margin-bottom: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p { margin-bottom: 12px; color: #c8c8d8; }

  ul, ol { margin-left: 20px; margin-bottom: 12px; color: #c8c8d8; }
  li { margin-bottom: 6px; }

  table { width: 100%; border-collapse: collapse; margin: 16px 0; }
  th { background: #FF6B6B; color: #fff; padding: 10px 14px; text-align: left; font-family: 'Montserrat', sans-serif; font-size: 9pt; text-transform: uppercase; letter-spacing: 1px; }
  td { padding: 10px 14px; border-bottom: 1px solid #1e2d40; color: #c8c8d8; }
  tr:nth-child(even) td { background: #111e2e; }

  hr { border: none; border-top: 1px solid #1e2d40; margin: 28px 0; }

  strong { font-weight: 600; color: #fff; }

  blockquote {
    border-left: 4px solid #FF6B6B;
    padding: 12px 16px;
    margin: 16px 0;
    color: #999;
    font-style: italic;
  }

  a { color: #FF6B6B; text-decoration: none; }
`;
