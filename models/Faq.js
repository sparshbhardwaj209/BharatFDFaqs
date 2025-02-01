// models/FAQ.js
const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  question_hi: { type: String, default: "" },
  question_bn: { type: String, default: "" },
  answer_hi: { type: String, default: "" },
  answer_bn: { type: String, default: "" },
});

const FAQ = mongoose.model("FAQ", FAQSchema);

module.exports = FAQ;
