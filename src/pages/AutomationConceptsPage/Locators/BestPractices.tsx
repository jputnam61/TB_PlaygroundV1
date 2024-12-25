import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function BestPractices() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Locator Best Practices</CardTitle>
        <CardDescription>
          Guidelines for choosing and implementing reliable locators
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Recommended Approaches</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">✓ Preferred Locators</h4>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>Role-based locators (ARIA roles)</li>
                  <li>Label text</li>
                  <li>Test IDs</li>
                  <li>Text content (when stable)</li>
                  <li>Form control attributes</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">✗ Avoid These</h4>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>CSS classes (unstable)</li>
                  <li>Complex XPath expressions</li>
                  <li>Index-based selectors</li>
                  <li>Dynamic/generated IDs</li>
                  <li>Brittle DOM traversal</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Code Examples</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-medium mb-2">Good Examples</h4>
                <pre className="text-sm overflow-x-auto">
{`// Role-based with name
page.getByRole('button', { name: 'Submit' })

// Labeled form controls
page.getByLabel('Email address')

// Test IDs for complex cases
page.getByTestId('user-dropdown')

// Combining locators
page.getByRole('listitem')
  .filter({ hasText: 'Profile' })`}
                </pre>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-medium mb-2">Bad Examples</h4>
                <pre className="text-sm overflow-x-auto">
{`// ❌ CSS classes - fragile
page.locator('.btn-primary.submit-btn')

// ❌ Complex XPath - hard to maintain
page.locator('//div[3]/button[contains(@class,"submit")]')

// ❌ Index-based - brittle
page.locator('button').nth(2)

// ❌ Generated IDs - unstable
page.locator('#button_12345')`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}