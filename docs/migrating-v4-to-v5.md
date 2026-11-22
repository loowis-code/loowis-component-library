# Migrating from v4 to v5

Version 5 is a clean break. Upgrade each application deliberately; do not widen
an existing v4 range and expect it to compile unchanged.

## Replace the stylesheet import

Remove:

```ts
import 'loowis-component-library/dist/index.css';
```

Add the layers the application needs:

```ts
import 'loowis-component-library/tokens.css';
import 'loowis-component-library/theme.css';
import 'loowis-component-library/fonts.css';
import 'loowis-component-library/reset.css';
import 'loowis-component-library/components.css';
```

`fonts.css` and `reset.css` are optional. Import the CSS layers before the
application's own stylesheet so local semantic-token overrides take precedence.

## Replace `Header`

There is no v5 `Header`. Build a site-owned header from the parts that are
actually shared:

```tsx
import { ButtonLink, SearchField, Wordmark } from 'loowis-component-library';

export function SiteHeader() {
    return (
        <header className={styles.header}>
            <Wordmark />
            <SearchField onSearch={search} />
            <nav aria-label="Primary">
                <ButtonLink href="/projects">Projects</ButtonLink>
            </nav>
        </header>
    );
}
```

The application owns responsive layout, navigation labels, destinations, and
search routing.

## Replace the v4 button API

```tsx
// v4
<Button buttonText="Save" clickHandler={save} />
<Button buttonText="Projects" buttonLink="/projects" />

// v5
<Button onClick={save}>Save</Button>
<ButtonLink href="/projects">Projects</ButtonLink>
```

Disabled and loading states no longer need local button copies:

```tsx
<Button disabled>Previous page</Button>
<Button loading loadingLabel="Saving">Save</Button>
```

## Replace `LinkProvider`

Remove `LinkProvider`. Supply a router adapter only where a link primitive is
used:

```tsx
const RouterLink = ({ href, ...props }) => <TanStackLink to={href} {...props} />;

<ButtonLink href="/collections" linkComponent={RouterLink}>
    Collections
</ButtonLink>

<Wordmark href="/" linkComponent={RouterLink} />
```

Plain anchors remain the default.

## Replace `Polaroid`

```tsx
// v4
<Polaroid
    filename="/photo.jpg"
    alt="Edinburgh"
    title="Edinburgh"
    caption="At sunset"
    links={[{ href: '/photo', text: 'View' }]}
/>

// v5
<PolaroidCard
    image={{ src: '/photo.jpg', alt: 'Edinburgh' }}
    title="Edinburgh"
    description="At sunset"
    actions={<ButtonLink href="/photo">View</ButtonLink>}
/>
```

## Replace copied visual constants

Remove local copies of the paper background, six-colour palette, heavy border,
offset shadow, focus ring, and Josefin font declarations where the shared token
expresses the same decision. Prefer semantic variables in local CSS:

```css
.panel {
    color: var(--loowis-text-color);
    background: var(--loowis-surface-background);
    border: var(--loowis-border-width) solid var(--loowis-border-color);
}
```

Keep application-specific layout and feature styling local.

## Upgrade checklist

- [ ] Install a tested v5 beta explicitly.
- [ ] Replace the old global stylesheet import.
- [ ] Remove `Header`, `Polaroid`, and v4 `Button` usage.
- [ ] Remove `LinkProvider` and connect router links at their call sites.
- [ ] Remove duplicated fonts and visual constants.
- [ ] Run type checks, tests, accessibility checks, and the production build.
- [ ] Compare desktop and mobile screenshots.
- [ ] Upgrade from the beta to stable v5 only after deployment verification.
