import { render, screen } from '@testing-library/react';
import { PolaroidCard } from './PolaroidCard';

it('renders semantic card content', () => {
    render(<PolaroidCard image={{ src: '/photo.jpg', alt: 'Edinburgh skyline' }} title="Edinburgh" description="At sunset" actions={<a href="/photo">View</a>} />);
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Edinburgh skyline' })).toHaveAttribute('src', '/photo.jpg');
    expect(screen.getByRole('heading', { name: 'Edinburgh' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View' })).toHaveAttribute('href', '/photo');
});
