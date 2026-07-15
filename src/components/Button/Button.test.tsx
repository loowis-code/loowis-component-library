import Button from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkProvider, type LinkComponentProps } from '../../context/LinkContext';

describe('Button', () => {
    it('renders correctly as a button', () => {
        const tree = render(<Button buttonText='TEST' clickHandler={() => console.log('hello')}/>);
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly as a link', () => {
        const tree = render(<Button buttonText='TEST' buttonLink='/test'/>);
        expect(tree).toMatchSnapshot();
    });

    it('delegates link rendering to an injected LinkProvider component instead of a plain anchor', () => {
        const RouterLink = ({ href, children, ...rest }: LinkComponentProps) => (
            <a href={href} data-router='true' {...rest}>{children}</a>
        );

        render(
            <LinkProvider component={RouterLink}>
                <Button buttonText='TEST' buttonLink='/test' />
            </LinkProvider>
        );

        const link = screen.getByTestId('button');
        expect(link).toHaveAttribute('data-router', 'true');
        expect(link).toHaveAttribute('href', '/test');
    });
});