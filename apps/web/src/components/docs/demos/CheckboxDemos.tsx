'use client';

import * as React from 'react';
import { Checkbox } from '@lamplight/ui';
import { ComponentPreview } from '@/components/docs/ComponentPreview';

export function CheckboxDemos() {
  const [checked, setChecked] = React.useState<boolean | 'indeterminate'>('indeterminate');
  const [items, setItems] = React.useState([false, true, false]);

  const allChecked = items.every(Boolean);
  const noneChecked = items.every((v) => !v);

  return (
    <div className="flex flex-col gap-[var(--spacing-2xl)]">
      <ComponentPreview title="Single checkbox">
        <div className="flex flex-col gap-[var(--spacing-md)]">
          <Checkbox label="Accept terms and conditions" />
          <Checkbox label="Checked by default" defaultChecked />
          <Checkbox label="Disabled" disabled />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Select all pattern">
        <div className="flex flex-col gap-[var(--spacing-md)]">
          <Checkbox
            label="Select all"
            checked={allChecked ? true : noneChecked ? false : 'indeterminate'}
            onCheckedChange={(value) => {
              const next = value === true;
              setItems(items.map(() => next));
            }}
          />
          {items.map((item, index) => (
            <Checkbox
              key={index}
              label={`Item ${index + 1}`}
              checked={item}
              onCheckedChange={(value) => {
                const next = [...items];
                next[index] = value === true;
                setItems(next);
              }}
            />
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview title="Indeterminate state">
        <Checkbox
          label="Partially selected"
          checked={checked}
          onCheckedChange={setChecked}
        />
      </ComponentPreview>
    </div>
  );
}
