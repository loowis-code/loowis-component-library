import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import '../../styles/components.css';

export type PolaroidCardProps = HTMLAttributes<HTMLElement> & {
    image: { src: string; alt: string; loading?: 'eager' | 'lazy' };
    title?: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
};

export const PolaroidCard = forwardRef<HTMLElement, PolaroidCardProps>(function PolaroidCard(
    { actions, className, description, image, title, ...props },
    ref,
) {
    return (
        <article ref={ref} className={['loowis-surface', 'loowis-polaroid', className].filter(Boolean).join(' ')} {...props}>
            <img className="loowis-polaroid__image" src={image.src} alt={image.alt} loading={image.loading} />
            {(title || description || actions) && (
                <div className="loowis-polaroid__body">
                    {title && <h2 className="loowis-polaroid__title">{title}</h2>}
                    {description && <div className="loowis-polaroid__description">{description}</div>}
                    {actions && <div className="loowis-polaroid__actions">{actions}</div>}
                </div>
            )}
        </article>
    );
});
