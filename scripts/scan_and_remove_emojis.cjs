const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'data/conceptos.json',
  'data/ejercicios.json',
  'data/recursos.json',
  'data/materiales.json',
  'data/autores.json'
];

// Broad emoji regex
const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/gu;

files.forEach(f => {
  const p = path.join(__dirname, '..', f);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  const matches = content.match(emojiRegex);
  if (matches) {
    console.log(`Found ${matches.length} emojis in ${f}:`, [...new Set(matches)]);
  } else {
    console.log(`No emojis in ${f}`);
  }
});
