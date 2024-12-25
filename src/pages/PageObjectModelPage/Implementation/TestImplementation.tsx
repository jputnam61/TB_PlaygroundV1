import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TestImplementation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Implementation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Test Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Complete Test Example</h3>
            <div className="p-4 rounded-lg bg-muted">
              <pre className="text-sm overflow-x-auto">
{`// tests/e2e/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login Flow', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
  });

  test('successful login', async () => {
    await loginPage.login('testuser', 'password');
    await expect(dashboardPage.isLoaded()).toBeTruthy();
    
    const message = await dashboardPage.getWelcomeMessage();
    expect(message).toContain('Welcome');
  });

  test('invalid credentials', async () => {
    await loginPage.login('invalid', 'wrong');
    const error = await loginPage.getErrorMessage();
    expect(error).toBe('Invalid credentials');
  });
});`}
              </pre>
            </div>
          </div>

          {/* Test Fixture Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Test Fixture Example</h3>
            <div className="p-4 rounded-lg bg-muted">
              <pre className="text-sm overflow-x-auto">
{`// tests/fixtures/auth.fixture.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  authenticatedPage: DashboardPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('testuser', 'password');
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  }
});`}
              </pre>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}