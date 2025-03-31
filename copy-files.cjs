const fs = require('fs');
const path = require('path');

const filesToCopy = [
    { src: 'src/manifest.json', dest: 'dist/manifest.json' },
    { src: 'src/background.js', dest: 'dist/background.js' },
];

filesToCopy.forEach(file => {
    const destDir = path.dirname(file.dest);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(file.src, file.dest);
    console.log(`Copied ${file.src} to ${file.dest}`);
});
