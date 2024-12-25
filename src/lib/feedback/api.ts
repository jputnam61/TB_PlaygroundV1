import type { FeedbackFormData } from './types';

export async function submitFeedback(data: FeedbackFormData & { token: string }) {
  const response = await fetch('/.netlify/functions/send-feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Network error' }));
    throw new Error(errorData.error || 'Failed to send feedback');
  }

  return response.json();
}