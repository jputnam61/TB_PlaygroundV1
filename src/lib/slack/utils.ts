import type { ChatMessage } from '../types/chat';

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

export function formatSlackMessage(message: ChatMessage): string {
  const prefix = message.role === 'user' ? 'User' : 'AI';
  const timestamp = new Date(message.timestamp).toISOString();
  return `*${prefix}* (${timestamp}):\n${message.content}`;
}

export async function sendToSlackWithLogging(message: ChatMessage): Promise<boolean> {
  const result = await sendToSlack(message);
  if (!result.ok) {
    console.warn(`Failed to send message to Slack: ${result.error}`);
    return false;
  }
  return true;
}