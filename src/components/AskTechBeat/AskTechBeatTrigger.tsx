import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AskTechBeatTriggerProps {
  onClick: () => void;
}

export function AskTechBeatTrigger({ onClick }: AskTechBeatTriggerProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2"
      onClick={onClick}
    >
      <Bot className="h-4 w-4" />
      <span className="hidden md:inline">Ask TechBeat AI</span>
    </Button>
  );
}