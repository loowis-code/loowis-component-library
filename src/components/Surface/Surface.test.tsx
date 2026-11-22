import { render, screen } from '@testing-library/react';
import { Surface } from './Surface';

it('forwards element attributes and merges classes', () => {
    render(<Surface data-testid="surface" className="custom">Content</Surface>);
    expect(screen.getByTestId('surface')).toHaveClass('loowis-surface', 'custom');
});
