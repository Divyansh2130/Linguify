import { Router } from 'express';
import { TranslationController } from '../controllers/translationController';

const router = Router();
const translationController = new TranslationController();

// Translate text
router.post('/translate', translationController.translateText);

// Get supported languages
router.get('/languages', translationController.getSupportedLanguages);

export default router; 