import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Configuration() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Playwright Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-8">
            {/* Basic Configuration */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Basic Configuration</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});`}
              </pre>
            </section>

            {/* Advanced Options */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Advanced Options</h3>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Custom Browser Context</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm">
{`use: {
  // Browser context options
  viewport: { width: 1280, height: 720 },
  ignoreHTTPSErrors: true,
  permissions: ['geolocation'],
  
  // Authentication state
  storageState: 'auth.json',
  
  // Record video
  video: 'on-first-retry',
  
  // Custom headers
  extraHTTPHeaders: {
    'Accept-Language': 'en-US',
  },
}`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Test Hooks</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm">
{`// Global setup
globalSetup: require.resolve('./global-setup'),

// Before each test
use: {
  beforeEach: async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
  },
},

// After each test
use: {
  afterEach: async ({ page }) => {
    await page.close();
  },
}`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Environment Variables */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Environment Variables</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`// playwright.config.ts
export default defineConfig({
  use: {
    // Load from process.env
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  
  // Environment variables
  env: {
    STORAGE_STATE: './auth.json',
    API_TOKEN: process.env.API_TOKEN,
  },
  
  // Per-project configuration
  projects: [
    {
      name: 'staging',
      use: { baseURL: 'https://staging.example.com' },
    },
    {
      name: 'production',
      use: { baseURL: 'https://example.com' },
    },
  ],
});`}
              </pre>
            </section>

            {/* Best Practices */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Best Practices</h3>
              <div className="grid gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">✓ Recommended Settings</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Enable parallel execution for faster tests</li>
                    <li>Use retries in CI environments</li>
                    <li>Record traces and videos only on failure</li>
                    <li>Implement proper timeout handling</li>
                    <li>Configure multiple browser projects</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">✗ Common Pitfalls</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Setting global timeouts too low</li>
                    <li>Recording videos for all tests</li>
                    <li>Not handling browser context properly</li>
                    <li>Missing error screenshots</li>
                    <li>Hardcoding environment-specific values</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}