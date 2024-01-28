const parseEnv = () => {
    const envVar = process.env;
    for (let i = 0; i < Object.keys(envVar).length; i++) {
        if (Object.keys(envVar)[i].startsWith('RSS_')) { 
            console.log(`${Object.keys(envVar)[i]}=${Object.values(envVar)[i]};`);
        }
    }
};

parseEnv();