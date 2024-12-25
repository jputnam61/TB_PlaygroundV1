import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Video } from 'lucide-react';
import type { Module } from '../types';

interface LessonTableProps {
  modules: Module[];
}

export function LessonTable({ modules }: LessonTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <Badge className="bg-green-500">
            <CheckCircle className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge className="bg-blue-500">
            <Video className="mr-1 h-3 w-3" />
            In Production
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary">
            <Clock className="mr-1 h-3 w-3" />
            Planned
          </Badge>
        );
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Module</TableHead>
            <TableHead>Section</TableHead>
            <TableHead>Video Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Release Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {modules.map((module) =>
            module.sections.map((section) =>
              section.videos.map((video, videoIndex) => (
                <TableRow key={`${module.title}-${section.title}-${videoIndex}`}>
                  {videoIndex === 0 && section.videos.length > 0 && (
                    <TableCell rowSpan={section.videos.length}>{module.title}</TableCell>
                  )}
                  {videoIndex === 0 && section.videos.length > 0 && (
                    <TableCell rowSpan={section.videos.length}>{section.title}</TableCell>
                  )}
                  <TableCell>{video.title}</TableCell>
                  <TableCell>{getStatusBadge(video.status)}</TableCell>
                  <TableCell>{video.releaseDate || 'TBD'}</TableCell>
                </TableRow>
              ))
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}