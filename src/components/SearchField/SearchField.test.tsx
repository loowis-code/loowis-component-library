import { fireEvent, render, screen } from '@testing-library/react';
import { SearchField } from './SearchField';

it('submits a trimmed search query', () => {
    const onSearch = jest.fn();
    render(<SearchField onSearch={onSearch} />);
    fireEvent.change(screen.getByRole('searchbox', { name: 'Search' }), { target: { value: '  film  ' } });
    fireEvent.submit(screen.getByRole('search'));
    expect(onSearch).toHaveBeenCalledWith('film');
});

it('generates unique accessible labels for multiple fields', () => {
    render(<><SearchField label="Films" onSearch={jest.fn()} /><SearchField label="People" onSearch={jest.fn()} /></>);
    expect(screen.getByRole('searchbox', { name: 'Films' })).toBeInTheDocument();
    expect(screen.getByRole('searchbox', { name: 'People' })).toBeInTheDocument();
});
