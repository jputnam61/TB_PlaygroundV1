import { Youtube, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LessonPlanButton } from './LessonPlanButton';
import { SearchDialog } from './SearchDialog';
import { useState } from 'react';
import { AskTechBeatDialog } from './AskTechBeat/AskTechBeatDialog';
import { AskTechBeatTrigger } from './AskTechBeat/AskTechBeatTrigger';

interface BrandHeaderProps {
  onNavigate: (path: string) => void;
}

export function BrandHeader({ onNavigate }: BrandHeaderProps) {
  const [askTechBeatOpen, setAskTechBeatOpen] = useState(false);

  const handleLessonPlanClick = () => {
    onNavigate('lesson-plan');
  };

  return (
    <div className="header-container sticky top-0">
      <div className="flex flex-col gap-4 px-6 py-4">
        {/* Top row with logo and buttons */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <img 
              src="/techbeat-logo.png" 
              alt="TechBeat Daily Logo" 
              className="w-8 h-8"
              data-testid="brand-logo"
            />
            <span className="text-lg font-semibold text-primary">TechBeat Training</span>
          </div>
          
          <div className="flex items-center gap-2">
            <LessonPlanButton onClick={handleLessonPlanClick} />
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              asChild
            >
              <a
                href="https://www.youtube.com/@techbeatdaily"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
                <span className="hidden md:inline">Watch Tutorials</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Search and Ask TechBeat row */}
        <div className="flex justify-center items-center gap-2">
          <SearchDialog />
          <AskTechBeatTrigger onClick={() => setAskTechBeatOpen(true)} />
          <AskTechBeatDialog 
            open={askTechBeatOpen} 
            onOpenChange={setAskTechBeatOpen} 
          />
        </div>
      </div>
    </div>
  );
}