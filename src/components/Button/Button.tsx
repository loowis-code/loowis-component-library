import {
    forwardRef,
    type AnchorHTMLAttributes,
    type ButtonHTMLAttributes,
    type ComponentType,
    type MouseEvent,
    type ReactNode,
} from 'react';
import '../../styles/components.css';

type ButtonStyleProps = {
    size?: 'small' | 'medium' | 'large';
    variant?: 'outline' | 'filled' | 'danger';
    fullWidth?: boolean;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps & {
    loading?: boolean;
    loadingLabel?: string;
};

function buttonClassName({ size = 'medium', variant = 'outline', fullWidth = false }: ButtonStyleProps, className?: string) {
    return [
        'loowis-button',
        size !== 'medium' && `loowis-button--${size}`,
        variant !== 'outline' && `loowis-button--${variant}`,
        fullWidth && 'loowis-button--full',
        className,
    ].filter(Boolean).join(' ');
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { children, className, disabled, fullWidth, loading = false, loadingLabel = 'Loading', size, type = 'button', variant, ...props },
    ref,
) {
    return (
        <button
            ref={ref}
            type={type}
            className={buttonClassName({ size, variant, fullWidth }, className)}
            disabled={disabled || loading}
            aria-busy={loading || undefined}
            {...props}
        >
            {loading ? loadingLabel : children}
        </button>
    );
});

export type ButtonLinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children?: ReactNode };
export type LinkComponent = ComponentType<ButtonLinkComponentProps>;
export type ButtonLinkProps = ButtonLinkComponentProps & ButtonStyleProps & {
    linkComponent?: LinkComponent;
    disabled?: boolean;
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
    { children, className, disabled = false, fullWidth, linkComponent: LinkComponent, onClick, size, tabIndex, variant, ...props },
    ref,
) {
    const shared = {
        ...props,
        className: buttonClassName({ size, variant, fullWidth }, className),
        'aria-disabled': disabled || undefined,
        tabIndex: disabled ? -1 : tabIndex,
        onClick: disabled
            ? (event: MouseEvent<HTMLAnchorElement>) => event.preventDefault()
            : onClick,
        children,
    };

    if (LinkComponent && !disabled) return <LinkComponent {...shared} />;
    return <a ref={ref} {...shared} />;
});
