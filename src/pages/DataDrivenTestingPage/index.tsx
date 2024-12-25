import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Overview } from './sections/Overview';
import { Implementation } from './sections/Implementation';
import { Examples } from './sections/Examples';
import { BestPractices } from './sections/BestPractices';

export function DataDrivenTestingPage() {
  return (
    <div className="space-y-8" data-search-content="data-driven-testing">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">Data-Driven Testing in Playwright</CardTitle>
          <CardDescription>
            Learn how to create maintainable and scalable tests using external data sources
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Overview />
        </TabsContent>

        <TabsContent value="implementation">
          <Implementation />
        </TabsContent>

        <TabsContent value="examples">
          <Examples />
        </TabsContent>

        <TabsContent value="best-practices">
          <BestPractices />
        </TabsContent>
      </Tabs>
    </div>
  );
}