import fs from 'node:fs/promises';
import { dirname } from 'path';

const filesPath = dirname(import.meta.filename);
const content = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
    try {
        await fs.appendFile(`${filesPath}/files/fresh.txt`, content, { flag: 'wx' });
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await create();