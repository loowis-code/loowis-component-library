import { fireEvent, render, screen } from '@testing-library/react';
import { Button, ButtonLink } from './Button';

describe('Button', () => {
    it('forwards native button props and handles clicks', () => {
        const onClick = jest.fn();
        render(<Button aria-label="Save changes" onClick={onClick}>Save</Button>);
        fireEvent.click(screen.getByRole('button', { name: 'Save changes' }));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('disables interaction while loading', () => {
        render(<Button loading loadingLabel="Saving">Save</Button>);
        const button = screen.getByRole('button', { name: 'Saving' });
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('aria-busy', 'true');
    });
});

describe('ButtonLink', () => {
    it('prevents disabled links from navigating', () => {
        const onClick = jest.fn();
        render(<ButtonLink href="/next" disabled onClick={onClick}>Next</ButtonLink>);
        const link = screen.getByRole('link', { name: 'Next' });
        const event = new MouseEvent('click', { bubbles: true, cancelable: true });
        link.dispatchEvent(event);
        expect(event.defaultPrevented).toBe(true);
        expect(onClick).not.toHaveBeenCalled();
        expect(link).toHaveAttribute('aria-disabled', 'true');
    });
});
