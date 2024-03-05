'use client'
import React, { useState } from 'react'
import NavLink from './NavLinks'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'



const NavBar: React.FC<{ language: string; onLanguageChange: (language: string) => void; translations: any }> = ({ language, onLanguageChange, translations }) => {
    const toggleLanguage = () => {
        const newLanguage = language === 'es' ? 'en' : 'es';
        onLanguageChange(newLanguage);
      };
    const [navBarOpen, setNavBarOpen] = useState(false);
    const navLinks = [
        {
            title: translations.NavBar.Link1,
            path: '#hero'
        },
        {
            title: translations.NavBar.Link2,
            path: '#about'
        },
        {
            title: translations.NavBar.Link3,
            path: '#proyects'
        },
        {
            title: translations.NavBar.Link4,
            path: '#contactForm'
        }
    ]
    const languageImagePath = language === 'es' ? '/imagenes/spain.png' : '/imagenes/united-states.png';
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#262626] bg-opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navBarOpen ? (
                            <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5'/></button>
                        ) : (
                            <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><XMarkIcon className='h-5 w-5'/></button>
                        )
                    }
                </div>
                <div className='menu hidden lg:flex lg:w-full md:block md:w-auto justify-start items-center' id='navbar'>
                    <ul className='flex p-4 lg:p-0 lg:flex-row lg:space-x-24 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex flex-row items-center justify-end -mt-[70px] lg:-mt-16 mb-6 mr-4'>
                <Image src={languageImagePath} alt={language === 'es' ? 'ES' : 'EN'} width={40} height={40} onClick={toggleLanguage} className="mr-4 cursor-pointer"/>
            </div>
            {navBarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default NavBar;