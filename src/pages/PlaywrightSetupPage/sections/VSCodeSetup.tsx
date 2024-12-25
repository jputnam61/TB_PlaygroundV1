export function VSCodeSetup() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Step 2: Install Visual Studio Code</h3>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          1. Download VS Code from <a href="https://code.visualstudio.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com</a>
        </p>
        <p className="text-sm text-muted-foreground">
          2. Run the installer for your operating system
        </p>
        <p className="text-sm text-muted-foreground">
          3. Install the Playwright Test for VS Code extension:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
          <li>Open VS Code</li>
          <li>Click the Extensions icon in the sidebar (or press Ctrl+Shift+X)</li>
          <li>Search for "Playwright Test for VS Code"</li>
          <li>Click Install</li>
        </ul>
      </div>
    </div>
  );
}