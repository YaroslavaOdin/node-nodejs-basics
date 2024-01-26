import { fileURLToPath } from 'url';
import { dirname } from 'path';
import child_process from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToScript = `${__dirname}/files/script.js`;

const spawnChildProcess = async (args) => {
    const child = child_process.fork(pathToScript, args, { silent: true });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
