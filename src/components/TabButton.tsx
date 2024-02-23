import React from 'react'

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: any;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white border-b border-[#ffb826]' : 'text-[#ADB7BE]'
    return (
        <button onClick={selectTab}>
            <p className={`text-s hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton