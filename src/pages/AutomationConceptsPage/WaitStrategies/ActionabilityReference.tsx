import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ActionabilityReference() {
  return (
    <div className="mb-8 p-4 bg-muted/50 rounded-lg border border-border/30">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary">Playwright Actionability Checks</h3>
        <Button variant="ghost" size="sm" asChild>
          <a
            href="https://playwright.dev/docs/actionability"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            View Docs
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Playwright auto-waits for elements to be actionable before performing actions. 
        Elements are considered actionable when they are:
      </p>
      <ul className="mt-2 space-y-1 text-sm list-disc list-inside text-muted-foreground">
        <li>Visible</li>
        <li>Stable (not moving)</li>
        <li>Enabled</li>
        <li>Receiving Events</li>
      </ul>
    </div>
  );
}