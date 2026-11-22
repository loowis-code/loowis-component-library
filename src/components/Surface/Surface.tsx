import { forwardRef, type HTMLAttributes } from 'react';
import '../../styles/components.css';

export type SurfaceProps = HTMLAttributes<HTMLDivElement>;

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(function Surface(
    { className, ...props },
    ref,
) {
    return <div ref={ref} className={['loowis-surface', className].filter(Boolean).join(' ')} {...props} />;
});
