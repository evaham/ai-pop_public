const fs = require('fs');
const path = require('path');

function toCamelCase(name) {
  // handle vendor prefix -webkit -> Webkit
  if (name.startsWith('-')) {
    name = name.replace(/^-+/, '');
    // capitalize vendor prefix
    name = name.replace(/(^|-)\w/g, (m) => m.replace('-', '').toUpperCase());
  }
  return name.split('-').map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)).join('');
}

function transformStyle(cssText) {
  const parts = cssText.split(';').map(s => s.trim()).filter(Boolean);
  const kv = parts.map(p => {
    const idx = p.indexOf(':');
    if (idx === -1) return null;
    const name = p.slice(0, idx).trim();
    const value = p.slice(idx + 1).trim();
    const key = toCamelCase(name);
    return {key, value};
  }).filter(Boolean);

  if (kv.length === 0) return null;
  const obj = kv.map(({key, value}) => `${/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(key) ? key : `'${key}'`}: ${JSON.stringify(value)}`).join(', ');
  return `{{${obj}}}`;
}

function convertFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // replace style="..." where ... does not contain JSX braces
  const regex = /style=\"([^\"]*)\"/g;
  let changed = false;
  content = content.replace(regex, (m, g1) => {
    // skip if looks like already JSX object
    if (/^\{\{.*\}\}$/.test(g1.trim())) return m;
    const transformed = transformStyle(g1);
    if (transformed) {
      changed = true;
      return 'style=' + transformed;
    }
    return m;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Converted styles in', filePath);
  } else {
    console.log('No changes for', filePath);
  }
}

if (require.main === module) {
  const target = process.argv[2];
  if (!target) {
    console.error('Usage: node convert-styles.js <file>');
    process.exit(1);
  }
  convertFile(path.resolve(target));
}
