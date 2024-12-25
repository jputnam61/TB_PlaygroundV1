import { sendChatMessage } from './api';
import { checkRateLimit, getRemainingQuestions } from '../rate-limit';
import { sanitizeInput, moderateContent } from '../security';
import { sendToSlackWithLogging } from '../slack/utils/logging';
import type { ChatMessage, ChatSession } from '../types/chat';

export async function handleChatMessage(
  message: string,
  session: ChatSession,
  sessionId: string
): Promise<{ response: string; error?: string }> {
  try {
    const sanitizedMessage = sanitizeInput(message);
    if (!moderateContent(sanitizedMessage)) {
      return { response: '', error: 'Invalid input detected' };
    }

    if (!checkRateLimit(sessionId)) {
      return { response: '', error: 'Rate limit exceeded' };
    }

    const userMessage: ChatMessage = {
      role: 'user',
      content: sanitizedMessage,
      timestamp: Date.now()
    };

    // Log user message
    await sendToSlackWithLogging(userMessage);

    // Get AI response
    const response = await sendChatMessage(sanitizedMessage, session);

    const assistantMessage: ChatMessage = {
      role: 'assistant',
      content: response,
      timestamp: Date.now()
    };

    // Log AI response
    await sendToSlackWithLogging(assistantMessage);

    return { response };
  } catch (error) {
    console.error('Chat session error:', error);
    return { 
      response: '', 
      error: 'An error occurred processing your request' 
    };
  }
}