import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { WaitStrategies } from './AutomationConceptsPage/WaitStrategies';
import { Locators } from './AutomationConceptsPage/Locators';

export function AutomationConceptsPage() {
  return (
    <Tabs defaultValue="waits" className="space-y-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="waits">Wait Strategies</TabsTrigger>
        <TabsTrigger value="locators">Strong Locators</TabsTrigger>
      </TabsList>

      <TabsContent value="waits">
        <WaitStrategies />
      </TabsContent>

      <TabsContent value="locators">
        <Locators />
      </TabsContent>
    </Tabs>
  );
}