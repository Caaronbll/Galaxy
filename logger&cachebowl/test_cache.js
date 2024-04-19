// test_cache.js

const NodeCache = require('node-cache');
const logger = require('./logger');
const myCache = new NodeCache();

// Set a key-value pair with a TTL of 10 seconds
myCache.set('myKey', 'The RIZZ', 10);

// Retrieve the value of 'myKey' from the cache
const cachedValue = myCache.get('myKey');
console.log('Cached value:', cachedValue);

// Wait for 12 seconds to allow the TTL to expire
setTimeout(() => {
    // Try to retrieve the value again
    const expiredValue = myCache.get('myKey');
    console.log('RIZZ LEVEL', expiredValue);
}, 120);
