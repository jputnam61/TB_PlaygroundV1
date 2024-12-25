import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PageObjectsExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Objects Implementation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Login Page Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Login Page Example</h3>
            <div className="p-4 rounded-lg bg-muted">
              <pre className="text-sm overflow-x-auto">
{`// pages/LoginPage.ts
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // Selectors
  private selectors = {
    username: '[data-testid="username-input"]',
    password: '[data-testid="password-input"]',
    loginButton: '[data-testid="login-button"]',
    errorMessage: '[data-testid="error-message"]'
  };

  // Actions
  async login(username: string, password: string) {
    await this.fill(this.selectors.username, username);
    await this.fill(this.selectors.password, password);
    await this.click(this.selectors.loginButton);
    await this.waitForNavigation();
  }

  // State checks
  async getErrorMessage() {
    return this.getText(this.selectors.errorMessage);
  }

  async isLoggedIn() {
    return !(await this.isVisible(this.selectors.loginButton));
  }
}`}
              </pre>
            </div>
          </div>

          {/* Dashboard Page Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Dashboard Page Example</h3>
            <div className="p-4 rounded-lg bg-muted">
              <pre className="text-sm overflow-x-auto">
{`// pages/DashboardPage.ts
import { BasePage } from './BasePage';
import { Navigation } from '../components/Navigation';

export class DashboardPage extends BasePage {
  readonly navigation: Navigation;

  constructor(page: Page) {
    super(page);
    this.navigation = new Navigation(page);
  }

  // Selectors
  private selectors = {
    welcomeMessage: '[data-testid="welcome-message"]',
    userProfile: '[data-testid="user-profile"]'
  };

  // Actions
  async openProfile() {
    await this.click(this.selectors.userProfile);
    await this.waitForNavigation();
  }

  // State checks
  async getWelcomeMessage() {
    return this.getText(this.selectors.welcomeMessage);
  }

  async isLoaded() {
    return this.isVisible(this.selectors.welcomeMessage);
  }
}`}
              </pre>
            </div>
          </div>

          {/* Component Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Reusable Component Example</h3>
            <div className="p-4 rounded-lg bg-muted">
              <pre className="text-sm overflow-x-auto">
{`// components/Navigation.ts
export class Navigation {
  private selectors = {
    menu: '[data-testid="main-menu"]',
    dashboard: '[data-testid="nav-dashboard"]',
    profile: '[data-testid="nav-profile"]'
  };

  constructor(private page: Page) {}

  async navigateToDashboard() {
    await this.page.click(this.selectors.dashboard);
  }

  async navigateToProfile() {
    await this.page.click(this.selectors.profile);
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}