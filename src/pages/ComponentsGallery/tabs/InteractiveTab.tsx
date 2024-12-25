import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeExample } from '@/components/CodeExample';
import { InteractiveDemo } from '../components/InteractiveDemo';
import { AlternativeSelectors } from '../components/interactive/AlternativeSelectors';
import { buttonTestExample } from '../components/interactive/test-examples/ButtonTests';
import { accordionTestExample } from '../components/interactive/test-examples/AccordionTests';
import { dialogTestExample } from '../components/interactive/test-examples/DialogTests';
import { dropdownTestExample } from '../components/interactive/test-examples/DropdownTests';
import { fileUploadTestExample } from '../components/interactive/test-examples/FileUploadTests';
import { navigationTestExample } from '../components/interactive/test-examples/NavigationTests';

export function InteractiveTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Components</CardTitle>
        <CardDescription>
          Test various interactive components and selector strategies
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Test Examples First */}
        <div className="space-y-6 mb-8">
          <CodeExample title="Button Tests" code={buttonTestExample} />
          <CodeExample title="Accordion Tests" code={accordionTestExample} />
          <CodeExample title="Dialog Tests" code={dialogTestExample} />
          <CodeExample title="Dropdown Tests" code={dropdownTestExample} />
          <CodeExample title="File Upload Tests" code={fileUploadTestExample} />
          <CodeExample title="Navigation Menu Tests" code={navigationTestExample} />
        </div>

        {/* Alternative Selectors Section */}
        <div className="mt-8 mb-8">
          <AlternativeSelectors />
        </div>

        {/* Interactive Components */}
        <div className="mt-8">
          <InteractiveDemo />
        </div>
      </CardContent>
    </Card>
  );
}