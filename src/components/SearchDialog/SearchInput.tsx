import { Command } from 'cmdk';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchInputProps {
  value: string;
  onValueChange: (value: string) => void;
  onClose: () => void;
}

export function SearchInput({ value, onValueChange, onClose }: SearchInputProps) {
  return (
    <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
      <Command.Input
        placeholder="Search documentation..."
        value={value}
        onValueChange={onValueChange}
        className="flex h-11 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Search documentation"
      />
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0"
        onClick={onClose}
        aria-label="Close search"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  );
}