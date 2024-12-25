import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Overview() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Understanding Data-Driven Testing</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://playwright.dev/docs/test-parameterize"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View Docs
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-sm dark:prose-invert">
          <h3>What is Data-Driven Testing?</h3>
          <p>
            Data-driven testing is a methodology where test cases run multiple times with different sets of data. 
            Instead of hardcoding test data, you store it externally (in JSON files, CSV, or databases) and use it to drive your tests.
          </p>

          <h3>Benefits</h3>
          <ul>
            <li>Increased test coverage with minimal code duplication</li>
            <li>Easier maintenance - update data without changing test code</li>
            <li>Better organization of test cases and scenarios</li>
            <li>Reusability across different test suites</li>
          </ul>

          <h3>Common Data Sources</h3>
          <ul>
            <li>JSON files - Most common for web testing</li>
            <li>CSV files - Good for large datasets</li>
            <li>Excel files - Popular in enterprise environments</li>
            <li>Databases - For dynamic test data</li>
          </ul>

          <h3>When to Use Data-Driven Testing</h3>
          <ul>
            <li>Testing forms with multiple input combinations</li>
            <li>Validating search functionality with different queries</li>
            <li>Testing API endpoints with various payloads</li>
            <li>Cross-browser testing with different configurations</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}