export const cleanTheme = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600&family=Source+Sans+3:wght@400;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Source Sans 3', 'Georgia', serif;
    font-size: 11pt;
    line-height: 1.7;
    color: #222;
    background: #fff;
    padding: 48px 56px;
    max-width: 820px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Lora', 'Georgia', serif;
    font-size: 26pt;
    font-weight: 600;
    color: #111;
    margin-bottom: 8px;
    padding-bottom: 12px;
    border-bottom: 2px solid #222;
  }

  h2 {
    font-family: 'Lora', 'Georgia', serif;
    font-size: 14pt;
    font-weight: 600;
    color: #333;
    margin-top: 32px;
    margin-bottom: 12px;
    padding-bottom: 4px;
    border-bottom: 1px solid #ddd;
  }

  p { margin-bottom: 12px; }

  ul, ol { margin-left: 20px; margin-bottom: 12px; }
  li { margin-bottom: 4px; }

  table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 10pt; }
  th { background: #f5f5f5; padding: 8px 12px; text-align: left; border: 1px solid #ddd; font-weight: 600; }
  td { padding: 8px 12px; border: 1px solid #ddd; }
  tr:nth-child(even) td { background: #fafafa; }

  hr { border: none; border-top: 1px solid #eee; margin: 28px 0; }

  strong { font-weight: 600; color: #111; }
  em { font-style: italic; }

  blockquote { border-left: 3px solid #ccc; padding-left: 16px; color: #555; margin: 16px 0; }

  a { color: #333; text-decoration: underline; }
`;
