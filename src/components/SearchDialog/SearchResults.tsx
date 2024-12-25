import { Command } from 'cmdk';
import { FileText } from 'lucide-react';
import { searchableContent } from '@/lib/searchable-content';

interface SearchResultsProps {
  search: string;
  onSelect: (path: string) => void;
}

export function SearchResults({ search, onSelect }: SearchResultsProps) {
  return (
    <Command.List className="max-h-[300px] overflow-y-auto py-2">
      {search.length > 0 && (
        <Command.Empty className="py-6 text-center text-sm">
          No results found.
        </Command.Empty>
      )}

      {Object.entries(searchableContent).map(([section, items]) => (
        <Command.Group key={section} heading={section} className="px-2">
          {items
            .filter(item =>
              search.length === 0 ||
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              (item.keywords && item.keywords.toLowerCase().includes(search.toLowerCase()))
            )
            .map(item => (
              <Command.Item
                key={item.path}
                value={item.path}
                onSelect={() => onSelect(item.path)}
                className="flex items-center gap-2 px-4 py-2 rounded-sm aria-selected:bg-accent"
              >
                <FileText className="h-4 w-4 opacity-70" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.title}</span>
                  {item.preview && (
                    <span className="text-xs text-muted-foreground">
                      {item.preview}
                    </span>
                  )}
                </div>
              </Command.Item>
            ))}
        </Command.Group>
      ))}
    </Command.List>
  );
}