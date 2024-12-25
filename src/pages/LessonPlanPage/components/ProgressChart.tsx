import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import type { Module } from '../types';

interface ProgressChartProps {
  data: Module[];
}

export function ProgressChart({ data }: ProgressChartProps) {
  const chartData = data.map(module => {
    const totalVideos = module.sections.reduce(
      (sum, section) => sum + section.videos.length, 
      0
    );
    const completedVideos = module.sections.reduce(
      (sum, section) => sum + section.videos.filter(v => v.status === 'completed').length,
      0
    );
    const inProgressVideos = module.sections.reduce(
      (sum, section) => sum + section.videos.filter(v => v.status === 'in-progress').length,
      0
    );

    return {
      name: module.title,
      total: totalVideos,
      completed: completedVideos,
      inProgress: inProgressVideos,
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Module Progress Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completed" stackId="a" fill="hsl(var(--primary))" name="Completed" />
              <Bar dataKey="inProgress" stackId="a" fill="hsl(var(--secondary))" name="In Progress" />
              <Bar dataKey="total" stackId="a" fill="hsl(var(--muted))" name="Planned" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}