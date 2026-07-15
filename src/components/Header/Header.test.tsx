import Header from './Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkProvider, type LinkComponentProps } from '../../context/LinkContext';

describe('Header', () => {
    it('renders correctly', () => {
        const tree = render(<Header navTabs={['testString']} navLinks={['/testString']}/>);
        expect(tree).toMatchSnapshot();
    });

    it('should render the header with expected elements', () => {
        const { getByTestId, getAllByTestId, getByText } = render(<Header navTabs={['testString']} navLinks={['/testString']}/>);
        expect(getByTestId('header')).toBeInTheDocument();
        expect(getAllByTestId('letter').length).toEqual(6);
        expect(getByText('testString')).toBeInTheDocument();
    });

    it('should render the header with the correct number of tabs', () => {
        const { getByTestId, getAllByTestId, getByText } = render(<Header navTabs={['testString1', 'testString2']} navLinks={['/testString1', '/testString2']}/>);
        expect(getByTestId('header')).toBeInTheDocument();
        expect(getAllByTestId('button').length).toEqual(2);
        expect(getByText('testString1')).toBeInTheDocument();
        expect(getByText('testString2')).toBeInTheDocument();
    });

    it('delegates the logo and nav links to an injected LinkProvider component instead of a plain anchor', () => {
        const RouterLink = ({ href, children, ...rest }: LinkComponentProps) => (
            <a href={href} data-router='true' {...rest}>{children}</a>
        );

        render(
            <LinkProvider component={RouterLink}>
                <Header navTabs={['testString']} navLinks={['/testString']} />
            </LinkProvider>
        );

        const letters = screen.getAllByTestId('letter');
        expect(letters.length).toEqual(6);
        letters.forEach((letter) => expect(letter).toHaveAttribute('data-router', 'true'));

        const navButton = screen.getByTestId('button');
        expect(navButton).toHaveAttribute('data-router', 'true');
    });
});