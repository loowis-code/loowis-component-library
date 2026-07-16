const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'dist', 'index.js');
const contents = fs.readFileSync(target, 'utf8');

if (!contents.startsWith("'use client';")) {
    fs.writeFileSync(target, `'use client';\n${contents}`);
}
