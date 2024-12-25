import type { ProgressType } from './types';

export function getProgressColor(type: ProgressType): string {
  switch (type) {
    case 'released':
      return 'bg-green-500';
    case 'production':
      return 'bg-blue-500';
    default:
      return 'bg-primary';
  }
}

export function calculateProgress(current: number, total: number): number {
  return Math.round((current / total) * 100);
}