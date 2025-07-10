import './global.css';
import Button from '../Button';

type PolaroidProps = {
    filename: string;
    alt?: string;
    title?: string;
    caption?: string;
    links?: { href: string, text: string }[];
};

export default function Polaroid(props: PolaroidProps) {
    return (
        <div className='imageContainer'>
            <img
                src={props.filename}
                alt={props.alt}
                className='image'
            />
            <div className='description'>
                <div className='descriptionHeader'>
                    {props.title && <h5 className='thumbnailTitle'>{props.title}</h5>}
                    {props.links && props.links.length > 0 && (
                        <div className='buttonContainer'>
                            {props.links.map((link, index) => (
                                <Button
                                    key={index}
                                    buttonText={link.text}
                                    buttonLink={link.href}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {props.caption && <p className='caption'>{props.caption}</p>}
            </div>
        </div>
    );
}