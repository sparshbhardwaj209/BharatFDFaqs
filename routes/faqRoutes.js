// routes/faqRoutes.js
const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');

router.get('/faqs', faqController.getFAQs);

module.exports = router;


// // routes/faqRoutes.js
// const express = require('express');
// const router = express.Router();

// router.get("/",async(req,res)=>{
//     try{
//         let lang=req.query.lang||"en"
//         let cacheKey=`faqs:${lang}`
        
//         // If the data is cached, serve it from the cache
//         let cachedFAQs=await redisClient.get(cacheKey)
//         if(cachedFAQs){
//             console.log("Serving from cache")
//             return res.json(JSON.parse(cachedFAQs))
//         }
//         let faqs=await FAQ.find()
//         faqs=faqs.map(faq=>({
//             question:faq.getTranslation(lang),
//             answer:faq.answer
//         }))
//         await redisClient.setEx(cacheKey,3600,JSON.stringify(faqs))
//         res.json(faqs)
//     }catch(err){
//         res.status(500).json({error:err.message})
//     }
// })

// module.exports = router;
