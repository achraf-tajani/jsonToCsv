const fs = require('fs');

// Lire le fichier JSON
const jsonContent = fs.readFileSync('input/test.json', 'utf-8');
const jsonData = JSON.parse(jsonContent);

const headers = Object.keys(jsonData[0]);
// Convertir en CSV
const csvData = jsonData.map(item => {
    return headers.map(header => item[header]).join(',');
  }).join('\n');

// Écrire le CSV dans un fichier
fs.writeFileSync('output/output.csv', headers.join(',') + '\n' + csvData, 'utf-8');
