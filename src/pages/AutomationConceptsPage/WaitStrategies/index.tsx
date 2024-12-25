import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ActionabilityReference } from './ActionabilityReference';
import { DynamicElements } from './DynamicElements';
import { LoadingStates } from './LoadingStates';
import { WaitPatterns } from './WaitPatterns';

export function WaitStrategies() {
  return (
    <div className="space-y-8">
      <ActionabilityReference />
      
      <div className="grid gap-8">
        <WaitPatterns />
        <DynamicElements />
        <LoadingStates />
      </div>
    </div>
  );
}