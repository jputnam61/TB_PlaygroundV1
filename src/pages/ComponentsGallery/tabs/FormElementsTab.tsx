import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DemoForm } from '../components/DemoForm';
import { CodeExample } from '@/components/CodeExample';

const formTestExample = `
// Form interaction example using Playwright
test('should submit form successfully', async ({ page }) => {
  // Fill form fields
  await page.getByTestId('input-username').fill('testuser');
  await page.getByTestId('input-email').fill('test@example.com');
  await page.getByTestId('input-age').fill('25');
  
  // Select role from dropdown
  await page.getByTestId('select-role').click();
  await page.getByTestId('role-admin').click();
  
  // Check terms checkbox
  await page.getByTestId('checkbox-terms').click();
  
  // Submit form
  await page.getByTestId('button-submit').click();
  
  // Verify success
  await expect(page.getByTestId('form-result')).toBeVisible();
});`;

export function FormElementsTab() {
  const [result, setResult] = useState<string>('');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Elements Example</CardTitle>
        <CardDescription>
          Test various form elements with validation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CodeExample 
          title="Form Interaction"
          code={formTestExample}
        />
        <div className="mt-8">
          <DemoForm onResult={setResult} />
          {result && (
            <div className="mt-4 rounded-md bg-muted p-4">
              <pre className="text-sm" id="form-result">{result}</pre>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}