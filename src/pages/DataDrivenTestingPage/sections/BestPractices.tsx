import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function BestPractices() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Best Practices & Tips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Do's</h3>
            <div className="bg-muted p-4 rounded-lg">
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Keep test data separate from test logic</li>
                <li>Use meaningful test data descriptions</li>
                <li>Implement proper error handling</li>
                <li>Version control your test data</li>
                <li>Use type definitions for test data</li>
                <li>Keep data files organized by feature/module</li>
                <li>Document data format and requirements</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Don'ts</h3>
            <div className="bg-muted p-4 rounded-lg">
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Mix test logic with test data</li>
                <li>Use production data without sanitization</li>
                <li>Hardcode sensitive information</li>
                <li>Create overly complex data structures</li>
                <li>Ignore data validation</li>
                <li>Duplicate test data across files</li>
                <li>Use dynamic data without proper cleanup</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Type Safety</h3>
          <pre className="bg-muted p-4 rounded-lg text-sm">
{`// types/test-data.ts
interface TestUser {
  username: string;
  password: string;
  role: 'admin' | 'user';
}

interface TestData {
  validUsers: TestUser[];
  invalidUsers: Array<{
    username: string;
    password: string;
    expectedError: string;
  }>;
}

// Import with type safety
import testData from '../test-data/login.json' assert { type: 'json' };
const data: TestData = testData;`}
          </pre>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Data Management Tips</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Organization</h4>
              <ul className="space-y-1 text-sm list-disc list-inside">
                <li>Group related test data</li>
                <li>Use clear naming conventions</li>
                <li>Maintain a consistent structure</li>
                <li>Document data dependencies</li>
              </ul>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Maintenance</h4>
              <ul className="space-y-1 text-sm list-disc list-inside">
                <li>Regular data cleanup</li>
                <li>Version control integration</li>
                <li>Automated validation</li>
                <li>Change tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}