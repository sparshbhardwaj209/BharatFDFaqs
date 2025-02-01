const { default: translate } = require('google-translate-open-api');
const redisClient = require('./redisClient');
const util = require('util');

const CACHE_EXPIRATION = 3600; 

async function translateText(text, targetLang, faqId) {
  const cacheKey = `faq:${faqId}:lang:${targetLang}`;
  
  // Try to get from Redis
  let cached = await redisClient.get(cacheKey);
  if (cached) {
    return cached;
  }
  try {
    // Calling Google Translate API
    const result = await translate(text, {
      tld: "com",
      to: targetLang,
    });

    const translatedText = result.data[0];

    // Caching the translation
    await redisClient.setEx(cacheKey, CACHE_EXPIRATION, translatedText);
    return translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    // Fallback: returning original text
    return text;
  }
}

module.exports = { translateText };
