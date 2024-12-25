import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FadeInExample } from './examples/FadeInExample';
import { SlideInExample } from './examples/SlideInExample';
import { DisabledButtonExample } from './examples/DisabledButtonExample';
import { DialogExample } from './examples/DialogExample';

export function DynamicElements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dynamic Elements</CardTitle>
        <CardDescription>
          Handling elements that change state, animate, or appear dynamically
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeInExample />
          <SlideInExample />
          <DisabledButtonExample />
          <DialogExample />
        </div>
      </CardContent>
    </Card>
  );
}