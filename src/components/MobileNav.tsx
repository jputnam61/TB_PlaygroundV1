import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { MainNav } from './MainNav';

interface MobileNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function MobileNav({ currentPath, onNavigate }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-2 mt-2 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <MainNav 
          currentPath={currentPath} 
          onNavigate={onNavigate}
        />
      </SheetContent>
    </Sheet>
  );
}