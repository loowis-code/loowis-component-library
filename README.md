# Loowis Component Library

## What is this?

This repository is a collection of components I use in my personal websites. I created this library mainly as a way to learn about creating packages and release workflow but also to help bring a cohesive design language across all of my personal websites.

## What components are available?

- Header
- Button
- Polaroid

## How do I use it?

### Step 1

`npm i loowis-component-library`

### Step 2

Add the import for the library's CSS at the top level of your JSX e.g in your _app.js.

`import 'loowis-component-library/dist/index.css';`

### Step 3

Import and use whatever component you wish

`import { Header } from 'loowis-component-library'`

`<Header />`

### Step 4 (optional) — wire up your router

`Header` and `Button` render links through an injectable `LinkProvider`. By default (no provider) they render a plain `<a href>`, which works everywhere but performs a full page navigation. If your app has a client-side router and you want in-app links to navigate without a full reload, wrap your app once in `LinkProvider`, passing an adapter that maps this library's `{ href, className, children, ...rest }` props onto your router's link component.

```tsx
import { LinkProvider } from 'loowis-component-library';
import type { LinkComponentProps } from 'loowis-component-library';

// Next.js
import NextLink from 'next/link';
const RouterLink = ({ href, children, ...rest }: LinkComponentProps) => (
    <NextLink href={href} {...rest}>{children}</NextLink>
);

// TanStack Router
import { Link as TanStackLink } from '@tanstack/react-router';
const RouterLink = ({ href, children, ...rest }: LinkComponentProps) => (
    <TanStackLink to={href} {...rest}>{children}</TanStackLink>
);

export default function App({ children }) {
    return <LinkProvider component={RouterLink}>{children}</LinkProvider>;
}
```

## Migrating to v5

`Header` and `Button` previously imported `next/link` directly, which meant every consumer needed `next` installed (as a peer dependency) even if they didn't use Next.js. As of v5:

- `next` is **no longer a peer dependency** — you can remove it from `package.json` unless you use it directly elsewhere.
- Links render as a plain `<a href>` by default instead of `next/link`. If you were relying on `next/link`'s client-side transitions, this is a **behaviour change**: navigation will silently fall back to full page reloads until you wrap your app in `LinkProvider` (see Step 4 above) with an adapter for your router.
- No component props changed — `Button`/`Header`'s public API is otherwise unchanged.
