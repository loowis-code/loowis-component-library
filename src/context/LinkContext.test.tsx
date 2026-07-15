import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkProvider, useLinkComponent, type LinkComponentProps } from './LinkContext';

function Consumer(props: LinkComponentProps) {
    const Link = useLinkComponent();
    return <Link {...props} />;
}

describe('LinkContext', () => {
    it('defaults to a plain anchor tag when no provider is present', () => {
        render(<Consumer href='/test'>Test</Consumer>);
        const link = screen.getByText('Test');
        expect(link.tagName).toBe('A');
        expect(link).toHaveAttribute('href', '/test');
    });

    it('renders the provided component instead of the default anchor', () => {
        const CustomLink = ({ href, children }: LinkComponentProps) => (
            <a href={href} data-testid='custom-link'>{children}</a>
        );

        render(
            <LinkProvider component={CustomLink}>
                <Consumer href='/test'>Test</Consumer>
            </LinkProvider>
        );

        expect(screen.getByTestId('custom-link')).toBeInTheDocument();
    });
});
