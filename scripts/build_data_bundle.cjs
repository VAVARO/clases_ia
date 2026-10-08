const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const conceptos = JSON.parse(fs.readFileSync(path.join(dataDir, 'conceptos.json'), 'utf8'));
const ejercicios = JSON.parse(fs.readFileSync(path.join(dataDir, 'ejercicios.json'), 'utf8'));
const recursos = JSON.parse(fs.readFileSync(path.join(dataDir, 'recursos.json'), 'utf8'));
const materiales = JSON.parse(fs.readFileSync(path.join(dataDir, 'materiales.json'), 'utf8'));
const autoresPath = path.join(dataDir, 'autores.json');
const autores = fs.existsSync(autoresPath) ? JSON.parse(fs.readFileSync(autoresPath, 'utf8')) : [];

const jsContent = `// Repositorio de Clases de IA - Datos embebidos para compatibilidad local y web
(function() {
  var root = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
  root.AI_REPOSITORY_DATA = {
    conceptos: ${JSON.stringify(conceptos, null, 2)},
    ejercicios: ${JSON.stringify(ejercicios, null, 2)},
    recursos: ${JSON.stringify(recursos, null, 2)},
    materiales: ${JSON.stringify(materiales, null, 2)},
    autores: ${JSON.stringify(autores, null, 2)}
  };
})();
`;

fs.writeFileSync(path.join(dataDir, 'data.js'), jsContent, 'utf8');
console.log('data/data.js successfully created with all collections!');
