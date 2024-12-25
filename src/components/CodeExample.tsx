import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeExampleProps {
  title: string;
  code: string;
  defaultExpanded?: boolean;
}

export function CodeExample({ title, code, defaultExpanded = false }: CodeExampleProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="mt-6 border rounded-lg overflow-hidden bg-muted/30">
      <Button
        variant="ghost"
        className="w-full flex items-center justify-between p-4 text-sm font-medium hover:bg-muted/50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-muted-foreground">🔍 How to Test: {title}</span>
        <ChevronDown 
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isExpanded && "transform rotate-180"
          )} 
        />
      </Button>
      <div className={cn(
        "px-4 pb-4 transition-all duration-200",
        isExpanded ? "block" : "hidden"
      )}>
        <pre className="text-xs overflow-x-auto p-2 rounded bg-muted">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}