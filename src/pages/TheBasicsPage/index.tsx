import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GettingStarted } from './sections/GettingStarted';
import { FirstTest } from './sections/FirstTest';
import { AutomationBasics } from './sections/AutomationBasics';

export function TheBasicsPage() {
  return (
    <div className="space-y-8">
      <Card className="border-primary/20 bg-card/95">
        <CardHeader>
          <CardTitle className="text-2xl">Getting Started with UI Automation</CardTitle>
          <CardDescription>
            Learn the fundamentals of UI automation testing and write your first test
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="getting-started" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="automation-basics">Automation Basics</TabsTrigger>
          <TabsTrigger value="first-test">Your First Test</TabsTrigger>
        </TabsList>

        <TabsContent value="getting-started">
          <GettingStarted />
        </TabsContent>

        <TabsContent value="automation-basics">
          <AutomationBasics />
        </TabsContent>

        <TabsContent value="first-test">
          <FirstTest />
        </TabsContent>
      </Tabs>
    </div>
  );
}