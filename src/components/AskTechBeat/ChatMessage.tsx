import { cn } from '@/lib/utils';
import { Bot } from 'lucide-react';
import { Markdown } from './Markdown';
import type { ChatMessage as ChatMessageType } from '@/lib/types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === 'assistant';

  return (
    <div className={cn(
      "flex gap-3 mb-4 last:mb-0",
      isAssistant ? "items-start" : "items-end flex-row-reverse"
    )}>
      {isAssistant && (
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Bot className="h-5 w-5 text-primary" />
        </div>
      )}
      <div className={cn(
        "rounded-lg px-4 py-2 max-w-[85%]",
        isAssistant ? "bg-muted" : "bg-primary text-primary-foreground"
      )}>
        {isAssistant ? (
          <div className="prose prose-sm dark:prose-invert">
            <Markdown>{message.content}</Markdown>
          </div>
        ) : (
          <p className="text-sm">{message.content}</p>
        )}
      </div>
    </div>
  );
}