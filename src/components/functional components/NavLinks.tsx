import React from "react";

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const section = document.getElementById(href.substring(1));
        if (section) {
            let offset = 250;
            if (window.innerWidth <= 768) {
                offset = 100;
            }
            window.scrollTo({
                top: section.offsetTop - offset,
                behavior: "smooth"
            });
        }
    };

    return (
        <a href={href} onClick={handleClick} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">{title}</a>
    );
};

export default NavLink;