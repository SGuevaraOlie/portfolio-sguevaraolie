import React from 'react'
import NavLink from './NavLinks';

interface Link {
    path: string;
    title: string;
}

interface Props {
    links: Link[];
}

const MenuOverlay: React.FC<Props> = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {links.map((link: Link, index: number) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay;