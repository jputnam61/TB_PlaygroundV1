import { Dropdowns } from './interactive/Dropdowns';
import { FileUpload } from './interactive/FileUpload';
import { NavMenu } from './interactive/NavigationMenu';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export function InteractiveDemo() {
  return (
    <div className="space-y-8">
      {/* Button Variants */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Button Variants</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="default" id="button-default">Default</Button>
          <Button variant="secondary" id="button-secondary">Secondary</Button>
          <Button variant="destructive" id="button-destructive">Destructive</Button>
          <Button variant="outline" id="button-outline">Outline</Button>
          <Button variant="ghost" id="button-ghost">Ghost</Button>
          <Button variant="link" id="button-link">Link</Button>
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Accordion</h4>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger id="accordion-trigger-1">Is it accessible?</AccordionTrigger>
            <AccordionContent id="accordion-content-1">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger id="accordion-trigger-2">Is it styled?</AccordionTrigger>
            <AccordionContent id="accordion-content-2">
              Yes. It comes with default styles that matches your theme.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Alert Dialog */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Alert Dialog</h4>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" id="button-show-dialog">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel id="button-dialog-cancel">Cancel</AlertDialogCancel>
              <AlertDialogAction id="button-dialog-continue">Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Dropdowns */}
      <Dropdowns />

      {/* File Upload */}
      <FileUpload />

      {/* Navigation Menu */}
      <NavMenu />
    </div>
  );
}