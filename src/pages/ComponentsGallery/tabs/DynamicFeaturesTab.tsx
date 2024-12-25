import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DynamicDemo } from '../components/DynamicDemo';
import { CodeExample } from '@/components/CodeExample';

const dynamicTestExample = `
// Dynamic features test examples
test('should handle loading states', async ({ page }) => {
  // Test loading button
  await page.getByTestId('button-loading').click();
  await expect(page.getByTestId('button-loading')).toBeDisabled();
  await expect(page.getByTestId('button-loading')).toBeEnabled();
  
  // Test progress bar
  await page.getByTestId('button-progress').click();
  await expect(page.getByTestId('progress-bar')).toHaveAttribute('value', '100');
});`;

export function DynamicFeaturesTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dynamic Features</CardTitle>
        <CardDescription>Test loading states and animations</CardDescription>
      </CardHeader>
      <CardContent>
        <CodeExample 
          title="Dynamic Features"
          code={dynamicTestExample}
        />
        <div className="mt-8">
          <DynamicDemo />
        </div>
      </CardContent>
    </Card>
  );
}