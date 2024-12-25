import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LessonPlanButtonProps {
  onClick: () => void;
}

export function LessonPlanButton({ onClick }: LessonPlanButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="gap-2"
      onClick={handleClick}
    >
      <BookOpen className="h-5 w-5" />
      <span className="hidden md:inline">Lesson Plan</span>
    </Button>
  );
}