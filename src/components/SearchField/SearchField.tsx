import { forwardRef, useId, type FormEvent, type FormHTMLAttributes, type InputHTMLAttributes } from 'react';
import { Button } from '../Button/Button';
import '../../styles/components.css';

export type SearchFieldProps = Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
    label?: string;
    inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;
    onSearch: (query: string) => void;
    submitLabel?: string;
};

export const SearchField = forwardRef<HTMLFormElement, SearchFieldProps>(function SearchField(
    { className, inputProps, label = 'Search', onSearch, submitLabel = 'Search', ...props },
    ref,
) {
    const generatedId = useId();
    const inputId = inputProps?.id ?? generatedId;

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        onSearch(String(form.get('query') ?? '').trim());
    }

    return (
        <form ref={ref} role="search" className={['loowis-search', className].filter(Boolean).join(' ')} onSubmit={handleSubmit} {...props}>
            <label className="loowis-visually-hidden" htmlFor={inputId}>{label}</label>
            <input {...inputProps} id={inputId} name="query" type="search" className={['loowis-search__input', inputProps?.className].filter(Boolean).join(' ')} />
            <Button className="loowis-search__button" type="submit">{submitLabel}</Button>
        </form>
    );
});
