import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function NodeInstallation() {
  return (
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
  );
}