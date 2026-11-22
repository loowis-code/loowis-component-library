# Loowis Design System v5 implementation plan

## Objective

Turn the existing `loowis-component-library` repository and npm package into a
CSS-first design system shared by Photography Website, Portfolio Website, and
Cine Schedule.

Version 5 is an intentional clean break. It will not preserve the v4 component
API or the `dist/index.css` contract. Because all consumers are controlled by
the same owner, each will be migrated deliberately before v5 is promoted from
the npm `next` tag to `latest`.

## Decisions

- Keep the existing GitHub repository, commit history, tags, issues, and npm
  package name.
- Present the package as **Loowis Design System** in its documentation.
- Continue publishing npm releases from GitHub Releases.
- Release the new architecture as `v5.0.0`.
- Do not ship legacy `Header`, `Button`, `Polaroid`, `LinkProvider`, or legacy
  global CSS compatibility layers.
- Share design tokens and small primitives; keep site headers, navigation,
  routing, and page composition in their applications.
- Use a prerelease and the npm `next` tag until all three sites have migrated.

## Target public API

```text
loowis-component-library
loowis-component-library/tokens
loowis-component-library/tokens.css
loowis-component-library/theme.css
loowis-component-library/reset.css
loowis-component-library/fonts.css
```

The root JavaScript entry will export the React primitives. CSS layers are
independently importable so a consumer pays only for the layers it uses.

## Target source layout

```text
src/
|-- components/
|   |-- Button/
|   |-- PolaroidCard/
|   |-- SearchField/
|   |-- Surface/
|   `-- Wordmark/
|-- styles/
|   |-- fonts.css
|   |-- reset.css
|   |-- theme.css
|   `-- tokens.css
|-- tokens/
|   |-- breakpoints.ts
|   |-- colors.ts
|   |-- spacing.ts
|   |-- typography.ts
|   `-- index.ts
`-- index.ts
```

## Phase 1: Baseline and safeguards

1. Verify the v4 test suite and production build before changing behaviour.
2. Add explicit `typecheck`, `check`, and package-content verification scripts.
3. Record the old public API and the intentional breaking changes.
4. Add CI checks for types, tests, build, and packed package contents.

Gate: the baseline is known and new structural work cannot silently break the
package build.

## Phase 2: Package boundaries

1. Replace the single-entry build with entries for React and TypeScript tokens.
2. Add explicit `package.json` exports for JavaScript, declarations, and CSS.
3. Mark CSS as side-effectful so consumer bundlers retain imported styles.
4. Ensure React and React DOM remain peer dependencies.
5. Remove the script that prepends `use client` to the entire bundle; apply the
   directive only to components that require it.

Gate: fixture consumers can resolve every documented public import without
using an internal `dist` path.

## Phase 3: Design tokens

1. Introduce namespaced primitive tokens for palette, typography, spacing,
   borders, shadows, radii, motion, focus, layout, and breakpoints.
2. Introduce semantic tokens for canvas, surfaces, text, actions, controls,
   focus, and status treatments.
3. Use one canonical token source or tests that prevent CSS and TypeScript
   representations from drifting.
4. Incorporate the more complete interaction and focus vocabulary already used
   by Cine Schedule.
5. Document which tokens are stable public API.

Gate: repeated visual constants from all three sites map to shared tokens, and
components contain no direct copies of the brand palette.

## Phase 4: CSS layers and typography

1. `tokens.css` defines primitive and semantic custom properties only.
2. `theme.css` applies the default Loowis theme without resetting elements.
3. `reset.css` provides an optional minimal reset and focus defaults.
4. `fonts.css` provides optional Josefin Sans loading through Fontsource.
5. Remove component-level `@font-face` declarations and bundled duplicate font
   files.
6. Support consumer overrides through semantic custom properties and an
   optional `data-loowis-theme` attribute.

Gate: tokens can be used without React or font downloads, and font setup is
defined once.

## Phase 5: React primitives

Implement scoped, accessible primitives that forward refs and ordinary DOM
props:

- `Button`: native button semantics, disabled and loading states, sizes, and
  visual variants.
- `ButtonLink`: link presentation with an injectable link component at the call
  site, avoiding global router context.
