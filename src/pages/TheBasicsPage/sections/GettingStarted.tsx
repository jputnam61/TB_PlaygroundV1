import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function GettingStarted() {
  return (
    <div className="space-y-6" data-search-content="basics">
      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>What is UI Automation?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Definition</h3>
              <p className="text-muted-foreground">
                UI Automation is the process of using software tools to control and verify the user interface 
                of your application automatically, simulating real user interactions without manual intervention.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Key Benefits:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Faster test execution</li>
                  <li>Consistent and reliable results</li>
                  <li>Increased test coverage</li>
                  <li>Early bug detection</li>
                  <li>Reduced manual testing effort</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Prerequisites</h3>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Required Skills:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Basic programming knowledge</li>
                  <li>Understanding of HTML/CSS</li>
                  <li>Familiarity with web browsers</li>
                  <li>Basic testing concepts</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Tools Needed:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Node.js (v14 or higher)</li>
                  <li>VS Code or preferred IDE</li>
                  <li>Git (optional but recommended)</li>
                  <li>Modern web browser</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Learning Section */}
      <Card>
        <CardHeader>
          <CardTitle>Visual Guide to UI Automation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">1. Test Planning</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Identify test scenarios</p>
                <p>• Define test objectives</p>
                <p>• Choose automation framework</p>
                <p>• Set up project structure</p>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">2. Test Development</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Write test scripts</p>
                <p>• Implement Page Objects</p>
                <p>• Add assertions</p>
                <p>• Handle test data</p>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">3. Test Execution</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Run tests locally</p>
                <p>• Debug failures</p>
                <p>• Generate reports</p>
                <p>• Maintain test suite</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}