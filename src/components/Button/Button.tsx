import Link from 'next/link';
import './global.css';

type ButtonProps = {
    buttonText: string;
    buttonLink?: never;
    clickHandler: () => void;
};

type ButtonLinkProps = {
    buttonText: string;
    buttonLink: string;
    clickHandler?: never;
}    

export default function Button(props: ButtonProps | ButtonLinkProps) {
    return (
        <>
        {props.buttonLink && <Link className='buttonLink' data-testid='button' href={props.buttonLink}>{props.buttonText}</Link>}
        {(!props.buttonLink && props.clickHandler) && <button className='button' onClick={props.clickHandler} data-testid='button'>{props.buttonText}</button>}
        </>
    );
}