# Lamplight Design System

Token-driven component library. Figma → Style Dictionary → Tailwind v4 + Radix UI + Next.js.

## Monorepo structure

```
lamplight/
├── tokens/                  # Style Dictionary pipeline
│   ├── lamplight-design-tokens.json  # ← Figma export (source of truth)
│   ├── sd.config.js                  # transform config
│   └── css/                          # generated — commit, never hand-edit
│       ├── brand.css                 # :root primitives
│       ├── alias.css                 # :root semantic aliases
│       ├── mapped.light.css          # :root, [data-theme="light"]
│       ├── mapped.dark.css           # [data-theme="dark"]
│       ├── responsive.css            # type scale per breakpoint
│       └── tailwind-theme.css        # @theme block for Tailwind v4
├── packages/
│   └── ui/                  # component library (@lamplight/ui)
│       └── src/
│           ├── components/  # one folder per component
│           ├── lib/cn.ts    # Tailwind class merge utility
│           └── index.ts     # public API
├── apps/
│   └── web/                 # Next.js 15 app (@lamplight/web)
│       └── src/
│           ├── app/
│           │   ├── globals.css   # single CSS entrypoint
│           │   └── layout.tsx    # fonts + ThemeProvider
│           └── components/
│               └── ThemeProvider.tsx
└── .storybook/              # shared Storybook config
```

## Token layer rules

Components consume **only Mapped tokens** (`var(--color-surface-action)` etc.).  
Never reference Brand or Alias tokens in component code — those are for the pipeline only.

```
Brand (primitives) → Alias (semantic names) → Mapped (component-facing, light+dark)
                                                         ↓
                                              Component CSS classes
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Build token CSS (run whenever you export new tokens from Figma)
npm run tokens

# 3. Start Storybook
npm run storybook

# 4. Start Next.js dev server
npm run dev
```

## Updating tokens from Figma

1. Export variables from Figma → replace `tokens/lamplight-design-tokens.json`
2. Run `npm run tokens` — CSS files regenerate automatically
3. Commit both the JSON and the CSS — CI enforces they stay in sync

## Adding a new component

1. Create `packages/ui/src/components/ComponentName/ComponentName.tsx`
2. Use `cva` for variant axes — match the Figma Type × State × Size axes exactly
3. Reference only `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)` from Mapped/Alias tokens
4. Add `ComponentName.stories.tsx` covering all variants + a dark-mode story
5. Export from `packages/ui/src/index.ts`


## Verified builds

This scaffold has been installed and built end-to-end:
- Storybook 10.4.6 — `npm run storybook` (build verified)
- Next.js 16 app — `npm run dev` (build verified)
- Token pipeline — `npm run tokens` (Style Dictionary 5)
- TypeScript — passes `tsc --noEmit` with `strict` + `noUncheckedIndexedAccess`

### First run

```bash
npm install
npm run tokens          # generate token CSS first (required)
npm run storybook       # or: npm run dev
```

Note: `next/font/google` requires internet access at build time to fetch Merriweather and Open Sans.
# lamplight
