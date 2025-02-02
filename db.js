import { connect } from "mongoose";

// Connecting to MongoDB
async function connectDB() {
  try {
    await connect("mongodb://localhost:27017/faqdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log("Database connection error: ", err);
  }
}

export default connectDB;
