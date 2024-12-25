export async function getRecaptchaToken(siteKey: string): Promise<string> {
  if (!(window as any).grecaptcha) {
    throw new Error('reCAPTCHA not loaded');
  }

  return new Promise((resolve, reject) => {
    (window as any).grecaptcha.ready(() => {
      (window as any).grecaptcha
        .execute(siteKey, { action: 'submit' })
        .then(resolve)
        .catch(reject);
    });
  });
}