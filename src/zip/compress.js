import fs from 'node:fs'
import zlib from 'node:zlib'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const source = fs.createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const destination = fs.createWriteStream(`${__dirname}/files/archive.gz`);
    const gzip = zlib.createGzip();
    source.pipe(gzip).pipe(destination);
};

await compress();