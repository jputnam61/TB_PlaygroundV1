export function ProjectSetup() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Step 3: Create a New Playwright Project</h3>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          1. Open Terminal/Command Prompt and create a new directory:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          mkdir playwright-tests
          cd playwright-tests
        </pre>
        
        <p className="text-sm text-muted-foreground mt-4">
          2. Initialize a new Playwright project:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          npm init playwright@latest
        </pre>
        
        <p className="text-sm text-muted-foreground mt-4">
          3. During initialization, select the following options:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
          <li>Choose between TypeScript/JavaScript (TypeScript recommended)</li>
          <li>Name your test folder (e.g., "tests" or "e2e")</li>
          <li>Add GitHub Actions workflow: Yes</li>
          <li>Install Playwright browsers: Yes</li>
        </ul>
      </div>
    </div>
  );
}