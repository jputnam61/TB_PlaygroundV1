import { SLACK_CONFIG } from './config';
import type { SlackMessage, SlackWebhookResponse } from './types';

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

async function retryWithBackoff(fn: () => Promise<Response>, retries = SLACK_CONFIG.MAX_RETRIES): Promise<Response> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise(resolve => setTimeout(resolve, SLACK_CONFIG.RETRY_DELAY));
    return retryWithBackoff(fn, retries - 1);
  }
}

export async function sendSlackMessage(message: string): Promise<SlackWebhookResponse> {
  if (!SLACK_CONFIG.WEBHOOK_URL) {
    console.error('[Slack] Webhook URL not configured');
    return { ok: false, error: 'Webhook URL not configured' };
  }

  const payload: SlackMessage = { 
    text: message,
    mrkdwn: true
  };
  
  try {
    const response = await retryWithBackoff(async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), SLACK_CONFIG.TIMEOUT);

      try {
        const res = await fetch(SLACK_CONFIG.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        return res;
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    });

    // Slack returns 200 with empty body for success
    if (response.status === 200) {
      return { ok: true };
    }

    const errorText = await response.text();
    throw new Error(errorText || `Slack API error: ${response.status}`);
  } catch (error) {
    console.error('[Slack] Send error:', error);
    return { 
      ok: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}