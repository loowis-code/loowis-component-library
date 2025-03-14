import Link from 'next/link';
import { useEffect } from 'react';
import './global.css';
import Button from '../Button';

type HeaderProps = {
    navTabs: string[];
    navLinks: string[];
};

export default function Header(props: HeaderProps) {
    useEffect(() => {
        let name = document.getElementById('name');
        if (!name) return;
        let letters = Array.from(name.children);
        let colors = ['#d95d5d', '#db8525', '#e8c43c', '#bed649', '#9ecbdb', '#c771a1'];
        letters.forEach((letter, index) => {
            (letter as HTMLElement).style.backgroundColor = colors[index];
        });

        let navTabs = document.getElementsByClassName('buttonLink');
        for (let i = 0; i < navTabs.length; i++) {
            (navTabs[i] as HTMLElement).style.setProperty('--buttonBoxShadowHover', colors[i]);
        }
    }, []); 

    return (
        <div className='headerContainer' data-testid='header'>
            <h1 className='name' id='name'>
                <Link className='letter' data-testid='letter' href='/'>L</Link>
                <Link className='letter' data-testid='letter' href='/'>O</Link>
                <Link className='letter' data-testid='letter' href='/'>O</Link>
                <Link className='letter' data-testid='letter' href='/'>W</Link>
                <Link className='letter' data-testid='letter' href='/'>I</Link>
                <Link className='letter' data-testid='letter' href='/'>S</Link>
            </h1>

            <nav className='navTabs'>
                {props.navTabs.map((tab, index) => (
                    <Button key={index} buttonLink={props.navLinks[index]} buttonText={tab}/>
                ))}
            </nav>
        </div>
    );
}