import fs from 'node:fs/promises';
import { dirname } from 'path';

const filesPath = dirname(import.meta.filename);
const errorMessage = 'FS operation failed';

const list = async () => {
    try {
        console.log(await fs.readdir(`${filesPath}/files`));
    } catch (err) {
        throw Error(errorMessage);
    }
};

await list();