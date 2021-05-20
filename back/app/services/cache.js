const redis = require('redis');

//For production
const client  = redis.createClient(process.env.REDIS_URL, {
    tls: {
        rejectUnauthorized: false
    }
});

//For development
//const client  = redis.createClient();

const PREFIX = 'localet:';
const PEREMPTION = 1800; // 60*30 = 30min

const { promisify } = require("util");
const asyncClient = {
    get: promisify(client.get).bind(client),
    del: promisify(client.del).bind(client),
    exists: promisify(client.exists).bind(client),
    setex: promisify(client.setex).bind(client)
};

const keysIndex = [];

const flush = async (req, res, next) => {

    //we remove everything from the cache
    for (const key of keysIndex) {
        await asyncClient.del(key);
    }

    keysIndex.length = 0;

    next();
};

//duration default value is PEREMPTION
const cache = (duration = PEREMPTION) => async (req, res, next) => {

    const urlKey = PREFIX + req.url;

    // step  0 : verify if it's in the cache memory with EXISTS localet:/curioset/1
    if (await asyncClient.exists(urlKey)) {
        // we retrieve the content of the cache
        const cachedValue = await asyncClient.get(urlKey);

        // cacheValue is a JSON string so we parse it 
        const value = JSON.parse(cachedValue);

        res.json(value);
    } else { //We put it in cache
        
        const originalResDotJson = res.json.bind(res);

        res.json = async (responseData) => {
            const jsonData = JSON.stringify(responseData);

            await asyncClient.setex(urlKey, duration, jsonData);

            keysIndex.push(urlKey);

            originalResDotJson(responseData);
        };

        next();
    }
};

module.exports = {
    flush,
    cache
}