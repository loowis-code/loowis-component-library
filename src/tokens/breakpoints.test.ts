import { readFileSync } from 'fs';
import { join } from 'path';
import { breakpoints } from './breakpoints';

describe('breakpoints', () => {
    it('keeps breakpoints.css @custom-media tokens in sync with breakpoints.ts', () => {
        const css = readFileSync(join(__dirname, 'breakpoints.css'), 'utf8');
        const matches = [...css.matchAll(/@custom-media\s+--bp-(\w+)\s+\(width\s*<=\s*(\d+)px\)/g)];

        const tokensInCss = Object.fromEntries(
            matches.map(([, name, value]) => [name, Number(value)])
        );

        expect(tokensInCss).toEqual(breakpoints);
    });
});
