import fs from 'node:fs'

import { dirname } from 'path';

const filesPath = dirname(import.meta.filename);
const content = 'I am fresh and young';
const errorMessage = 'FS operation failed'

const create = async () => {
    if (!fs.existsSync(dirname)) {
        fs.writeFile(`${filesPath}/files/fresh.txt`, content, () => {});
    } else throw new Error(errorMessage);
};

await create();