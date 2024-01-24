const parseArgs = () => {
    const argv = process.argv;
    for (let i = 0; i < argv.length; i++) {
        if (argv[i].startsWith('--')) { 
            console.log(`${argv[i].slice(2)} is ${argv[i + 1]},`);
        }
    }
};

parseArgs();