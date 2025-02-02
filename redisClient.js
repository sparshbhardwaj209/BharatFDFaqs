import { createClient } from 'redis';

// Setting up Redis client
const redisClient = createClient({ url: 'redis://127.0.0.1:6379' });
redisClient.connect().catch(console.error);


export default redisClient;