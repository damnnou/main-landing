import React from "react";

const ArrowIcon = ({ className }: { className?: string }) => {
    return (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_435_85)">
                <rect width="38" height="38" rx="6" fill="white"></rect>
                <path d="M16.4844 14.1992H24.1733" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path>
                <path d="M24.1719 21.8868V14.1992" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path>
                <path
                    d="M14.5781 23.7996L23.3698 15.0078"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_435_85">
                    <rect width="38" height="38" rx="19" fill="white"></rect>
                </clipPath>
            </defs>
        </svg>
    );
};

export default ArrowIcon;
