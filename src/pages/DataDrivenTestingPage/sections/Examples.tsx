import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Examples() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Practical Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-semibold mb-4">Form Validation Testing</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm">
{`// test-data/form-validation.json
{
  "testCases": [
    {
      "field": "email",
      "value": "invalid-email",
      "expectedError": "Please enter a valid email"
    },
    {
      "field": "phone",
      "value": "123",
      "expectedError": "Phone number must be 10 digits"
    }
  ]
}

// tests/form-validation.spec.ts
import { test, expect } from '@playwright/test';
import validationData from '../test-data/form-validation.json';

test.describe('Form Validation', () => {
  for (const testCase of validationData.testCases) {
    test(\`should validate \${testCase.field}\`, async ({ page }) => {
      await page.goto('/form');
      await page.fill(\`#\${testCase.field}\`, testCase.value);
      await page.click('#submit');
      
      const error = page.locator(\`#\${testCase.field}-error\`);
      await expect(error).toHaveText(testCase.expectedError);
    });
  }
});`}
                </pre>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-4">API Testing</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm">
{`// test-data/api-tests.json
{
  "endpoints": [
    {
      "method": "POST",
      "path": "/api/users",
      "payload": {
        "name": "Test User",
        "email": "test@example.com"
      },
      "expectedStatus": 201,
      "expectedResponse": {
        "success": true
      }
    }
  ]
}

// tests/api.spec.ts
import { test, expect } from '@playwright/test';
import apiData from '../test-data/api-tests.json';

test.describe('API Tests', () => {
  for (const endpoint of apiData.endpoints) {
    test(\`\${endpoint.method} \${endpoint.path}\`, async ({ request }) => {
      const response = await request[endpoint.method.toLowerCase()](
        endpoint.path,
        { data: endpoint.payload }
      );
      
      expect(response.status()).toBe(endpoint.expectedStatus);
      expect(await response.json()).toMatchObject(endpoint.expectedResponse);
    });
  }
});`}
                </pre>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-4">Cross-Browser Testing</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm">
{`// test-data/browser-config.json
{
  "viewports": [
    { "width": 1920, "height": 1080, "name": "desktop" },
    { "width": 768, "height": 1024, "name": "tablet" },
    { "width": 375, "height": 667, "name": "mobile" }
  ]
}

// tests/responsive.spec.ts
import { test } from '@playwright/test';
import config from '../test-data/browser-config.json';

for (const viewport of config.viewports) {
  test(\`should display correctly on \${viewport.name}\`, async ({ page }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height
    });
    
    await page.goto('/');
    await page.screenshot({
      path: \`screenshots/\${viewport.name}.png\`
    });
  });
}`}
                </pre>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}