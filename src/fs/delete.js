import fs from 'node:fs/promises';
import { dirname } from 'path';

const filsPath = `${dirname(import.meta.filename)}/files/fileToRemove.txt`;
const errorMessage = 'FS operation failed';

const remove = async () => {
    try {
        await fs.unlink(filsPath);
    } catch (err) {
        throw Error(errorMessage);
    }
};

await remove();