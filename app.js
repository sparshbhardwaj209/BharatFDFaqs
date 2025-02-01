// app.js
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const faqRoutes = require('./routes/faqRoutes');

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/faqdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', faqRoutes);

// Starting the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
