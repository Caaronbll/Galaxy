const NodeCache = require('node-cache'); // Example: using the 'node-cache' library for in-memory caching
const cacheConfig = require('./cacheconfig');

// Initialize a new cache instance
const cache = new NodeCache({ stdTTL: cacheConfig.ttl, maxKeys: cacheConfig.maxSize });

// Function to cache data
function cacheData(key, data) {
    cache.set(key, data);
}

// Function to retrieve cached data
function getCachedData(key) {
    return cache.get(key);
}

module.exports = {
    cacheData,
    getCachedData,
};
