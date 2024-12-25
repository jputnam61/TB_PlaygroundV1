import { useState } from 'react';
import { MainNav } from '@/components/MainNav';
import { MobileNav } from '@/components/MobileNav';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { BrandHeader } from '@/components/BrandHeader';
import { LandingPage } from '@/components/LandingPage';
import { ComponentsGallery } from '@/pages/ComponentsGallery';
import { EdgeCasesPage } from '@/pages/EdgeCasesPage';
import { PageObjectModelPage } from '@/pages/PageObjectModelPage';
import { POMImplementationPage } from '@/pages/POMImplementationPage';
import { PlaywrightSetupPage } from '@/pages/PlaywrightSetupPage';
import { SeleniumSetupPage } from '@/pages/SeleniumSetupPage';
import { ProjectSetupPage } from '@/pages/ProjectSetupPage';
import { PersonalInfoPage } from '@/pages/PersonalInfoPage';
import { DataGridPage } from '@/pages/DataGridPage';
import { AutomationConceptsPage } from '@/pages/AutomationConceptsPage';
import { TheBasicsPage } from '@/pages/TheBasicsPage';
import { LessonPlanPage } from '@/pages/LessonPlanPage';
import { DataDrivenTestingPage } from '@/pages/DataDrivenTestingPage';
import { AskTechBeatDialog } from '@/components/AskTechBeat/AskTechBeatDialog';

const PATHS = {
  COMPONENTS: 'components',
  DATA_GRID: 'data-grid',
  EDGE_CASES: 'edge-cases',
  CORE_CONCEPTS: 'core-concepts',
  PAGE_OBJECTS: 'page-objects',
  POM_IMPLEMENTATION: 'pom-implementation',
  PLAYWRIGHT: 'playwright',
  SELENIUM: 'selenium',
  PROJECT_SETUP: 'project-setup',
  PERSONAL_INFO: 'personal-info',
  BASICS: 'basics',
  LESSON_PLAN: 'lesson-plan',
  DATA_DRIVEN_TESTING: 'data-driven-testing'
} as const;

type Path = typeof PATHS[keyof typeof PATHS];

export default function App() {
  const [currentPath, setCurrentPath] = useState<Path>(PATHS.COMPONENTS);
  const [showLanding, setShowLanding] = useState(true);
  const [askTechBeatOpen, setAskTechBeatOpen] = useState(false);

  // Make navigation function available globally for search
  const appElement = document.querySelector('#root');
  if (appElement) {
    (appElement as any).navigate = setCurrentPath;
    (appElement as any).openAskTechBeat = () => setAskTechBeatOpen(true);
    appElement.setAttribute('data-app-navigation', 'true');
  }

  const getPageTitle = () => {
    switch (currentPath) {
      case PATHS.COMPONENTS:
        return 'UI Components Gallery';
      case PATHS.DATA_GRID:
        return 'Data Grid Examples';
      case PATHS.EDGE_CASES:
        return 'Edge Cases & Testing Challenges';
      case PATHS.CORE_CONCEPTS:
        return 'Core Automation Concepts';
      case PATHS.PAGE_OBJECTS:
        return 'Page Object Model';
      case PATHS.POM_IMPLEMENTATION:
        return 'POM Implementation Guide';
      case PATHS.PLAYWRIGHT:
        return 'Playwright Setup Guide';
      case PATHS.SELENIUM:
        return 'Selenium Setup Guide';
      case PATHS.PROJECT_SETUP:
        return 'Project Setup Guide';
      case PATHS.PERSONAL_INFO:
        return 'Info Form Example';
      case PATHS.BASICS:
        return 'Getting Started with UI Automation';
      case PATHS.LESSON_PLAN:
        return 'Lesson Plan';
      case PATHS.DATA_DRIVEN_TESTING:
        return 'Data-Driven Testing';
      default:
        return 'UI Components Gallery';
    }
  };

  const renderContent = () => {
    switch (currentPath) {
      case PATHS.COMPONENTS:
        return <ComponentsGallery />;
      case PATHS.DATA_GRID:
        return <DataGridPage />;
      case PATHS.EDGE_CASES:
        return <EdgeCasesPage />;
      case PATHS.CORE_CONCEPTS:
        return <AutomationConceptsPage />;
      case PATHS.PAGE_OBJECTS:
        return <PageObjectModelPage />;
      case PATHS.POM_IMPLEMENTATION:
        return <POMImplementationPage />;
      case PATHS.PLAYWRIGHT:
        return <PlaywrightSetupPage />;
      case PATHS.SELENIUM:
        return <SeleniumSetupPage />;
      case PATHS.PROJECT_SETUP:
        return <ProjectSetupPage />;
      case PATHS.PERSONAL_INFO:
        return <PersonalInfoPage />;
      case PATHS.BASICS:
        return <TheBasicsPage />;
      case PATHS.LESSON_PLAN:
        return <LessonPlanPage />;
      case PATHS.DATA_DRIVEN_TESTING:
        return <DataDrivenTestingPage />;
      default:
        return <ComponentsGallery />;
    }
  };

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <BrandHeader onNavigate={setCurrentPath} />
      <div className="flex">
        <div className="hidden md:block h-[calc(100vh-65px)] sticky top-[65px]">
          <MainNav currentPath={currentPath} onNavigate={setCurrentPath} />
        </div>

        <div className="md:hidden">
          <MobileNav currentPath={currentPath} onNavigate={setCurrentPath} />
        </div>

        <main className="flex-1 px-6 py-8 min-h-[calc(100vh-65px)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{getPageTitle()}</h1>
              <ThemeSwitcher />
            </div>
            {renderContent()}
          </div>
        </main>
      </div>

      <AskTechBeatDialog 
        open={askTechBeatOpen} 
        onOpenChange={setAskTechBeatOpen} 
      />
    </div>
  );
}