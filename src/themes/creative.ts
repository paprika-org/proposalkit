export const creativeTheme = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    font-size: 10.5pt;
    line-height: 1.7;
    color: #2d2d44;
    background: #fff;
    padding: 48px 56px;
    max-width: 820px;
    margin: 0 auto;
  }

  h1 {
    font-size: 26pt;
    font-weight: 800;
    background: linear-gradient(135deg, #7c3aed, #db2777);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
    letter-spacing: -1px;
  }

  h2 {
    font-size: 12pt;
    font-weight: 700;
    color: #7c3aed;
    margin-top: 32px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h2::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 3px;
    background: linear-gradient(135deg, #7c3aed, #db2777);
    border-radius: 2px;
    flex-shrink: 0;
  }

  p { margin-bottom: 12px; color: #4a4a6a; }

  ul, ol { margin-left: 20px; margin-bottom: 12px; color: #4a4a6a; }
  li { margin-bottom: 6px; }
  li::marker { color: #db2777; }

  table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 16px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(124,58,237,0.08); }
  th { background: linear-gradient(135deg, #7c3aed, #db2777); color: #fff; padding: 12px 16px; text-align: left; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.5px; }
  td { padding: 10px 16px; border-bottom: 1px solid #f0e8ff; color: #4a4a6a; }
  tr:last-child td { border-bottom: none; }
  tr:nth-child(even) td { background: #faf5ff; }

  hr { border: none; height: 2px; background: linear-gradient(135deg, #7c3aed22, #db277722); margin: 28px 0; border-radius: 1px; }

  strong { font-weight: 700; color: #2d2d44; }

  blockquote {
    background: linear-gradient(135deg, #faf5ff, #fff0f7);
    border-left: 4px solid;
    border-image: linear-gradient(135deg, #7c3aed, #db2777) 1;
    padding: 16px 20px;
    margin: 16px 0;
    border-radius: 0 8px 8px 0;
    color: #6b5b95;
    font-style: italic;
  }

  a { color: #7c3aed; text-decoration: none; }
`;
