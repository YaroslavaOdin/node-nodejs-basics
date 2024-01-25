import { Transform } from 'stream';

const transform = async () => {
    const reverseTextTr = new Transform({
    transform(chunk, _, callback) {
            this.push(chunk.toString().split('').reverse().join('') + '\n');
            callback();
        }
    });

    process.stdin.pipe(reverseTextTr).pipe(process.stdout);
};

await transform();