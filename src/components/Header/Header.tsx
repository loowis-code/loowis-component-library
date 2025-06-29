import Link from 'next/link';
import { useEffect } from 'react';
import './global.css';
import Button from '../Button';

type HeaderProps = {
    navTabs: string[];
    navLinks: string[];
    handleSearch?: (query: string) => void;
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

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.querySelector('.searchInput') as HTMLInputElement;
        if (props.handleSearch) {
            props.handleSearch(input.value);
        }
    };

    return (
        <div className='headerContainer' data-testid='header'>
            {props.handleSearch && 
                <form className='searchBar' onSubmit={handleSearch} >
                    <input type='search' className='searchInput'></input>
                    <button type='submit' className='searchSubmit'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        >
                            <circle cx={11} cy={11} r={8} />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                    </button>
                </form>
            }

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