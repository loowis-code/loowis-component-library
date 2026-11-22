const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const missing = [];

function checkTarget(target) {
    if (typeof target === 'string') {
        const file = path.join(root, target.replace(/^\.\//, ''));
        if (!fs.existsSync(file)) missing.push(target);
        return;
    }
    for (const value of Object.values(target)) checkTarget(value);
}

for (const exported of Object.values(packageJson.exports)) checkTarget(exported);

if (missing.length) {
    console.error(`Missing package export targets:\n${missing.map((file) => `- ${file}`).join('\n')}`);
    process.exit(1);
}

console.log(`Verified ${Object.keys(packageJson.exports).length} public package exports.`);
