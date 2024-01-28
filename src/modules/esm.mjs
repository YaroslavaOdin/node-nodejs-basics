import path from 'path';
import http from "http";
import { release, version } from 'os';
import { fileURLToPath } from 'url';

import fileA from './files/a.json' with { type: "json" };
import fileB from './files/b.json' with { type: "json" };
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = fileA;
} else {
    unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${ fileURLToPath(import.meta.url) }`);
console.log(`Path to current directory is ${ import.meta.dirname }`);

const myServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };

