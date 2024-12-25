import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AccessibilityDemo() {
  return (
    <div className="space-y-8">
      <div
        role="tabpanel"
        tabIndex={0}
        className={cn(
          'rounded-lg border p-4 focus:outline-none focus:ring-2',
          'focus:ring-ring focus:ring-offset-2'
        )}
        id="panel-keyboard-nav"
      >
        <h3 className="text-sm font-medium">Keyboard Navigation</h3>
        <p className="text-sm text-muted-foreground">
          This panel is keyboard focusable. Try using Tab to navigate.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">ARIA Labels</h3>
        <div className="flex items-center space-x-2">
          <Button 
            aria-label="Close dialog"
            id="button-aria-close"
          >
            Button with ARIA Label
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="More information"
            id="button-aria-info"
          >
            <Info className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}