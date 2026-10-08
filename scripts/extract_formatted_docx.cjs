const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Use PowerShell to extract word/document.xml with paragraph preservation
const psCmd = `
Add-Type -AssemblyName System.IO.Compression.FileSystem;
$file = (Get-ChildItem -Filter "*CDN*.docx")[0].FullName;
$zip = [System.IO.Compression.ZipFile]::OpenRead($file);
$entry = $zip.GetEntry('word/document.xml');
$stream = $entry.Open();
$reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8);
$xml = $reader.ReadToEnd();
$reader.Close();
$zip.Dispose();
Set-Content -Path 'word_document.xml' -Value $xml -Encoding UTF8;
`;

fs.writeFileSync('temp_extract.ps1', psCmd, 'utf8');
execSync('powershell -ExecutionPolicy Bypass -File temp_extract.ps1', { stdio: 'inherit' });
if (fs.existsSync('temp_extract.ps1')) fs.unlinkSync('temp_extract.ps1');

const xml = fs.readFileSync('word_document.xml', 'utf8');

// Parse paragraphs <w:p>
// Each <w:p> may contain <w:t> elements
const pRegex = /<w:p\b[^>]*>(.*?)<\/w:p>/gs;
const tRegex = /<w:t\b[^>]*>(.*?)<\/w:t>/gs;

let paragraphs = [];
let match;
while ((match = pRegex.exec(xml)) !== null) {
  const pContent = match[1];
  let pText = '';
  let tMatch;
  while ((tMatch = tRegex.exec(pContent)) !== null) {
    pText += tMatch[1];
  }
  // Decode XML entities
  pText = pText
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
  
  paragraphs.push(pText);
}

fs.writeFileSync('paragraphs.txt', paragraphs.join('\n'), 'utf8');
console.log('Total paragraphs parsed:', paragraphs.length);
