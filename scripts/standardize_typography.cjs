const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// Replace arbitrary micro font sizes with standard text-xs
content = content.replace(/text-\[10px\]/g, 'text-xs');
content = content.replace(/text-\[11px\]/g, 'text-xs');

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Typography standardized to clean scale!');
