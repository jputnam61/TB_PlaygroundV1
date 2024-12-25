import { useState } from 'react';
import { ModuleProgress } from './components/ModuleProgress';
import { LessonTable } from './components/LessonTable';
import { ProgressChart } from './components/ProgressChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { lessonData } from './data';

export function LessonPlanPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const totalLessons = lessonData.reduce((acc, module) => 
    acc + module.sections.reduce((sum, section) => sum + section.videos.length, 0), 0);
  
  const completedLessons = lessonData.reduce((acc, module) => 
    acc + module.sections.reduce((sum, section) => 
      sum + section.videos.filter(video => video.status === 'completed').length, 0), 0);

  return (
    <div className="space-y-8">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">TechBeat Training Lesson Plan</CardTitle>
          <CardDescription>
            Track progress and upcoming content releases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <ModuleProgress 
              title="Total Progress"
              current={completedLessons}
              total={totalLessons}
              type="overall"
            />
            <ModuleProgress 
              title="Videos Released"
              current={completedLessons}
              total={totalLessons}
              type="released"
            />
            <ModuleProgress 
              title="In Production"
              current={lessonData.reduce((acc, module) => 
                acc + module.sections.reduce((sum, section) => 
                  sum + section.videos.filter(video => video.status === 'in-progress').length, 0), 0)}
              total={totalLessons}
              type="production"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Progress Overview</TabsTrigger>
          <TabsTrigger value="lessons">Lesson Details</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <ProgressChart data={lessonData} />
        </TabsContent>

        <TabsContent value="lessons">
          <LessonTable modules={lessonData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}