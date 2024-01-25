import fs from 'node:fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const writeStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);
    process.stdin.pipe(writeStream);
};

await write();