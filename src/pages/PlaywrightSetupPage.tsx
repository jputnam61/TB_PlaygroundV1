import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function PlaywrightSetupPage() {
  return (
    <Tabs defaultValue="setup" className="space-y-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="setup">Initial Setup</TabsTrigger>
        <TabsTrigger value="configuration">Configuration</TabsTrigger>
      </TabsList>

      <TabsContent value="setup" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started with Playwright</CardTitle>
            <CardDescription>
              Step-by-step guide to set up Playwright for automated testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Prerequisites */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Step 1: Install Node.js</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="windows">
                  <AccordionTrigger>Windows Installation</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        1. Visit the official Node.js website: <a href="https://nodejs.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://nodejs.org</a>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2. Download the Windows Installer (.msi) for the LTS version
                      </p>
                      <p className="text-sm text-muted-foreground">
                        3. Run the installer and follow the installation wizard
                      </p>
                      <p className="text-sm text-muted-foreground">
                        4. Verify installation by opening Command Prompt and running:
                      </p>
                      <pre className="bg-muted p-4 rounded-lg mt-2">
                        node --version
                        npm --version
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mac">
                  <AccordionTrigger>macOS Installation</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Using Homebrew:</p>
                      <pre className="bg-muted p-4 rounded-lg">
                        # Install Homebrew if not installed
                        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

                        # Install Node.js
                        brew install node
                      </pre>
                      <p className="text-sm text-muted-foreground mt-4">
                        Verify installation by opening Terminal and running:
                      </p>
                      <pre className="bg-muted p-4 rounded-lg mt-2">
                        node --version
                        npm --version
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="linux">
                  <AccordionTrigger>Linux Installation</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Ubuntu/Debian:</p>
                      <pre className="bg-muted p-4 rounded-lg">
                        # Add NodeSource repository
                        curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

                        # Install Node.js
                        sudo apt-get install -y nodejs
                      </pre>
                      <p className="text-sm text-muted-foreground mt-4">
                        Verify installation by running:
                      </p>
                      <pre className="bg-muted p-4 rounded-lg mt-2">
                        node --version
                        npm --version
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* VS Code Installation */}
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

            {/* Project Setup */}
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

            {/* Verify Installation */}
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

          </CardContent>
        </Card>
      </TabsContent>

      {/* Rest of the tabs content remains the same */}
      <TabsContent value="configuration">
        {/* ... existing configuration content ... */}
      </TabsContent>
    </Tabs>
  );
}