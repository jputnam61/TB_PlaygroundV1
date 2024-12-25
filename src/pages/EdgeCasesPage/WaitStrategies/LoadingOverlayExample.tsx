import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export function LoadingOverlayExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Loading Overlay Example</h4>
      <Button
        onClick={handleLoad}
        disabled={isLoading}
        data-testid="trigger-overlay"
      >
        Show Loading Overlay
      </Button>

      {isLoading && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          data-testid="loading-overlay"
        >
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-medium mb-2">Example Wait Strategy</h4>
        <pre className="text-sm overflow-x-auto">
{`// Wait for loading overlay
await page.click('[data-testid="trigger-overlay"]');
await expect(page.getByTestId('loading-overlay'))
  .toBeVisible();
await expect(page.getByTestId('loading-overlay'))
  .not.toBeVisible();`}
        </pre>
      </div>
    </div>
  );
}