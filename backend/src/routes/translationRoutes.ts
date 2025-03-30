import { Router } from 'express';
import { TranslationController } from '../controllers/translationController';

const router = Router();
const translationController = new TranslationController();

// Translate text
router.post('/translate', translationController.translateText.bind(translationController));

// Get supported languages
router.get('/languages', translationController.getSupportedLanguages.bind(translationController));

export default router; 