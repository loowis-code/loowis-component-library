import './global.css';
import Image from 'next/image';
import Button from '../Button';

type PolaroidProps = {
    filename: string;
    alt?: string;
    caption?: string;
    links?: { href: string, text: string }[];
};

export default function Polaroid(props: PolaroidProps) {
    return (
        <figure className='polaroidFrame' data-testid='polaroid'>
                <Image src={props.filename} alt={props.alt} className='polaroidImage' height={300} width={300}/>
                {props.links && 
                    <div className='polaroidLinks'>
                        {props.links.map((link, index) => (
                            <Button key={index} buttonLink={link.href} buttonText={link.text}/>
                        ))}
                    </div>
                }
                {props.caption && <figcaption className='polaroidName'>{props.caption}</figcaption>}


        </figure>
    );
}