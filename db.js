const mongoose = require("mongoose");

// Connecting to MongoDB
async function connectDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/faqdb", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        mongoose.connection.on(
          "error",
          console.error.bind(console, "MongoDB connection error:")
        );
    }catch(err){
        console.log("Database connection error: ", err);
    }
}

module.exports = connectDB;