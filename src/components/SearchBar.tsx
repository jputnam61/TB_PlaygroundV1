import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { searchContent, type SearchResult } from '@/lib/search';

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.length > 2) {
      const searchResults = searchContent(value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (path: string) => {
    setOpen(false);
    const element = document.querySelector(`[data-search-content="${path}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.classList.add('highlight-search');
    }
  };

  return (
    <>
      <Button 
        variant="outline" 
        className="w-full md:w-[200px] justify-start"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span>Search...</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search Documentation</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              placeholder="Type to search..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
            <ScrollArea className="h-[300px]">
              {results.length === 0 ? (
                <p className="text-center text-sm text-muted-foreground p-4">
                  {searchTerm.length > 2 ? 'No results found.' : 'Type at least 3 characters to search'}
                </p>
              ) : (
                <div className="space-y-4">
                  {results.map((result) => (
                    <Button
                      key={result.path}
                      variant="ghost"
                      className="w-full justify-start text-left flex flex-col items-start gap-1"
                      onClick={() => handleSelect(result.path)}
                    >
                      <span className="font-medium">{result.title}</span>
                      <span className="text-xs text-muted-foreground line-clamp-2">
                        {result.preview}
                      </span>
                      {result.matches.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {result.matches.map((match, i) => (
                            <span 
                              key={i}
                              className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded"
                            >
                              {match}
                            </span>
                          ))}
                        </div>
                      )}
                    </Button>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}