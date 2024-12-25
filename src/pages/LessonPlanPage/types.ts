export type ProgressType = 'overall' | 'released' | 'production';

export interface Video {
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  releaseDate?: string;
}

export interface Section {
  title: string;
  videos: Video[];
}

export interface Module {
  title: string;
  sections: Section[];
}

export interface ChartData {
  name: string;
  total: number;
  completed: number;
  inProgress: number;
}