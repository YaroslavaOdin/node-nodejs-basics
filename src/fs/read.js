import fs from 'node:fs'
import { dirname } from 'path';

const filesPath = dirname(import.meta.filename);
const errorMessage = 'FS operation failed'

const read = async () => {
    fs.readFile(`${filesPath}/files/fileToRead.txt`, function(err, data){
        if (err) {
            throw errorMessage;
        } else {
            console.log(data.toString());
        }
    });
};

await read();