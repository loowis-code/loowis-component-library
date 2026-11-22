import { render, screen } from '@testing-library/react';
import { Wordmark } from './Wordmark';

it('renders an accessible home link without exposing decorative letters', () => {
    render(<Wordmark href="/home" />);
    const link = screen.getByRole('link', { name: 'Loowis home' });
    expect(link).toHaveAttribute('href', '/home');
    expect(link.querySelectorAll('.loowis-wordmark__letter')).toHaveLength(6);
});
