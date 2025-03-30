import { Translate } from '@google-cloud/translate/build/src/v2';

const translate = new Translate({
  key: process.env.GOOGLE_CLOUD_API_KEY
});

export interface TranslationRequest {
  text: string;
  targetLanguage: string;
  sourceLanguage?: string;
}

export interface TranslationResponse {
  translatedText: string;
  detectedSourceLanguage?: string;
}

export class TranslationService {
  async translateText(request: TranslationRequest): Promise<TranslationResponse> {
    try {
      const [translation] = await translate.translate(request.text, {
        from: request.sourceLanguage,
        to: request.targetLanguage
      });

      const [detection] = await translate.detect(request.text);

      return {
        translatedText: translation as string,
        detectedSourceLanguage: detection.language
      };
    } catch (error) {
      console.error('Translation error:', error);
      throw new Error('Failed to translate text');
    }
  }

  async getSupportedLanguages(): Promise<string[]> {
    try {
      const [languages] = await translate.getLanguages();
      return languages.map(lang => lang.code);
    } catch (error) {
      console.error('Error fetching supported languages:', error);
      throw new Error('Failed to fetch supported languages');
    }
  }
} 