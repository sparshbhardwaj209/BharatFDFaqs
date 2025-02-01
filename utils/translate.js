const translate = require("google-translate-api-x");
const redisClient = require("../redisClient");

const CACHE_EXPIRATION = 3600;

async function translateText(text, targetLang, faqId) {
  const cacheKey = `faq:${faqId}:lang:${targetLang}`;

  // Try to get from Redis
  let cached = await redisClient.get(cacheKey);
  if (cached) {
    console.log("Sending from the cache", cached);
    return cached;
  }
  try {
    // Calling Google Translate API
    const result = await translate(text, {
      to: targetLang,
    });

    if (!result.text) throw new Error("Translation result is empty");

    await redisClient.setEx(cacheKey, CACHE_EXPIRATION, result.text);
    return result.text;
  } catch (error) {
    console.error("Translation error:", error);
    // Fallback: returning original text
    return text;
  }
}

module.exports = { translateText };
