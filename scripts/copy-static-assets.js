const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', 'src', 'styles');
const destination = path.join(__dirname, '..', 'dist', 'styles');

fs.mkdirSync(destination, { recursive: true });

for (const filename of fs.readdirSync(source)) {
    if (filename.endsWith('.css')) {
        fs.copyFileSync(path.join(source, filename), path.join(destination, filename));
    }
}
