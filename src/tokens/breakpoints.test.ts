import { readFileSync } from 'fs';
import { join } from 'path';
import { breakpoints } from './breakpoints';

describe('breakpoints', () => {
    it('keeps CSS custom properties in sync with the TypeScript tokens', () => {
        const css = readFileSync(join(__dirname, '..', 'styles', 'tokens.css'), 'utf8');
        const matches = [...css.matchAll(/--loowis-breakpoint-(small|medium|large):\s*(\d+)px/g)];
        const cssNameToToken = { small: 'sm', medium: 'md', large: 'lg' } as const;

        const tokensInCss = Object.fromEntries(
            matches.map(([, name, value]) => [cssNameToToken[name as keyof typeof cssNameToToken], Number(value)])
        );

        expect(tokensInCss).toEqual(breakpoints);
    });
});
