import type { Module } from './types';

export const lessonData: Module[] = [
  {
    title: 'Getting Started',
    sections: [
      {
        title: 'Introduction',
        videos: [
          {
            title: 'Welcome to TechBeat Playground',
            status: 'completed',
            releaseDate: '2024-02-01',
          },
          {
            title: 'Platform Overview',
            status: 'completed',
            releaseDate: '2024-02-01',
          },
        ],
      },
    ],
  },
  {
    title: 'Understand',
    sections: [
      {
        title: 'The Basics',
        videos: [
          {
            title: 'What is UI Automation?',
            status: 'in-progress',
            releaseDate: '2025-01-11',
          },
          {
            title: 'Setting Up Your Environment',
            status: 'planned',
            releaseDate: '2025-01-18',
          },
        ],
      },
      {
        title: 'Core Concepts',
        videos: [
          {
            title: 'Mastering Locators',
            status: 'planned',
            releaseDate: '2025-01-25',
          },
          {
            title: 'Working with Dynamic Elements',
            status: 'planned',
            releaseDate: '2025-02-01',
          },
        ],
      },
    ],
  },
  {
    title: 'Practice',
    sections: [
      {
        title: 'Components',
        videos: [
          {
            title: 'Testing UI Components',
            status: 'planned',
            releaseDate: '2025-02-08',
          },
        ],
      },
      {
        title: 'Data Grid',
        videos: [
          {
            title: 'Working with Data Grids',
            status: 'planned',
            releaseDate: '2025-02-15',
          },
        ],
      },
    ],
  },
  {
    title: 'Integrate',
    sections: [
      {
        title: 'Frameworks',
        videos: [
          {
            title: 'Getting Started with Playwright',
            status: 'planned',
            releaseDate: '2025-02-22',
          },
          {
            title: 'Getting Started with Selenium',
            status: 'planned',
            releaseDate: '2025-02-29',
          },
        ],
      },
    ],
  },
];