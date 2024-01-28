import fs from 'node:fs/promises';
import { dirname } from 'path';

const filesPath = dirname(import.meta.filename);
const errorMessage = 'FS operation failed';

const read = async () => {
    try {
        console.log((await fs.readFile(`${filesPath}/files/fileToRead.txt`)).toString());
    } catch (err) {
        throw Error(errorMessage);
    }
};

await read();