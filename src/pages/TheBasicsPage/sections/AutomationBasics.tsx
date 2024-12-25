import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AutomationBasics() {
  return (
    <div className="space-y-6">
      {/* Core Concepts */}
      <Card>
        <CardHeader>
          <CardTitle>Core Automation Concepts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Locators</h3>
              <p className="text-muted-foreground">
                Locators are methods used to find and interact with elements on a web page.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm">
{`// Common locator strategies
page.getByRole('button')
page.getByText('Submit')
page.getByTestId('login-form')
page.getByLabel('Username')`}
                </pre>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Actions</h3>
              <p className="text-muted-foreground">
                Actions are commands that simulate user interactions with elements.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm">
{`// Common actions
await element.click()
await element.fill('text')
await element.type('text')
await element.select('option')`}
                </pre>
              </div>
            </div>
          </div>

          {/* Assertions Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Assertions</h3>
            <p className="text-muted-foreground">
              Assertions verify that elements or conditions meet expected criteria.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm">
{`// Common assertions
await expect(page).toHaveTitle('Login')
await expect(element).toBeVisible()
await expect(element).toHaveText('Welcome')
await expect(element).toBeEnabled()`}
              </pre>
            </div>
          </div>

          {/* Wait Strategies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Wait Strategies</h3>
            <p className="text-muted-foreground">
              Wait strategies ensure elements are ready for interaction.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm">
{`// Common wait patterns
await page.waitForSelector('.button')
await page.waitForLoadState('networkidle')
await expect(element).toBeVisible()
await page.waitForResponse(url)`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}