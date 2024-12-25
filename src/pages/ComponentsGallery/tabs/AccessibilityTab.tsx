import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AccessibilityDemo } from '../components/AccessibilityDemo';
import { CodeExample } from '@/components/CodeExample';

const accessibilityTestExample = `
// Accessibility test examples
test('should support keyboard navigation', async ({ page }) => {
  // Test keyboard focus
  await page.keyboard.press('Tab');
  await expect(page.getByTestId('panel-keyboard-nav')).toBeFocused();
  
  // Test ARIA labels
  await expect(page.getByTestId('button-aria-close'))
    .toHaveAttribute('aria-label', 'Close dialog');
  
  // Test screen reader text
  await expect(page.getByRole('button', { name: 'Toggle theme' }))
    .toBeVisible();
});`;

export function AccessibilityTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Accessibility Features</CardTitle>
        <CardDescription>
          Test keyboard navigation and screen reader support
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CodeExample 
          title="Accessibility Testing"
          code={accessibilityTestExample}
        />
        <div className="mt-8">
          <AccessibilityDemo />
        </div>
      </CardContent>
    </Card>
  );
}