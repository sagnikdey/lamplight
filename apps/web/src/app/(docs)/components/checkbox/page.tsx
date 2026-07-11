import { ComponentDocLayout } from '@/components/docs/ComponentDocLayout';
import { CheckboxDemos } from '@/components/docs/demos/CheckboxDemos';
import { componentCatalog } from '@/lib/docs/components';

const meta = componentCatalog.find((c) => c.slug === 'checkbox')!;

export default function CheckboxPage() {
  return (
    <ComponentDocLayout
      meta={meta}
      whenToUse="Use checkboxes for multi-select options or boolean consent. Use IndeterminateCheckbox for select-all patterns in lists and tables."
      anatomy="Radix Checkbox primitive, custom check icon, label with optional left/right positioning."
      usageCode={`<Checkbox label="Accept terms" />

<IndeterminateCheckbox
  checked={allChecked ? true : noneChecked ? false : 'indeterminate'}
  onCheckedChange={handleSelectAll}
  label="Select all"
/>`}
      accessibility={
        <>
          Built on <code className="font-[family-name:var(--font-mono)]">@radix-ui/react-checkbox</code> with keyboard support and{' '}
          <code className="font-[family-name:var(--font-mono)]">aria-checked</code> including indeterminate state.
          Labels are clickable and associated with the control.
        </>
      }
      props={[
        { name: 'label', type: 'string', description: 'Visible label text' },
        { name: 'labelDirection', type: "'right' | 'left'", defaultValue: "'right'", description: 'Label position relative to the control' },
        { name: 'checked', type: 'boolean | "indeterminate"', description: 'Controlled checked state' },
        { name: 'defaultChecked', type: 'boolean', description: 'Uncontrolled initial state' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables interaction' },
        { name: 'onCheckedChange', type: '(checked: boolean | "indeterminate") => void', description: 'Change handler' },
      ]}
    >
      <CheckboxDemos />
    </ComponentDocLayout>
  );
}
