import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AlternativeSelectors() {
  return (
    <div className="space-y-4">
      <h4 className="font-medium">Alternative Selector Strategies</h4>
      <div className="grid gap-6">
        {/* Role Selectors */}
        <div className="space-y-2">
          <h5 className="text-sm font-medium text-primary">Role Selectors</h5>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`// Using ARIA roles
await page.getByRole('button', { name: 'Submit' });
await page.getByRole('combobox', { name: 'Select option' });
await page.getByRole('textbox', { name: 'Email' });

// With additional properties
await page.getByRole('checkbox', { checked: true });
await page.getByRole('tab', { selected: true });`}
            </pre>
          </div>
        </div>

        {/* Text Selectors */}
        <div className="space-y-2">
          <h5 className="text-sm font-medium text-primary">Text Selectors</h5>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`// Exact text match
await page.getByText('Submit').click();

// Partial text match
await page.getByText('Submit', { exact: false });

// With regular expression
await page.getByText(/Submit|Cancel/);

// Text content within element
await page.locator('div:has-text("Submit")')`}
            </pre>
          </div>
        </div>

        {/* XPath Selectors */}
        <div className="space-y-2">
          <h5 className="text-sm font-medium text-primary">XPath Selectors</h5>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`// Following sibling
await page.locator('//label[text()="Email"]/following-sibling::input');

// Parent to child
await page.locator('//form[@id="login"]//input');

// Ancestor with condition
await page.locator('//button[ancestor::div[@class="modal"]]');

// Element with specific text
await page.locator('//button[contains(text(), "Submit")]');`}
            </pre>
          </div>
        </div>

        {/* Custom Attribute Selectors */}
        <div className="space-y-2">
          <h5 className="text-sm font-medium text-primary">Custom Attribute Selectors</h5>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`// Using data-testid
await page.locator('[data-testid="submit-button"]');

// Multiple attributes
await page.locator('[data-testid="input"][type="email"]');

// Partial attribute match
await page.locator('[data-testid*="button"]');

// Custom data attributes
await page.locator('[data-automation="login-form"]');`}
            </pre>
          </div>
        </div>

        {/* CSS Selectors with Pseudo-Classes */}
        <div className="space-y-2">
          <h5 className="text-sm font-medium text-primary">CSS Pseudo-Class Selectors</h5>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`// Visibility and state
await page.locator('button:visible');
await page.locator('input:enabled');
await page.locator('select:not(:disabled)');

// Position based
await page.locator('li:first-child');
await page.locator('div:nth-child(2)');
await page.locator('p:last-child');`}
            </pre>
          </div>
        </div>

        {/* Chained Selectors */}
        <div className="space-y-2">
          <h5 className="text-sm font-medium text-primary">Chained Selectors</h5>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`// Multiple conditions
await page.locator('form.login-form').locator('input').first();

// Filter and narrow down
await page.locator('div.modal')
  .locator('button')
  .filter({ hasText: 'Submit' });

// Complex chains
await page.locator('form')
  .filter({ has: page.locator('[data-testid="email-input"]') })
  .locator('button.primary');`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}