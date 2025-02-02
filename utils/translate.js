import translate from "google-translate-api-x";
// import { get, setEx } from "../redisClient.js";
import redisClient from "../redisClient.js";

const CACHE_EXPIRATION = 3600;

async function translateText(text, targetLang, faqId) {
  const cacheKey = `faq:${faqId}:lang:${targetLang}`;

  // Try to get from Redis
  let cached = await get(cacheKey);
  if (cached) {
    console.log(`Cache lookup: ${cacheKey} ->`, cached);
    return cached;
  }
  try {
    // Calling Google Translate API
    const result = await translate(text, {
      to: targetLang,
    });

    if (!result.text) throw new Error("Translation result is empty");

    await redisClient.setEx(cacheKey, CACHE_EXPIRATION, result.text);
    console.log(`Saved to Redis: ${cacheKey} -> ${result.text}`);
    return result.text;
  } catch (error) {
    console.error("Translation error:", error);
    // Fallback: returning original text
    return text;
  }
}

export default { translateText };
