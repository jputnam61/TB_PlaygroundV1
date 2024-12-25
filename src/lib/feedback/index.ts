import { getRecaptchaToken } from './recaptcha';
import { submitFeedback } from './api';
import type { FeedbackFormData } from './types';

const RECAPTCHA_SITE_KEY = '6Ld_1JsqAAAAAD2Dla-bYqN4Ca7YWgfgWmmPZ-j2';

export async function sendFeedback(values: FeedbackFormData) {
  try {
    // Get reCAPTCHA token
    const token = await getRecaptchaToken(RECAPTCHA_SITE_KEY);
    
    // Submit feedback with token
    return await submitFeedback({ ...values, token });
  } catch (error) {
    console.error('Error sending feedback:', error);
    throw error instanceof Error 
      ? error 
      : new Error('Failed to send feedback');
  }
}

export * from './types';