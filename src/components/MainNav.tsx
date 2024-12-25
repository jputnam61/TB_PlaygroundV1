import { Link } from '@/components/ui/link';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  Code2,
  FileCode2,
  GraduationCap,
  Layout,
  Library,
  Settings,
  TestTube2,
  Wrench,
  Lightbulb,
  Database,
} from 'lucide-react';

interface MainNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function MainNav({ currentPath, onNavigate }: MainNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <nav className="w-64 h-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/75 border-r border-border/40 px-4 py-6">
      <div className="space-y-8">
        {/* Understand Section */}
        <div className="nav-section">
          <div className="nav-section-header">
            <GraduationCap className="h-4 w-4" />
            Understand
          </div>
          <div className="space-y-1 mt-2">
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'basics')}
              className={cn('nav-link', currentPath === 'basics' && 'active')}
            >
              <Lightbulb className="h-4 w-4" />
              The Basics
            </Link>
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'core-concepts')}
              className={cn('nav-link', currentPath === 'core-concepts' && 'active')}
            >
              <BookOpen className="h-4 w-4" />
              Core Concepts
            </Link>
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'page-objects')}
              className={cn('nav-link', currentPath === 'page-objects' && 'active')}
            >
              <FileCode2 className="h-4 w-4" />
              Page Objects
            </Link>
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'pom-implementation')}
              className={cn('nav-link', currentPath === 'pom-implementation' && 'active')}
            >
              <Code2 className="h-4 w-4" />
              POM Implementation
            </Link>
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'data-driven-testing')}
              className={cn('nav-link', currentPath === 'data-driven-testing' && 'active')}
            >
              <Database className="h-4 w-4" />
              Data-Driven Testing
            </Link>
          </div>
        </div>

        {/* Practice Section */}
        <div className="nav-section">
          <div className="nav-section-header">
            <TestTube2 className="h-4 w-4" />
            Practice
          </div>
          <div className="space-y-1 mt-2">
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'components')}
              className={cn('nav-link', currentPath === 'components' && 'active')}
            >
              <Layout className="h-4 w-4" />
              Components
            </Link>
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'data-grid')}
              className={cn('nav-link', currentPath === 'data-grid' && 'active')}
            >
              <Library className="h-4 w-4" />
              Data Grid
            </Link>
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'edge-cases')}
              className={cn('nav-link', currentPath === 'edge-cases' && 'active')}
            >
              <TestTube2 className="h-4 w-4" />
              Edge Cases
            </Link>
          </div>
        </div>

        {/* Integrate Section */}
        <div className="nav-section">
          <div className="nav-section-header">
            <Wrench className="h-4 w-4" />
            Integrate
          </div>
          <div className="space-y-1 mt-2">
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'playwright')}
              className={cn('nav-link', currentPath === 'playwright' && 'active')}
            >
              <Settings className="h-4 w-4" />
              Playwright Setup
            </Link>
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'selenium')}
              className={cn('nav-link', currentPath === 'selenium' && 'active')}
            >
              <Settings className="h-4 w-4" />
              Selenium Setup
            </Link>
            <Link
              href="#"
              onClick={(e) => handleClick(e, 'project-setup')}
              className={cn('nav-link', currentPath === 'project-setup' && 'active')}
            >
              <Settings className="h-4 w-4" />
              Project Setup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}