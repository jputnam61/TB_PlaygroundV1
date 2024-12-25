import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function VisualGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visual Structure</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 rounded-lg bg-muted/50">
          <pre className="text-sm overflow-x-auto">
{`project/
├── tests/
│   ├── e2e/
│   │   └── login.spec.ts     # Test files
│   └── fixtures/
│       └── auth.fixture.ts   # Test fixtures
├── pages/
│   ├── BasePage.ts          # Base page class
│   ├── LoginPage.ts         # Login page object
│   └── DashboardPage.ts     # Dashboard page object
└── components/
    ├── Navigation.ts        # Reusable components
    └── Modal.ts             # Shared UI components`}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}