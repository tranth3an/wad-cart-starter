import fs from 'node:fs';
import path from 'node:path';

const filesToCheck = [
  'src/cart.js',
  'test/cart.test.js',
];

let hasError = false;

for (const file of filesToCheck) {
  const filePath = path.resolve(file);

  if (!fs.existsSync(filePath)) {
    console.error(`Lint error: file not found: ${file}`);
    hasError = true;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  if (/\t/.test(content)) {
    console.error(`Lint error: tab character found in ${file}`);
    hasError = true;
  }

  if (/[ \t]+$/m.test(content)) {
    console.error(`Lint error: trailing whitespace found in ${file}`);
    hasError = true;
  }
}

if (hasError) {
  process.exit(1);
}

console.log('Lint passed.');