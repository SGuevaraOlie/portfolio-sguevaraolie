"use client"
import React, { useEffect, useState } from 'react'

interface FooterProps {
    translations: {
        Footer: {
            P1: string;
            Btn: string;
        }
    }
}

const Footer: React.FC<FooterProps> = ({ translations }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const [currentTime, setCurrentTime] = useState<string>('');
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;
            setCurrentTime(formattedTime);
        };
        const intervalId = setInterval(updateClock, 60000);
        updateClock();
        return () => clearInterval(intervalId);
    }, []);
    return (
        <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white w-full'>
            <div className='p-2 flex flex-col lg:flex-row items-center lg:items-center space-y-2 lg:space-y-0 justify-between w-full'>
                <p className='text-[#ADB7BE]'>{translations.Footer.P1}</p>
                <p id='clock' className='text-2xl text-[#ADB7BE] lg:-ml-[193px]'>{currentTime}</p>
                <button className='text-[#ADB7BE]' onClick={scrollToTop}>{translations.Footer.Btn}</button>
            </div>
        </footer>
    )
}

export default Footer