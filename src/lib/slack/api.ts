import { withTimeout } from '../async';
import { formatSlackMessage } from './utils/formatting';
import type { ChatMessage } from '../types/chat';
import type { SlackResponse } from './types';

export async function sendSlackMessage(message: ChatMessage): Promise<SlackResponse> {
  try {
    const formattedMessage = formatSlackMessage(message);
    
    const response = await withTimeout(
      fetch('/.netlify/functions/slack-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: formattedMessage })
      })
    );

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return { ok: true };
  } catch (error) {
    console.error('Slack API error:', error);
    return { 
      ok: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}