- `Surface`: the shared border, background, and offset-shadow treatment.
- `Wordmark`: coloured LOOWIS letters rendered declaratively, with compact and
  standard sizes.
- `SearchField`: accessible form presentation while applications retain search
  behaviour and routing.
- `PolaroidCard`: composable image, body, title, description, and actions.

Full site headers will not be supplied by the package.

Gate: primitives have unit, keyboard, accessibility, and representative visual
coverage.

## Phase 6: Documentation and contract fixtures

1. Replace the README with v5 installation and architecture guidance.
2. Document every CSS layer, stable token, component, and theme override.
3. Add an explicit v4-to-v5 migration guide.
4. Add Storybook stories for variants, themes, long content, and responsive
   cases.
5. Add fixture builds for Vite, Next.js, and TanStack Router consumption.
6. Test that no example imports an undocumented `dist` file.

Gate: the documented examples compile solely against the packed public API.

## Phase 7: Release workflow

Retain GitHub Release to npm publishing, with these corrections:

1. Version changes are committed before the release is created.
2. The publish job checks out the release tag, not the moving tip of `main`.
3. The Git tag and `package.json` version must agree.
4. The full check and package inspection run before publication.
5. Prereleases publish with npm tag `next`; stable releases publish with
   `latest`.
6. The publish job does not rewrite and push version files after release.
7. Enable npm provenance or trusted publishing when supported by the package
   account.

Gate: a release always publishes the exact reviewed and tagged commit.

## Phase 8: Prerelease and consumer migrations

Publish `v5.0.0-beta.1` to `next`, then migrate consumers in this order.

### Cine Schedule

1. Replace its local palette, borders, shadows, focus styles, and font setup
   with package layers and tokens.
2. Replace its local wordmark and appropriate generic controls with primitives.
3. Keep cinema filters, listings, navigation composition, and page layout local.
4. Validate accessibility, tests, production build, and responsive screenshots.

### Photography Website

1. Replace its duplicated tokens and font files.
2. Replace pagination controls with the new button API, including disabled
   behaviour.
3. Build a local header from `Wordmark`, `SearchField`, and navigation
   primitives.
4. Connect TanStack Router at link call sites.
5. Remove v4 components and the `dist/index.css` import.
6. Validate tests, build, and responsive screenshots.

### Portfolio Website

1. Replace duplicated tokens and font files.
2. Build a local header from shared primitives.
3. Replace `Polaroid` with `PolaroidCard` composition.
4. Keep Next.js-specific image and navigation behaviour in the application.
5. Remove v4 components and the `dist/index.css` import.
6. Validate the production build and responsive screenshots.

Gate: all three deployed applications use the v5 prerelease without legacy
imports.

## Phase 9: Stable release

1. Resolve findings through additional beta releases.
2. Confirm all consumer dependency ranges point to a tested v5 build.
3. Publish `v5.0.0` through a stable GitHub Release and npm `latest`.
4. Update consumer ranges from the prerelease to the stable version.
5. Verify the npm package contents and all deployed sites after release.

## Planned implementation commits

1. `docs: add v5 design system implementation plan`
2. `chore: add package verification safeguards`
3. `feat!: replace package surface with layered v5 exports`
4. `feat: add shared design tokens and theme layers`
5. `feat: add optional typography and reset layers`
6. `feat!: add accessible design system primitives`
7. `test: add package contracts and accessibility coverage`
8. `docs: document v5 usage and consumer migrations`
9. `ci: make github releases publish tagged artifacts`

## Release authority

Implementation and local verification may proceed in this repository. Pushing
commits, publishing npm versions, creating GitHub Releases, and changing or
deploying consumer repositories remain separate explicit release actions.

## Current implementation status

- [x] Phase 1: baseline and safeguards
- [x] Phase 2: package boundaries
- [x] Phase 3: design tokens
- [x] Phase 4: CSS layers and typography
- [x] Phase 5: initial React primitives
- [x] Phase 6: documentation, tests, and Storybook coverage
- [x] Phase 7: release workflow
- [ ] Phase 8: prerelease publication and consumer migrations
- [ ] Phase 9: stable release
