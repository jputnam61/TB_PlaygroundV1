import { useState, useEffect, useRef } from 'react';
import { Bot, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useChatSession } from './hooks/useChatSession';
import { ChatMessageList } from './ChatMessageList';
import { ChatInput } from './ChatInput';

interface AskTechBeatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AskTechBeatDialog({ open, onOpenChange }: AskTechBeatDialogProps) {
  const {
    session,
    isLoading,
    error,
    remainingQuestions,
    handleSubmit,
  } = useChatSession();

  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset state when dialog closes
  useEffect(() => {
    if (!open) {
      session.reset();
    }
  }, [open]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      requestAnimationFrame(() => {
        scrollElement.scrollTo({
          top: scrollElement.scrollHeight,
          behavior: 'smooth'
        });
      });
    }
  }, [session.messages, isLoading]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col gap-0 p-0 outline-none sm:max-w-[800px] h-[600px] max-h-[80vh]">
        <DialogHeader className="px-6 py-4 border-b bg-card">
          <DialogTitle>Ask TechBeat AI</DialogTitle>
          <DialogDescription>
            Get instant answers about UI automation testing ({remainingQuestions} questions remaining)
          </DialogDescription>
        </DialogHeader>

        <div 
          ref={scrollRef}
          className="flex-1 p-6 overflow-y-auto scroll-smooth"
        >
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <ChatMessageList 
            messages={session.messages} 
            isLoading={isLoading}
          />
        </div>

        <ChatInput 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          disabled={remainingQuestions === 0}
        />
      </DialogContent>
    </Dialog>
  );
}