import { ComponentDocLayout } from '@/components/docs/ComponentDocLayout';
import { InputDemos } from '@/components/docs/demos/InputDemos';
import { componentCatalog } from '@/lib/docs/components';

const meta = componentCatalog.find((c) => c.slug === 'input')!;

export default function InputPage() {
  return (
    <ComponentDocLayout
      meta={meta}
      whenToUse="Use the composite Input for form fields that need a label, hint, validation caption, and optional icons. Compose primitives directly when building custom field layouts."
      anatomy="InputLabel, InputField (or TextareaField), and InputCaption — each usable independently or via the composite Input wrapper."
      usageCode={`<Input
  label="Email"
  required
  placeholder="you@example.com"
  caption="We'll never share this."
  captionType="info"
/>

<Input
  label="Password"
  type="password"
  caption="Must be at least 8 characters"
  captionType="error"
/>`}
      accessibility={
        <>
          Every field has an associated <code className="font-[family-name:var(--font-mono)]">label</code> via{' '}
          <code className="font-[family-name:var(--font-mono)]">htmlFor</code>. Error captions set border and text tokens and should be linked with{' '}
          <code className="font-[family-name:var(--font-mono)]">aria-describedby</code>. Required fields expose the required state visually and semantically.
        </>
      }
      props={[
        { name: 'label', type: 'string', description: 'Visible field label' },
        { name: 'hint', type: 'string', description: 'Optional hint shown beside the label' },
        { name: 'caption', type: 'string', description: 'Helper or validation message below the field' },
        { name: 'captionType', type: "'caption' | 'error' | 'success' | 'info' | 'password'", defaultValue: "'caption'", description: 'Caption style and semantics' },
        { name: 'leadingIcon', type: 'ReactNode', description: 'Icon inside the field, leading position' },
        { name: 'trailingIcon', type: 'ReactNode', description: 'Icon inside the field, trailing position' },
        { name: 'multiline', type: 'boolean', defaultValue: 'false', description: 'Render a textarea instead of an input' },
        { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Marks the field as required' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables interaction' },
      ]}
    >
      <InputDemos />
    </ComponentDocLayout>
  );
}
