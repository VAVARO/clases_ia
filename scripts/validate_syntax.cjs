const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');
const scriptMatches = html.match(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi);
console.log('Found inline scripts:', scriptMatches ? scriptMatches.length : 0);

if (scriptMatches) {
  scriptMatches.forEach((s, idx) => {
    const code = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
    try {
      new vm.Script(code);
      console.log(`Script ${idx + 1} syntax OK`);
    } catch(err) {
      console.error(`Syntax error in script ${idx + 1}:`, err);
    }
  });
}
