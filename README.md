# Loowis Design System

Design tokens, theme layers, and accessible React primitives shared by Lewis's
personal websites. The package is published as `loowis-component-library` to
preserve the existing repository and npm release history.

> Version 5 is a clean break from the old component library. The old `Header`,
> `Polaroid`, prop-based `Button`, `LinkProvider`, and `dist/index.css` API are
> not part of the new design system.

## Installation

```sh
npm install loowis-component-library
```

Import the layers your application needs once at its root:

```ts
import 'loowis-component-library/tokens.css';
import 'loowis-component-library/theme.css';
import 'loowis-component-library/fonts.css'; // optional
import 'loowis-component-library/reset.css'; // optional
import 'loowis-component-library/components.css';
```

Tokens can be used without React or any component styles.

## React primitives

```tsx
import {
    Button,
    ButtonLink,
    PolaroidCard,
    SearchField,
    Surface,
    Wordmark,
} from 'loowis-component-library';
```

### Buttons

```tsx
<Button variant="filled" onClick={save}>Save</Button>
<Button disabled>Unavailable</Button>
<Button loading loadingLabel="Saving">Save</Button>
<ButtonLink href="/projects">Projects</ButtonLink>
```

Router-specific links are injected at the call site instead of through global
context:

```tsx
import { Link as TanStackLink } from '@tanstack/react-router';

const RouterLink = ({ href, ...props }) => <TanStackLink to={href} {...props} />;

<ButtonLink href="/collections" linkComponent={RouterLink}>
    Collections
</ButtonLink>
```

### Wordmark and search

```tsx
<header>
    <Wordmark href="/" />
    <SearchField onSearch={(query) => navigateToSearch(query)} />
</header>
```

The design system intentionally does not provide a full site header. Each site
owns its navigation, layout, and routing while composing the shared primitives.

### Polaroid card

```tsx
<PolaroidCard
    image={{ src: '/edinburgh.jpg', alt: 'Edinburgh skyline' }}
    title="Edinburgh"
    description="Photographed at sunset."
    actions={<ButtonLink href="/photos/edinburgh">View photograph</ButtonLink>}
/>
```

## Tokens

CSS custom properties are namespaced with `--loowis-`:

```css
.project-panel {
    padding: var(--loowis-space-5);
    border: var(--loowis-border-width) solid var(--loowis-border-color);
    background: var(--loowis-surface-background);
}
```

JavaScript-accessible values are available separately:

```ts
import { breakpoints, colors, spacing, typography } from 'loowis-component-library/tokens';
```

Prefer semantic variables such as `--loowis-action-hover-background` in
application and component styles.

## Themes

The default theme is applied through `theme.css`. Consumers can override
semantic variables locally:

```css
[data-loowis-theme='photography'] {
    --loowis-card-accent: var(--loowis-accent-blue);
}
```

A cinema preset is available with `data-loowis-theme="cinema"`.

## Development

```sh
npm install
npm run check
npm run build-storybook
npm run pack:check
```

The implementation and migration sequence is documented in
[`docs/design-system-v5-plan.md`](docs/design-system-v5-plan.md).
Existing consumers should follow the
[`v4 to v5 migration guide`](docs/migrating-v4-to-v5.md).

## Release process

1. Commit the intended version in `package.json` and `package-lock.json`.
2. Ensure CI succeeds on that commit.
3. Create a matching Git tag and GitHub Release, such as `v5.0.0-beta.1`.
4. The release workflow checks out that exact tag and publishes prereleases to
   npm `next` or stable releases to npm `latest`.
