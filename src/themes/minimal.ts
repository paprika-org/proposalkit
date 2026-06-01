export const minimalTheme = `
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600&family=Jost:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Jost', 'Helvetica Neue', sans-serif;
    font-size: 11pt;
    line-height: 1.8;
    color: #444;
    background: #faf8f5;
    padding: 72px 80px;
    max-width: 760px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Crimson Pro', 'Georgia', serif;
    font-size: 28pt;
    font-weight: 600;
    color: #222;
    margin-bottom: 16px;
    font-style: italic;
  }

  h2 {
    font-family: 'Jost', sans-serif;
    font-size: 8pt;
    font-weight: 500;
    color: #888;
    margin-top: 40px;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  p { margin-bottom: 16px; }

  ul, ol { margin-left: 20px; margin-bottom: 16px; }
  li { margin-bottom: 8px; }

  table { width: 100%; border-collapse: collapse; margin: 20px 0; }
  th { padding: 8px 12px; text-align: left; border-bottom: 2px solid #ddd; font-size: 8pt; text-transform: uppercase; letter-spacing: 1px; color: #888; }
  td { padding: 10px 12px; border-bottom: 1px solid #eee; }

  hr { border: none; border-top: 1px solid #e8e4df; margin: 36px 0; }

  strong { font-weight: 500; color: #222; }

  blockquote { padding: 0 20px; color: #888; font-style: italic; }

  a { color: #444; }
`;
