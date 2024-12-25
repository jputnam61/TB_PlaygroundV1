import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { FormElementsTab } from './ComponentsGallery/tabs/FormElementsTab';
import { InteractiveTab } from './ComponentsGallery/tabs/InteractiveTab';
import { DynamicFeaturesTab } from './ComponentsGallery/tabs/DynamicFeaturesTab';
import { AccessibilityTab } from './ComponentsGallery/tabs/AccessibilityTab';

export function ComponentsGallery() {
  return (
    <Tabs defaultValue="form" className="space-y-8">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
        <TabsTrigger value="form" id="tab-form">Form Elements</TabsTrigger>
        <TabsTrigger value="interactive" id="tab-interactive">Interactive</TabsTrigger>
        <TabsTrigger value="dynamic" id="tab-dynamic">Dynamic Features</TabsTrigger>
        <TabsTrigger value="accessibility" id="tab-accessibility">Accessibility</TabsTrigger>
      </TabsList>

      <TabsContent value="form">
        <FormElementsTab />
      </TabsContent>

      <TabsContent value="interactive">
        <InteractiveTab />
      </TabsContent>

      <TabsContent value="dynamic">
        <DynamicFeaturesTab />
      </TabsContent>

      <TabsContent value="accessibility">
        <AccessibilityTab />
      </TabsContent>
    </Tabs>
  );
}