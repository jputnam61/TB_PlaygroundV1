import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function WaitPatterns() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wait Patterns & Best Practices</CardTitle>
        <CardDescription>
          Understanding different types of waits and when to use them
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">Types of Waits</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2 p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium">Implicit Wait</h4>
                <p className="text-sm text-muted-foreground">
                  Global timeout for finding elements. Use sparingly as it affects all operations.
                </p>
                <pre className="text-xs bg-muted p-2 rounded">
{`// Not recommended
page.setDefaultTimeout(5000);`}
                </pre>
              </div>

              <div className="space-y-2 p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium">Explicit Wait</h4>
                <p className="text-sm text-muted-foreground">
                  Waits for a specific condition. More precise and recommended for most cases.
                </p>
                <pre className="text-xs bg-muted p-2 rounded">
{`// Recommended
await expect(page.getByTestId('element'))
  .toBeVisible();`}
                </pre>
              </div>

              <div className="space-y-2 p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium">Custom Wait</h4>
                <p className="text-sm text-muted-foreground">
                  Define custom conditions for complex scenarios.
                </p>
                <pre className="text-xs bg-muted p-2 rounded">
{`await page.waitForFunction(() => {
  return condition === 'met';
});`}
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">Best Practices</h3>
            <div className="grid gap-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">✓ Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Use explicit waits for specific conditions</li>
                  <li>Wait for actionability before interactions</li>
                  <li>Handle timeouts gracefully</li>
                  <li>Use appropriate timeout durations</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Use fixed sleeps/delays</li>
                  <li>Rely on implicit waits</li>
                  <li>Mix implicit and explicit waits</li>
                  <li>Use excessive timeout values</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}