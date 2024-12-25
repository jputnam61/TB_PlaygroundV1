import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export function SlideInExample() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Slide In Example</h4>
      <div className="space-y-4">
        <Button
          onClick={handleLoad}
          disabled={isLoading}
          data-testid="trigger-slide"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Load Content
        </Button>

        <div
          className={`transform transition-all duration-500 ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0'
          }`}
          data-testid="slide-content"
        >
          <Button variant="secondary">
            I slide in from the side!
          </Button>
        </div>
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-medium mb-2">Example Wait Strategy</h4>
        <pre className="text-sm overflow-x-auto">
{`// Wait for slide animation
await page.click('[data-testid="trigger-slide"]');
await expect(page.getByTestId('slide-content'))
  .toHaveClass(/translate-x-0/);`}
        </pre>
      </div>
    </div>
  );
}