import fs from 'node:fs'
import { dirname } from 'path';

const filesPath = dirname(import.meta.filename);
const errorMessage = 'FS operation failed'

const copy = async () => {
    if (!fs.existsSync(`${filesPath}/files`)) {
        throw new Error(errorMessage);
    }

    fs.mkdir(`${filesPath}/files_copy`, err => {
        if (err) throw errorMessage;

        fs.readdir(`${filesPath}/files`, (err, files) => {
            if (err) throw errorMessage;

            files.forEach((fileName) => {
                fs.copyFile(`${filesPath}/files/${fileName}`, `${filesPath}/files_copy/${fileName}`, err => {
                    if(err) throw errorMessage;
                });
            }) 
        });
    });
};

await copy();
