// test_cache.js

const NodeCache = require('node-cache');

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
}, 12000);
logger & (cachebowl / test_node_cache.js);

describe("NodeCache", () => {
  let cache;

  beforeEach(() => {
    cache = new NodeCache();
  });

  describe("set()", () => {
    it("should set a key-value pair in the cache", () => {
      cache.set("foo", "bar");
      expect(cache.get("foo")).toBe("bar");
    });

    it("should set a key-value pair with a TTL", () => {
      cache.set("foo", "bar", 10);
      expect(cache.getTtl("foo")).toBe(10);
    });
  });

  describe("get()", () => {
    it("should retrieve a cached value", () => {
      cache.set("foo", "bar");
      expect(cache.get("foo")).toBe("bar");
    });

    it("should return undefined for a non-existent key", () => {
      expect(cache.get("fakeKey")).toBeUndefined();
    });
  });

  describe("del()", () => {
    it("should delete a key from the cache", () => {
      cache.set("foo", "bar");
      cache.del("foo");
      expect(cache.get("foo")).toBeUndefined();
    });

    it("should delete multiple keys when passed an array", () => {
      cache.set("foo", "bar");
      cache.set("baz", "qux");
      cache.del(["foo", "baz"]);
      expect(cache.get("foo")).toBeUndefined();
      expect(cache.get("baz")).toBeUndefined();
    });
  });

  describe("flushAll()", () => {
    it("should clear the entire cache", () => {
      cache.set("foo", "bar");
      cache.set("baz", "qux");
      cache.flushAll();
      expect(cache.get("foo")).toBeUndefined();
      expect(cache.get("baz")).toBeUndefined();
    });
  });
});
