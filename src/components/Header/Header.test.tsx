import Header from './Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

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
        expect(getAllByTestId('navTab').length).toEqual(2);
        expect(getByText('testString1')).toBeInTheDocument();
        expect(getByText('testString2')).toBeInTheDocument();
    });
});