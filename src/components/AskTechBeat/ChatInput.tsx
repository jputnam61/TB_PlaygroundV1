import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  onSubmit: (message: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

export function ChatInput({ onSubmit, isLoading, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    
    onSubmit(message);
    setMessage('');
  };

  return (
    <div className="p-4 border-t bg-card">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your question..."
          disabled={isLoading || disabled}
          maxLength={500}
          id="ask-techbeat-input"
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={isLoading || disabled}
          id="ask-techbeat-submit"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Ask
        </Button>
      </form>
    </div>
  );
}