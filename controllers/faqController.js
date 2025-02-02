import FAQ from '../models/Faq.js';
import { translateText } from '../utils/translate.js';

const getFAQs = async (req, res) => {
  const lang = req.query.lang || 'en';
  try {
    const faqs = await FAQ.find({});

    // Map each FAQ to its appropriate translation
    const translatedFaqs = await Promise.all(
      faqs.map(async (faq) => {
        if (lang === 'en') {
          return {
            question: faq.question,
            answer: faq.answer,
          };
        } else if (lang === 'hi') {
          let translatedQuestion = faq.question_hi;
          if (!translatedQuestion) {
            translatedQuestion = await translateText(faq.question, 'hi', `${faq._id}_question`);
            faq.question_hi = translatedQuestion;
            console.log("translated Ques hindi: " , translatedQuestion);
          }
          let translatedAnswer = faq.answer_hi;
          if (!translatedAnswer) {
            translatedAnswer = await translateText(faq.answer, 'hi', `${faq._id}_answer`);
            faq.answer_hi = translatedAnswer;
            console.log("translated answer hindi : ", translatedAnswer);
          }
            await faq.save();
          
          return {
            question: translatedQuestion,
            answer: translatedAnswer, 
          };
        } else if (lang === 'bn') {
          let translatedQuestion = faq.question_bn;
          if (!translatedQuestion) {
            translatedQuestion = await translateText(faq.question, 'bn', `${faq._id}_question`);
            faq.question_bn = translatedQuestion;
            console.log("translated Ques bn: " , translatedQuestion);
          }
          let translatedAnswer = faq.answer_bn;
          if (!translatedAnswer) {
            translatedAnswer = await translateText(faq.answer, 'bn', `${faq._id}_answer`);
            faq.answer_bn = translatedAnswer;
            console.log("translated answer hindi : ", translatedAnswer);
          }
          await faq.save();
        
          return {
            question: translatedQuestion,
            answer: translatedAnswer,
          };
        } else {
          return {
            question: faq.question,
            answer: faq.answer,
          };
        }
      })
    );
    res.json(translatedFaqs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export default { getFAQs };