import { type AnchorHTMLAttributes } from 'react';
import type { LinkComponent } from '../Button/Button';
import '../../styles/components.css';

export type WordmarkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    compact?: boolean;
    label?: string;
    linkComponent?: LinkComponent;
};

export function Wordmark({ className, compact = false, href = '/', label = 'Loowis home', linkComponent: Link, ...props }: WordmarkProps) {
    const content = 'LOOWIS'.split('').map((letter, index) => (
        <span className="loowis-wordmark__letter" aria-hidden="true" key={`${letter}-${index}`}>{letter}</span>
    ));
    const shared = {
        ...props,
        href,
        'aria-label': label,
        className: ['loowis-wordmark', compact && 'loowis-wordmark--compact', className].filter(Boolean).join(' '),
        children: content,
    };
    return Link ? <Link {...shared} /> : <a {...shared} />;
}
