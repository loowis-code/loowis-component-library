import Polaroid from './Polaroid';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header', () => {
    it('renders correctly', () => {
        const tree = render(<Polaroid filename='/picture.jpg' caption='Test Caption' links={[{href:'test-link', text:'Test Link'}]}/>);
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly without links', () => {
        const tree = render(<Polaroid filename='/picture.jpg' caption='Test Caption'/>);
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly without caption and with links', () => {
        const tree = render(<Polaroid filename='/picture.jpg' links={[{href:'test-link', text:'Test Link'}]}/>);
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly without caption and links', () => {
        const tree = render(<Polaroid filename='/picture.jpg'/>);
        expect(tree).toMatchSnapshot();
    });
});