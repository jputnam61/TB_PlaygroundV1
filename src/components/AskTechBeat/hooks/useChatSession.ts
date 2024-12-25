import { useState } from 'react';
import { handleChatMessage } from '@/lib/chat/session';
import { generateSessionId } from '@/lib/security';
import { getRemainingQuestions } from '@/lib/rate-limit';
import type { ChatMessage } from '@/lib/types/chat';

export function useChatSession() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const [remainingQuestions, setRemainingQuestions] = useState(30);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (message: string) => {
    setError(null);
    setIsLoading(true);

    try {
      const { response, error } = await handleChatMessage(
        message,
        { messages },
        sessionId
      );

      if (error) {
        setError(error);
        return;
      }

      // Update messages
      const userMessage: ChatMessage = {
        role: 'user',
        content: message,
        timestamp: Date.now()
      };

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, userMessage, assistantMessage]);
      setRemainingQuestions(getRemainingQuestions(sessionId));
    } catch (error) {
      setError('Sorry, I encountered an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    session: {
      messages,
      reset: () => setMessages([])
    },
    isLoading,
    error,
    remainingQuestions,
    handleSubmit
  };
}