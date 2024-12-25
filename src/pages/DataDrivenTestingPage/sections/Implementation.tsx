import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Implementation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Implementation Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-4">1. Project Structure</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`my-playwright-project/
├── test-data/
│   ├── login.json
│   └── search.json
├── tests/
│   └── data-driven.spec.ts
├── playwright.config.ts
└── package.json`}
              </pre>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-4">2. Sample Test Data</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`// test-data/login.json
{
  "validUsers": [
    {
      "username": "testuser1",
      "password": "pass123",
      "role": "admin"
    },
    {
      "username": "testuser2",
      "password": "pass456",
      "role": "user"
    }
  ],
  "invalidUsers": [
    {
      "username": "invalid",
      "password": "wrong",
      "expectedError": "Invalid credentials"
    }
  ]
}`}
              </pre>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-4">3. Basic Implementation</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`import { test, expect } from '@playwright/test';
import loginData from '../test-data/login.json';

test.describe('Login Tests', () => {
  // Test valid login scenarios
  for (const user of loginData.validUsers) {
    test(\`should login successfully as \${user.role}\`, async ({ page }) => {
      await page.goto('/login');
      await page.fill('#username', user.username);
      await page.fill('#password', user.password);
      await page.click('#login-button');
      
      // Verify successful login
      await expect(page).toHaveURL('/dashboard');
    });
  }

  // Test invalid login scenarios
  for (const user of loginData.invalidUsers) {
    test(\`should show error for invalid login: \${user.username}\`, async ({ page }) => {
      await page.goto('/login');
      await page.fill('#username', user.username);
      await page.fill('#password', user.password);
      await page.click('#login-button');
      
      // Verify error message
      const error = page.locator('.error-message');
      await expect(error).toHaveText(user.expectedError);
    });
  }
});`}
              </pre>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-4">4. Using Test Fixtures</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/login.json';

// Define custom test fixture
type TestFixtures = {
  loginPage: LoginPage;
  testUser: typeof loginData.validUsers[0];
};

const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  testUser: async ({}, use) => {
    // Use first valid user as default
    await use(loginData.validUsers[0]);
  },
});

test('login with fixture data', async ({ loginPage, testUser }) => {
  await loginPage.login(testUser.username, testUser.password);
  await loginPage.expectSuccessfulLogin();
});`}
              </pre>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}