import Link from 'next/link';
import './global.css';

type ButtonProps = {
    buttonText: string;
    buttonLink?: never;
    clickHandler: () => void;
    disabled?: boolean;
};

type ButtonLinkProps = {
    buttonText: string;
    buttonLink: string;
    clickHandler?: never;
    disabled?: boolean;
}    

export default function Button(props: ButtonProps | ButtonLinkProps) {
    const { buttonText, buttonLink, clickHandler, disabled = false } = props;
    return (
        <>
        {buttonLink && <Link className={disabled ? 'disabled' : 'button'} data-testid='link' href={buttonLink}>{buttonText}</Link>}
        {(!buttonLink && clickHandler) && (
            <button
                className={disabled ? 'disabled' : 'button'}
                onClick={disabled ? undefined : clickHandler}
                data-testid='button'
                disabled={disabled}
            >
                {buttonText}
            </button>
        )}
        </>
    );
}