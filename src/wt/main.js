import os from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const numOfCpus = os.cpus().length;
const pathToWorker = `${__dirname}/worker.js`;

function runWorker(index) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker, {
            workerData: index,
        });
        worker.on('message', (message) => {
            resolve(message);
        });
        worker.on('error', () => {
            reject({ status: 'error', data: null });
        });
    });
}

const performCalculations = async () => {
    const promises = [];
    for(let i = 0; i < numOfCpus; i++) {
        promises.push(runWorker(i + 10));
    }

    const result = await Promise.all(promises);
    console.log(result);
};

await performCalculations();