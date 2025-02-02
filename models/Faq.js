// models/FAQ.js
import { Schema, model } from "mongoose";

const FAQSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  question_hi: { type: String, default: "" },
  question_bn: { type: String, default: "" },
  answer_hi: { type: String, default: "" },
  answer_bn: { type: String, default: "" },
});

const FAQ = model("FAQ", FAQSchema);

export default FAQ;
