import { Search } from 'lucide-react';

interface SearchTriggerProps {
  onClick: () => void;
}

export function SearchTrigger({ onClick }: SearchTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-between w-full sm:w-64 px-4 py-2 text-sm border rounded-md bg-background hover:bg-accent"
    >
      <div className="inline-flex items-center">
        <Search className="mr-2 h-4 w-4" />
        <span>Search documentation...</span>
      </div>
      <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  );
}