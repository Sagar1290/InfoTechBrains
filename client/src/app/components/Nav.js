"use client"
import { useState } from "react";

const DropdownItem = ({ itemName }) => {
    return (
        <a
            href="#"
            className="block px-4 py-3  hover:text-[rgb(255,93,34)]"
        >
            {itemName}
        </a>
    );
};

const Nav = ({ props }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [dropdownHovered, setDropdownHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleDropdownEnter = () => {
        setDropdownHovered(true);
    };

    const handleDropdownLeave = () => {
        setDropdownHovered(false);
    };

    return (
        <div className="relative font-bold text-[#221638] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                className="px-1 py-2 flex items-center justify-center whitespace-nowrap rounded-md  hover:text-[rgb(255,93,34)]"
            >
                {props.name}
                <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.414l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {(isHovered || dropdownHovered) && (
                <div className="absolute z-10 w-60 bg-white shadow-lg border-t-4 border-[rgb(255,93,34)]" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
                    {
                        props.itemName.map((ele, index) => {
                            return (
                                <DropdownItem key={index} itemName={ele} />
                            )
                        })
                    }
                </div>
            )}

        </div>
    );
};

export default Nav