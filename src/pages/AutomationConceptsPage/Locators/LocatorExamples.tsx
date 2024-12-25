import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LocatorExamples() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Examples</CardTitle>
        <CardDescription>
          Practice with different locator strategies using these examples
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8">
          {/* Form Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Form Elements</h3>
            <div className="grid gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter username"
                    data-testid="username-input"
                  />
                </div>
                <Button data-testid="submit-button">Submit</Button>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Locator Examples</h4>
                <pre className="text-sm overflow-x-auto">
{`// By label (Recommended)
await page.getByLabel('Username').fill('test');

// By placeholder
await page.getByPlaceholder('Enter username')
  .fill('test');

// By test ID
await page.getByTestId('username-input')
  .fill('test');

// By role
await page.getByRole('textbox', {
  name: 'Username'
}).fill('test');`}
                </pre>
              </div>
            </div>
          </div>

          {/* Button Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Interactive Elements</h3>
            <div className="grid gap-6">
              <div className="space-y-4">
                <Button variant="secondary" aria-label="Save changes">
                  Save
                </Button>
                <Button variant="destructive" data-testid="delete-button">
                  Delete
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Locator Examples</h4>
                <pre className="text-sm overflow-x-auto">
{`// By role and name (Recommended)
await page.getByRole('button', {
  name: 'Save'
}).click();

// By text
await page.getByText('Save').click();

// By ARIA label
await page.getByLabel('Save changes').click();

// By test ID
await page.getByTestId('delete-button').click();`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}