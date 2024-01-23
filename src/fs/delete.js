import fs from 'node:fs'
import { dirname } from 'path';

const filsPath = `${dirname(import.meta.filename)}/files/fileToRemove.txt`;
const errorMessage = 'FS operation failed'

const remove = async () => {
    if (fs.existsSync(filsPath)) {
        fs.unlink(filsPath, (err) => {
            if (err) throw new Error(errorMessage);;
        });
    } else throw new Error(errorMessage);
};

await remove();