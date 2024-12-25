export function VerifySetup() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Step 4: Verify Installation</h3>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Run the example test to verify everything is working:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          npx playwright test
        </pre>
        <p className="text-sm text-muted-foreground mt-2">
          You should see the test results in your terminal. To view the HTML report:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          npx playwright show-report
        </pre>
      </div>
    </div>
  );
}