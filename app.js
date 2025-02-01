const connectDB = require('./db');
const express = require('express');
const cors = require('cors');
const faqRoutes = require('./routes/faqRoutes');
connectDB();

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
