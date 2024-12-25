interface SearchableItem {
  title: string;
  path: string;
  keywords?: string;
  preview?: string;
}

interface SearchableContent {
  [key: string]: SearchableItem[];
}

export const searchableContent: SearchableContent = {
  'Getting Started': [
    {
      title: 'The Basics',
      path: 'basics',
      keywords: 'introduction getting started automation testing basics fundamentals learn setup',
      preview: 'Learn the fundamentals of UI automation testing'
    }
  ],
  'Core Concepts': [
    {
      title: 'Automation Concepts',
      path: 'core-concepts', 
      keywords: 'locators selectors actions assertions waits page objects patterns practices',
      preview: 'Core automation concepts including locators, actions, and assertions'
    }
  ],
  'Practice': [
    {
      title: 'UI Components',
      path: 'components',
      keywords: 'buttons inputs forms dropdowns modals dialogs components ui elements interactive',
      preview: 'Interactive UI components and form elements'
    },
    {
      title: 'Data Grid',
      path: 'data-grid',
      keywords: 'table grid data sorting filtering pagination search records management',
      preview: 'Data grid with sorting, filtering and pagination'
    }
  ],
  'Setup Guides': [
    {
      title: 'Playwright Setup',
      path: 'playwright',
      keywords: 'playwright setup installation configuration testing framework automation tool',
      preview: 'Set up and configure Playwright for testing'
    },
    {
      title: 'Selenium Setup',
      path: 'selenium',
      keywords: 'selenium webdriver setup installation java python javascript c# ruby',
      preview: 'Set up Selenium WebDriver in multiple languages'
    }
  ]
};