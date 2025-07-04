import './global.css';
import Button from '../Button';

type PolaroidProps = {
    filename: string;
    alt?: string;
    caption?: string;
    links?: { href: string, text: string }[];
};

export default function Polaroid(props: PolaroidProps) {
    return (
        <article className='polaroidContainer' data-testid='polaroid'>
            <div className='polaroid'>
                <img src={props.filename} alt={props.alt} className='image'/>
                {props.links && 
                    <div className='polaroidLinks'>
                        {props.links.map((link, index) => (
                            <Button key={index} buttonLink={link.href} buttonText={link.text}/>
                        ))}
                    </div>
                }
                {props.caption && <p className='polaroidName'>{props.caption}</p>}  
            </div>
        </article>
    );
}