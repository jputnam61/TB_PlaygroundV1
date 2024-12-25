import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function LocatorReference() {
  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Playwright Locators</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://playwright.dev/docs/locators"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View Docs
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <CardDescription>
          Locators are the primary way to find and interact with elements in Playwright
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">Built-in Locators</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 p-4 rounded-lg bg-card">
                <h4 className="font-medium">User-Facing Locators</h4>
                <div className="space-y-2">
                  <pre className="text-sm bg-muted p-2 rounded">
{`// By text content
page.getByText('Submit')

// By role
page.getByRole('button', { name: 'Submit' })

// By label
page.getByLabel('Username')

// By placeholder
page.getByPlaceholder('Enter email')`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2 p-4 rounded-lg bg-card">
                <h4 className="font-medium">Test Automation Locators</h4>
                <div className="space-y-2">
                  <pre className="text-sm bg-muted p-2 rounded">
{`// By test ID (Recommended)
page.getByTestId('submit-button')

// By data attribute
page.locator('[data-test="submit"]')

// Combining locators
page.getByRole('button')
  .filter({ hasText: 'Submit' })`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}