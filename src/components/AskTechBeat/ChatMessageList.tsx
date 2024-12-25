import { Bot } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import type { ChatMessage as ChatMessageType } from '@/lib/types/chat';

interface ChatMessageListProps {
  messages: ChatMessageType[];
  isLoading: boolean;
}

export function ChatMessageList({ messages, isLoading }: ChatMessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <Bot className="h-8 w-8 mr-2" />
        <span>Ask me anything about UI automation testing!</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
}