import { Handler } from '@netlify/functions';
import { sendSlackMessage } from './utils';
import { corsHeaders } from './utils';
import type { WebhookRequest } from './types';

export const handler: Handler = async (event) => {
  const headers = { ...corsHeaders, 'Content-Type': 'application/json' };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  // Validate request method
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Validate request body
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Request body is required' })
      };
    }

    const { message } = JSON.parse(event.body) as WebhookRequest;
    
    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    // Send message to Slack
    const result = await sendSlackMessage(message);
    
    if (!result.ok) {
      throw new Error(result.error || 'Failed to send message to Slack');
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true })
    };
  } catch (error) {
    console.error('[Slack Webhook] Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Internal server error'
      })
    };
  }
};