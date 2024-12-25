import * as React from 'react';
import { Command } from 'cmdk';
import { useNavigate } from '@/hooks/use-navigate';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { SearchTrigger } from './SearchTrigger';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    setSearch('');
    navigate(`/${path}`);
  };

  const handleClose = () => {
    setOpen(false);
    setSearch('');
  };

  return (
    <>
      <SearchTrigger onClick={() => setOpen(true)} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent 
          className="gap-0 p-0 outline-none" 
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader className="px-4 pb-4 pt-5">
            <DialogTitle>Search Documentation</DialogTitle>
            <DialogDescription>
              Search through documentation, components, and guides
            </DialogDescription>
          </DialogHeader>
          
          <Command 
            shouldFilter={false} 
            className="overflow-hidden rounded-lg border shadow-md"
          >
            <SearchInput 
              value={search}
              onValueChange={setSearch}
              onClose={handleClose}
            />
            <SearchResults 
              search={search}
              onSelect={handleSelect}
            />
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}