import fs from 'node:fs'
import zlib from 'node:zlib'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const source = fs.createReadStream(`${__dirname}/files/archive.gz`);
    const destination = fs.createWriteStream(`${__dirname}/files/fileToCompress.txt`);
    const unzip = zlib.createUnzip();
    source.pipe(unzip).pipe(destination);
};

await decompress();