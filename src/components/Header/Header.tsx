import Link from 'next/link';
import { useEffect } from 'react';
import './global.css';

export default function Header() {
    useEffect(() => {
        let name = document.getElementById('name');
        if (!name) return;
        let letters = Array.from(name.children);
        let colors = ['#d95d5d', '#db8525', '#e8c43c', '#bed649', '#9ecbdb', '#c771a1'];
        letters.forEach((letter, index) => {
            (letter as HTMLElement).style.backgroundColor = colors[index];
        });
    }, []); 

    return (
        <div className='headerContainer'>
            <h1 className='name' id='name'>
                <Link className='letter' href='/'>L</Link>
                <Link className='letter' href='/'>O</Link>
                <Link className='letter' href='/'>O</Link>
                <Link className='letter' href='/'>W</Link>
                <Link className='letter' href='/'>I</Link>
                <Link className='letter' href='/'>S</Link>
            </h1>
            <nav className='navTabs'>
                <Link href='/all-images' className='navTab'>ALL IMAGES</Link>
                <Link href='/collections' className='navTab'>COLLECTIONS</Link>
                <Link href='/image-map' className='navTab'>IMAGE MAP</Link>
            </nav>
        </div>
    );
}