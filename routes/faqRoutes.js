// routes/faqRoutes.js
import { Router } from 'express';
const router = Router();
import faqController from '../controllers/faqController.js';

router.get('/faqs', faqController.getFAQs);

export default router;
