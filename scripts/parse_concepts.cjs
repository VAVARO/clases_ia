const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'conceptos_clave_ia.md');
const content = fs.readFileSync(mdPath, 'utf8');

const categories = [
  { id: 'fundamentos', name: 'Fundamentos y Modelos de IA', range: [1, 9] },
  { id: 'arquitectura', name: 'Arquitectura y Mecanismos Técnicos', range: [10, 15] },
  { id: 'interaccion', name: 'Interacción, Adaptación y Recuperación', range: [16, 23] },
  { id: 'agentes', name: 'Sistemas Agénticos y Razonamiento', range: [24, 27] },
  { id: 'seguridad', name: 'Riesgos, Seguridad y Gobernanza', range: [28, 35] }
];

const concepts = [];

// Split into blocks by ### <number>.
const blocks = content.split(/\n###\s+/);

for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const firstLineEnd = block.indexOf('\n');
  const titleLine = block.substring(0, firstLineEnd).trim();
  
  const matchNum = titleLine.match(/^(\d+)\.\s+(.*)$/);
  if (!matchNum) continue;
  
  const num = parseInt(matchNum[1], 10);
  const rawTitle = matchNum[2].trim();
  
  // Extract Concepto original
  let originalTerm = '';
  const termMatch = block.match(/-\s+\*\*Concepto original:\*\*\s+\*?([^\n\*]+)\*?/);
  if (termMatch) {
    originalTerm = termMatch[1].trim();
  }
  
  // Extract Definición
  let definition = '';
  const defMatch = block.match(/-\s+\*\*Definición:\*\*([\s\S]*?)(?=-\s+\*\*Ejemplo práctico:\*\*|$)/);
  if (defMatch) {
    definition = defMatch[1].trim();
  }
  
  // Extract Ejemplo práctico
  let example = '';
  const exMatch = block.match(/-\s+\*\*Ejemplo práctico:\*\*([\s\S]*?)(?=\n---\n|$)/);
  if (exMatch) {
    example = exMatch[1].trim();
  }
  
  // Determine category
  const catObj = categories.find(c => num >= c.range[0] && num <= c.range[1]);
  const category = catObj ? catObj.name : 'General';
  const categoryId = catObj ? catObj.id : 'general';
  
  // Generate tags
  const tags = [catObj ? catObj.name.split(' ')[0] : 'IA'];
  if (num <= 9) tags.push('Modelos', 'Fundamentos');
  else if (num <= 15) tags.push('Técnico', 'Arquitectura');
  else if (num <= 23) tags.push('Prompts', 'Adaptación');
  else if (num <= 27) tags.push('Agentes', 'Razonamiento');
  else tags.push('Ética', 'Seguridad');

  concepts.push({
    id: num,
    title: rawTitle,
    originalTerm: originalTerm || rawTitle,
    category: category,
    categoryId: categoryId,
    definition: definition,
    practicalExample: example,
    tags: Array.from(new Set(tags))
  });
}

console.log(`Parsed ${concepts.length} concepts.`);

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(path.join(dataDir, 'conceptos.json'), JSON.stringify(concepts, null, 2), 'utf8');
console.log('Saved to data/conceptos.json successfully!');
