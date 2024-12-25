import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function DialogExample() {
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowDialog(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Dialog Example</h4>
      <div className="space-y-4">
        <Button
          onClick={handleLoad}
          disabled={isLoading}
          data-testid="trigger-dialog"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Load Dialog
        </Button>

        <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Action</AlertDialogTitle>
              <AlertDialogDescription>
                This is a test dialog. Click OK to continue.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel data-testid="dialog-cancel">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction data-testid="dialog-ok">
                OK
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-medium mb-2">Example Wait Strategy</h4>
        <pre className="text-sm overflow-x-auto">
{`// Wait for and interact with dialog
await page.click('[data-testid="trigger-dialog"]');

// Wait for dialog to be visible
await expect(page.getByRole('alertdialog'))
  .toBeVisible();

// Click OK button
await page.getByTestId('dialog-ok').click();

// Verify dialog is closed
await expect(page.getByRole('alertdialog'))
  .not.toBeVisible();`}
        </pre>
      </div>
    </div>
  );
}