import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function FirstTest() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Writing Your First Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Test Structure */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Test Structure</h3>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm">
{`import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
  });

  test('should login successfully', async () => {
    await loginPage.login('testuser', 'password');
    await expect(page).toHaveURL('/dashboard');
  });
});`}
              </pre>
            </div>
          </div>

          {/* Page Object Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Page Object Example</h3>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm">
{`// pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  // Locators
  private usernameInput = '[data-testid="username-input"]';
  private passwordInput = '[data-testid="password-input"]';
  private loginButton = '[data-testid="login-button"]';

  // Actions
  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // Assertions
  async getErrorMessage() {
    return this.page.textContent('[data-testid="error-message"]');
  }
}`}
              </pre>
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Do's</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use meaningful test names</li>
                  <li>Keep tests independent</li>
                  <li>Use page objects</li>
                  <li>Handle waits properly</li>
                  <li>Add clear assertions</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Don'ts</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use hardcoded waits</li>
                  <li>Chain multiple assertions</li>
                  <li>Use unstable locators</li>
                  <li>Skip error handling</li>
                  <li>Write complex tests</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}