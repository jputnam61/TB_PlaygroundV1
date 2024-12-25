import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Play, Video } from 'lucide-react';
import { getProgressColor } from '../utils';
import type { ProgressType } from '../types';

interface ModuleProgressProps {
  title: string;
  current: number;
  total: number;
  type: ProgressType;
}

export function ModuleProgress({ title, current, total, type }: ModuleProgressProps) {
  const percentage = Math.round((current / total) * 100);
  
  const getIcon = () => {
    switch (type) {
      case 'overall':
        return <BookOpen className="h-5 w-5 text-primary" />;
      case 'released':
        return <Play className="h-5 w-5 text-green-500" />;
      case 'production':
        return <Video className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {getIcon()}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{percentage}%</div>
        <Progress
          value={percentage}
          className="mt-2"
          indicatorColor={getProgressColor(type)}
        />
        <p className="mt-2 text-xs text-muted-foreground">
          {current} of {total} videos
        </p>
      </CardContent>
    </Card>
  );
}