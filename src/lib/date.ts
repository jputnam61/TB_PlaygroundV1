import { format, formatDistance, formatRelative, isDate } from 'date-fns';

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatRelativeTime(date: Date): string {
  return formatDistance(date, new Date(), { addSuffix: true });
}

export function formatDateTime(date: Date): string {
  return format(date, 'PPpp');
}

export function isValidDate(date: any): date is Date {
  return isDate(date) && !isNaN(date.getTime());
}