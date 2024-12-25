import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Overview() {
  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Page Object Model Pattern</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://playwright.dev/docs/pom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View Docs
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <CardDescription>
          A design pattern that creates an object repository for storing web UI elements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Key Concepts</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-lg bg-card">
                <h4 className="font-medium mb-2">Encapsulation</h4>
                <p className="text-sm text-muted-foreground">
                  Each page is a class that encapsulates the page's elements and actions
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card">
                <h4 className="font-medium mb-2">Reusability</h4>
                <p className="text-sm text-muted-foreground">
                  Page objects can be reused across multiple test cases
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card">
                <h4 className="font-medium mb-2">Maintainability</h4>
                <p className="text-sm text-muted-foreground">
                  Changes to the UI only require updates in one place
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}