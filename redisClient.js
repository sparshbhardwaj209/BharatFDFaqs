const redis = require('redis');

// Setting up Redis client
const redisClient = redis.createClient({ url: 'redis://127.0.0.1:6379' });
redisClient.connect().catch(console.error);


module.exports = redisClient;