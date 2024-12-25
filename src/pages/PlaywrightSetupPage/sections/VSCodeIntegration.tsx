export function VSCodeIntegration() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Step 5: VS Code Integration</h3>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          1. Open your project in VS Code by running this command in your terminal:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          code playwright-tests
        </pre>
        
        <p className="text-sm text-muted-foreground mt-4">
          2. Install recommended VS Code extensions:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
          <li>Playwright Test for VS Code</li>
          <li>TypeScript and JavaScript Language Features (built-in)</li>
        </ul>

        <p className="text-sm text-muted-foreground mt-4">
          3. Access Playwright features in VS Code:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
          <li>View Testing sidebar (beaker icon)</li>
          <li>Run/Debug tests from the editor</li>
          <li>Record new tests using Codegen</li>
          <li>View test reports</li>
        </ul>
      </div>
    </div>
  );
}