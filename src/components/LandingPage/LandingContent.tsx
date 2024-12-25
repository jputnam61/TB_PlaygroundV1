import { ArrowRight, Code2, TestTube2, Wrench, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@/hooks/use-navigate';

interface LandingContentProps {
  onGetStarted: () => void;
}

export function LandingContent({ onGetStarted }: LandingContentProps) {
  const navigate = useNavigate();

  const handleAskTechBeat = () => {
    onGetStarted();
    // This will trigger the Ask TechBeat AI dialog in the main app
    const appElement = document.querySelector('[data-app-navigation]');
    if (appElement) {
      (appElement as any).openAskTechBeat?.();
    }
  };

  const handleGetStarted = () => {
    onGetStarted();
    navigate('basics');
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Rest of the content remains the same until the grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div 
          onClick={handleGetStarted}
          className="bg-card/40 backdrop-blur-sm p-6 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-card/50 transition-all cursor-pointer"
        >
          <Code2 className="h-8 w-8 mb-4 text-primary" />
          <h3 className="font-semibold mb-2">Learn the Basics</h3>
          <p className="text-sm text-muted-foreground">
            Start with fundamentals and best practices
          </p>
        </div>

        {/* Other grid items remain the same */}

        <div 
          onClick={handleAskTechBeat}
          className="bg-card/40 backdrop-blur-sm p-6 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-card/50 transition-all cursor-pointer"
        >
          <Bot className="h-8 w-8 mb-4 text-primary" />
          <h3 className="font-semibold mb-2">Ask TechBeat AI</h3>
          <p className="text-sm text-muted-foreground">
            Get instant answers to your questions
          </p>
        </div>
      </div>

      <Button 
        size="lg" 
        onClick={handleGetStarted}
        className="group relative bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
      >
        Get Started
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}