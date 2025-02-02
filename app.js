import connectDB from './db.js';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import faqRoutes from './routes/faqRoutes.js';
import adminRouter from './admin/admin.js';

await connectDB();

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// API Routes
app.use('/api', faqRoutes);

// admin routes
app.use('/admin', adminRouter);

// Starting the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
