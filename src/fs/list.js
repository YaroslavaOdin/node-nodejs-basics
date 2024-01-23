import fs from 'node:fs';
import { dirname } from 'path';

const filesPath = dirname(import.meta.filename);
const errorMessage = 'FS operation failed'

const list = async () => {
    fs.readdir(`${filesPath}/files`, (err, files) => {
        if (err) throw errorMessage;
        console.log(files);
    });
};

await list();