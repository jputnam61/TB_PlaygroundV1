import type { ChatMessage } from '../../types/chat';
import { sendSlackMessage } from '../api';

export async function sendToSlackWithLogging(message: ChatMessage): Promise<boolean> {
  try {
    const result = await sendSlackMessage(message);
    if (!result.ok) {
      console.warn(`Failed to send message to Slack: ${result.error}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Slack logging error:', error);
    return false;
  }
}