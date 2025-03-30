import { Request, Response } from 'express';
import { TranslationService, TranslationRequest } from '../services/translationService';

const translationService = new TranslationService();

export class TranslationController {
  translateText = async (req: Request, res: Response) => {
    try {
      const { text, targetLanguage, sourceLanguage } = req.body as TranslationRequest;

      if (!text || !targetLanguage) {
        return res.status(400).json({ error: 'Text and target language are required' });
      }

      const result = await translationService.translateText({
        text,
        targetLanguage,
        sourceLanguage
      });

      res.json(result);
    } catch (error) {
      console.error('Translation controller error:', error);
      res.status(500).json({ error: 'Failed to translate text' });
    }
  }

  getSupportedLanguages = async (req: Request, res: Response) => {
    try {
      const languages = await translationService.getSupportedLanguages();
      res.json({ languages });
    } catch (error) {
      console.error('Get languages controller error:', error);
      res.status(500).json({ error: 'Failed to fetch supported languages' });
    }
  }
} 