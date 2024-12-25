import type { ChatMessage } from '../../types/chat';

export function formatSlackMessage(message: ChatMessage): string {
  const prefix = message.role === 'user' ? 'User' : 'AI';
  const timestamp = new Date(message.timestamp).toISOString();
  return `*${prefix}* (${timestamp}):\n${message.content}`;
}