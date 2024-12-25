import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export function ToastExample() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Toast Notification Example</h4>
      <Button
        onClick={handleShowToast}
        disabled={showToast}
        data-testid="trigger-toast"
      >
        Show Success Toast
      </Button>

      {showToast && (
        <div
          className="fixed top-4 right-4 bg-card p-4 rounded-lg shadow-lg z-50 border border-border/30 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300"
          data-testid="success-toast"
        >
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span className="text-sm font-medium">Success!</span>
        </div>
      )}

      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-medium mb-2">Example Wait Strategy</h4>
        <pre className="text-sm overflow-x-auto">
{`// Wait for toast notification
await page.click('[data-testid="trigger-toast"]');
await expect(page.getByTestId('success-toast'))
  .toBeVisible();
await expect(page.getByTestId('success-toast'))
  .not.toBeVisible();`}
        </pre>
      </div>
    </div>
  );
}