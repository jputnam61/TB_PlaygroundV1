import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LocatorReference } from './LocatorReference';
import { LocatorExamples } from './LocatorExamples';
import { BestPractices } from './BestPractices';

export function Locators() {
  return (
    <div className="space-y-8">
      <LocatorReference />
      <LocatorExamples />
      <BestPractices />
    </div>
  );
}