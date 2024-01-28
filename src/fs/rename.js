import fs from 'node:fs'
import { dirname } from 'path';

const filesPath = dirname(import.meta.filename);
const errorMessage = 'FS operation failed';
const prevFilePath = '/files/wrongFilename.txt';
const newFilePath = '/files/properFilename.md';

const rename = async () => {
    fs.rename(filesPath + prevFilePath, filesPath + newFilePath, err => {
        if(err) {
            throw Error(errorMessage)
        };
    });
};

await rename();