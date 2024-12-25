import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Loader2 } from 'lucide-react';

export function DynamicDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Loading States</h3>
        <div className="flex gap-2">
          <Button
            onClick={handleLoading}
            disabled={isLoading}
            id="button-loading"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Loading...' : 'Trigger Loading'}
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Progress</h3>
        <Progress value={progress} className="w-full" id="progress-bar" />
        <Button
          onClick={handleProgress}
          disabled={progress > 0 && progress < 100}
          id="button-progress"
        >
          Start Progress
        </Button>
      </div>
    </div>
  );
}