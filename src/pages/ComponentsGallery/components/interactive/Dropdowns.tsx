import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const frameworks = [
  { value: 'playwright', label: 'Playwright' },
  { value: 'selenium', label: 'Selenium' },
  { value: 'cypress', label: 'Cypress' },
  { value: 'webdriverio', label: 'WebdriverIO' },
  { value: 'puppeteer', label: 'Puppeteer' },
];

export function Dropdowns() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="space-y-8">
      {/* Basic Dropdown */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Basic Dropdown</h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" id="basic-dropdown">Select Option</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem id="option-1">Option 1</DropdownMenuItem>
            <DropdownMenuItem id="option-2">Option 2</DropdownMenuItem>
            <DropdownMenuItem id="option-3">Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Combobox with Search */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Searchable Dropdown</h4>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
              id="searchable-dropdown"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    id={`framework-${framework.value}`}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}