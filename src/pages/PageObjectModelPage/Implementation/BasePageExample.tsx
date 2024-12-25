import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function BasePageExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Base Page Implementation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted">
            <pre className="text-sm overflow-x-auto">
{`// pages/BasePage.ts
export class BasePage {
  constructor(protected page: Page) {}

  // Common actions
  protected async click(selector: string) {
    await this.page.click(selector);
  }

  protected async fill(selector: string, value: string) {
    await this.page.fill(selector, value);
  }

  protected async getText(selector: string) {
    return this.page.textContent(selector);
  }

  protected async isVisible(selector: string) {
    return this.page.isVisible(selector);
  }

  // Navigation
  protected async goto(path: string) {
    await this.page.goto(path);
  }

  // Wait utilities
  protected async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }

  protected async waitForNavigation() {
    await this.page.waitForLoadState('networkidle');
  }
}`}
            </pre>
          </div>

          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-medium mb-2">Key Points</h4>
            <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
              <li>Base class provides common functionality</li>
              <li>Protected methods for internal page object use</li>
              <li>Wrapper methods for Playwright actions</li>
              <li>Centralized wait strategies</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}