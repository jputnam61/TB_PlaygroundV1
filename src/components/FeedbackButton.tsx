import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeedbackDialog } from './FeedbackDialog';
import { useState } from 'react';

export function FeedbackButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        variant="ghost" 
        size="sm" 
        className="gap-2"
        onClick={() => setOpen(true)}
      >
        <Mail className="h-5 w-5" />
        <span className="hidden md:inline">Feedback</span>
      </Button>
      <FeedbackDialog open={open} onOpenChange={setOpen} />
    </>
  );
}