import { LandingContent } from './LandingContent';
import { AnimatedBackground } from './AnimatedBackground';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <LandingContent onGetStarted={onGetStarted} />
    </div>
  );
}