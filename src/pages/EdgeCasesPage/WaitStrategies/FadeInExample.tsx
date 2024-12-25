import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export function FadeInExample() {
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
      <h4 className="font-medium">Fade In Example</h4>
      <div className="space-x-4">
        <Button
          onClick={handleLoad}
          disabled={isLoading}
          data-testid="trigger-fade"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Load Content
        </Button>

        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          data-testid="fade-content"
        >
          {isVisible && (
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">Content has faded in!</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-medium mb-2">Example Wait Strategy</h4>
        <pre className="text-sm overflow-x-auto">
{`// Wait for fade animation
await page.click('[data-testid="trigger-fade"]');
await expect(page.getByTestId('fade-content'))
  .toHaveClass(/opacity-100/);`}
        </pre>
      </div>
    </div>
  );
}