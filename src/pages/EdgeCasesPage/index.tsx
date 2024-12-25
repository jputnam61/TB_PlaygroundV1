import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WaitStrategies } from './WaitStrategies';

export function EdgeCasesPage() {
  return (
    <Tabs defaultValue="waits" className="space-y-8">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="waits">Wait Strategies</TabsTrigger>
        <TabsTrigger value="iframes">iFrames</TabsTrigger>
        <TabsTrigger value="shadow-dom">Shadow DOM</TabsTrigger>
        <TabsTrigger value="dynamic">Dynamic Content</TabsTrigger>
      </TabsList>

      <TabsContent value="waits">
        <WaitStrategies />
      </TabsContent>

      {/* Other tab contents remain the same */}
    </Tabs>
  );
}