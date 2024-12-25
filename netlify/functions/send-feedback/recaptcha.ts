import type { RecaptchaResponse } from '../../src/lib/feedback/types';

export async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    
    const data: RecaptchaResponse = await response.json();
    
    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data.error_codes);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}