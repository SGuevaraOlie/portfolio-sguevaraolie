import React from 'react'
import { motion } from 'framer-motion';

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: any;
}

const variants = {
    default: { width: 0 },
    active: { width: "100%" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]'
    return (
        <button onClick={selectTab}>
            <p className={`text-s hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div animate={active ? "active" : "default"} variants={variants} className='h-1 bg-[#ffb826]'></motion.div>
        </button>
    )
}

export default TabButton