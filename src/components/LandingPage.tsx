import { useNavigate } from '@/hooks/use-navigate';
import { useState } from 'react';
import { ArrowRight, Code2, TestTube2, Wrench, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const navigate = useNavigate();
  const [askTechBeatOpen, setAskTechBeatOpen] = useState(false);

  const handleGetStarted = () => {
    onGetStarted();
    navigate('basics');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <canvas
        className="absolute inset-0 -z-10"
        style={{ 
          filter: 'blur(80px)',
          opacity: 0.8
        }}
      />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-12">
              <img 
                src="/techbeat-logo.png" 
                alt="TechBeat Logo" 
                className="w-24 h-24"
              />
            </div>
            
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Master UI Automation
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mt-8">
                  Testing
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your interactive playground for learning modern test automation. Write better tests, faster.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div 
                onClick={() => {
                  onGetStarted();
                  navigate('basics');
                }}
                className="bg-card/40 backdrop-blur-sm p-6 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-card/50 transition-all cursor-pointer"
              >
                <Code2 className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Learn the Basics</h3>
                <p className="text-sm text-muted-foreground">
                  Start with fundamentals and best practices
                </p>
              </div>

              <div 
                onClick={() => {
                  onGetStarted();
                  navigate('components');
                }}
                className="bg-card/40 backdrop-blur-sm p-6 rounded-lg border border-border/40 hover:border-secondary/50 hover:bg-card/50 transition-all cursor-pointer"
              >
                <TestTube2 className="h-8 w-8 mb-4 text-secondary" />
                <h3 className="font-semibold mb-2">Practice Live</h3>
                <p className="text-sm text-muted-foreground">
                  Test real components with examples
                </p>
              </div>

              <div 
                onClick={() => {
                  onGetStarted();
                  navigate('playwright');
                }}
                className="bg-card/40 backdrop-blur-sm p-6 rounded-lg border border-border/40 hover:border-accent/50 hover:bg-card/50 transition-all cursor-pointer"
              >
                <Wrench className="h-8 w-8 mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Build Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Apply your skills with hands-on projects
                </p>
              </div>

              <div 
                onClick={() => {
                  onGetStarted();
                  // This will trigger the Ask TechBeat AI dialog in the main app
                  const appElement = document.querySelector('[data-app-navigation]');
                  if (appElement) {
                    (appElement as any).openAskTechBeat?.();
                  }
                }}
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
        </div>
      </div>
    </div>
  );
}