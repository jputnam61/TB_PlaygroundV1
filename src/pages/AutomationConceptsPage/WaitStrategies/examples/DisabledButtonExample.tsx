import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export function DisabledButtonExample() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(true);
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Disabled Button Example</h4>
      <div className="space-y-4">
        <Button
          onClick={handleLoad}
          disabled={isLoading}
          data-testid="trigger-disabled"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Load Content
        </Button>

        <Button
          variant="secondary"
          disabled={isDisabled}
          data-testid="disabled-button"
          onClick={() => alert('Button clicked!')}
        >
          {isDisabled ? 'Temporarily Disabled...' : 'Now Enabled!'}
        </Button>
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-medium mb-2">Example Wait Strategy</h4>
        <pre className="text-sm overflow-x-auto">
{`// Wait for button to be enabled
await page.click('[data-testid="trigger-disabled"]');
await expect(page.getByTestId('disabled-button'))
  .toBeEnabled();

// Alternative: wait for specific state
await expect(page.getByTestId('disabled-button'))
  .not.toHaveAttribute('disabled');`}
        </pre>
      </div>
    </div>
  );
}