import * as fs from 'node:fs/promises';
import { dirname } from 'path';

const filesPath = dirname(import.meta.filename);
const errorMessage = 'FS operation failed';

const copy = async () => {
    try {
        const files = await fs.readdir(`${filesPath}/files`);
        await fs.mkdir(`${filesPath}/files_copy`);
        files.forEach(async (fileName) => {
            await fs.copyFile(`${filesPath}/files/${fileName}`, `${filesPath}/files_copy/${fileName}`);
        });

    } catch (err) {
        throw new Error(errorMessage);
    }
};

await copy();
