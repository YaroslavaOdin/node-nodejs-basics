import fs from 'node:fs'
import { fileURLToPath } from 'url';
import { createHash } from 'node:crypto'
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const readStream = fs.createReadStream(`${__dirname}/files/fileToCalculateHashFor.txt`);
    readStream.on('data', (chunk) => {
        const hash = createHash('sha256').update(chunk).digest('hex');
        process.stdout.write(hash);
    });
};

await calculateHash();