import { Overview } from './PageObjectModelPage/Implementation/Overview';
import { VisualGuide } from './PageObjectModelPage/Implementation/VisualGuide';
import { BasePageExample } from './PageObjectModelPage/Implementation/BasePageExample';
import { PageObjectsExample } from './PageObjectModelPage/Implementation/PageObjectsExample';
import { TestImplementation } from './PageObjectModelPage/Implementation/TestImplementation';

export function POMImplementationPage() {
  return (
    <div className="space-y-8">
      <Overview />
      <VisualGuide />
      <BasePageExample />
      <PageObjectsExample />
      <TestImplementation />
    </div>
  );
}