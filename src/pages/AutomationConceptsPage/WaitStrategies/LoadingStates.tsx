import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LoadingOverlayExample } from './examples/LoadingOverlayExample';
import { ToastExample } from './examples/ToastExample';

export function LoadingStates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loading States & Notifications</CardTitle>
        <CardDescription>
          Handle loading indicators, overlays, and temporary notifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LoadingOverlayExample />
          <ToastExample />
        </div>
      </CardContent>
    </Card>
  );
}