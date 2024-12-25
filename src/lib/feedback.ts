import type { z } from 'zod';

export async function sendFeedback(values: any) {
  // Get reCAPTCHA token
  const token = await new Promise<string>((resolve, reject) => {
    if (!(window as any).grecaptcha) {
      reject(new Error('reCAPTCHA not loaded'));
      return;
    }

    (window as any).grecaptcha.ready(() => {
      (window as any).grecaptcha
        .execute('6Ld_1JsqAAAAAD2Dla-bYqN4Ca7YWgfgWmmPZ-j2', { action: 'submit' })
        .then(resolve)
        .catch(reject);
    });
  });

  const response = await fetch('/.netlify/functions/send-feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...values, token }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send feedback');
  }

  return data;
}