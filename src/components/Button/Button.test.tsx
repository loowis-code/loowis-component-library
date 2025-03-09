import Button from './Button';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {
    it('renders correctly as a button', () => {
        const tree = render(<Button buttonText='TEST' clickHandler={() => console.log('hello')}/>);
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly as a link', () => {
        const tree = render(<Button buttonText='TEST' buttonLink='/test'/>);
        expect(tree).toMatchSnapshot();
    });
});