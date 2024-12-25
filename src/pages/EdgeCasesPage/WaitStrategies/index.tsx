import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ActionabilityReference } from './ActionabilityReference';
import { FadeInExample } from './FadeInExample';
import { SlideInExample } from './SlideInExample';
import { DisabledButtonExample } from './DisabledButtonExample';
import { DialogExample } from './DialogExample';
import { LoadingOverlayExample } from './LoadingOverlayExample';
import { ToastExample } from './ToastExample';

export function WaitStrategies() {
  return (
    <div className="space-y-8">
      <ActionabilityReference />
      
      <Card>
        <CardHeader>
          <CardTitle>Dynamic Element Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInExample />
            <SlideInExample />
            <DisabledButtonExample />
            <DialogExample />
            <LoadingOverlayExample />
            <ToastExample />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}