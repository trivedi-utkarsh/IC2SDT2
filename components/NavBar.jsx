"use client"
import Image from "next/image";
import logo from "@/public/newnewlogo.png";
import nirflogo from "@/public/nirflogo.png";
import nitdlogo from "@/assets/nitdelhi.png";
import nitdLogo from "@/public/nitdel-logo.jpg";
import ieee from "@/public/ieee_logo.png";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ConferenceHeader setOpen={setOpen} open={open} />
            <NavRibbon open={open} />
        </>
    );
}

function NavRibbon({ open }) {
    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Registration", link: "/registration" },
        { name: "Paper Submission", link: "/submissions" },
        { name: "Call For Papers", link: "/tracks" },
        { name: "Speakers", link: "/speakers" },
        { name: "Committees", link: "/committees" },
        // { name: "Supporter", link: "/sponsors" },
    ];

    return (
        <nav className={`${open ? "block" : "hidden"} md:block bg-primaryDark text-white sticky top-0 z-50`}>
            <div className="bg-primaryDark py-1.5 px-6 md:px-16">
                <ul className="md:flex md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-10 text-center md:text-left">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                className="uppercase text-md font-medium hover:text-primary20 block"
                                href={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

function ConferenceHeader({ open, setOpen }) {
    return (
        <div className="container mx-auto py-2 px-4 md:px-0">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-4">
                    <Image src={logo} alt="ICSCCAT-2024" width={180} height={60} className="w-auto h-12 md:h-16" />
                </Link>
                <div className="flex items-center space-x-4">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Image src="/ieee_logo.png" alt="IEEE" width={70} height={50} className="h-10 md:h-14 w-auto" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Image src={nitdlogo} alt="NITD" width={70} height={50} className="h-10 md:h-14 w-auto" />
                    </a>
                    <a href="https://www.nirfindia.org/Rankings/2024/EngineeringRanking.html" target="_blank" rel="noopener noreferrer">
                        <Image src={nirflogo} alt="NIRF" width={70} height={50} className="h-10 md:h-14 w-auto" />
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden focus:outline-none"
                    >
                        {!open ? (
                            <svg viewBox="0 0 116 78" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 7.6H108.6" stroke="black" strokeWidth="14.4" strokeLinecap="round" />
                                <path d="M8 38.7H108.6" stroke="black" strokeWidth="14.4" strokeLinecap="round" />
                                <path d="M8 69.9H108.6" stroke="black" strokeWidth="14.4" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 101 101" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M62.9 50.3L98 15.2C99.7 13.5 100.6 11.3 100.6 8.9C100.6 6.5 99.7 4.3 98 2.6C96.3 0.9 94.1 0 91.7 0C89.4 0 87.1 0.9 85.4 2.6L50.3 37.7L15.2 2.6C13.5 0.9 11.2 0 8.9 0C6.5 0 4.3 0.9 2.6 2.6C0.9 4.3 0 6.5 0 8.9C0 11.2 0.9 13.5 2.6 15.2L37.7 50.3L2.6 85.4C0.9 87.1 0 89.4 0 91.7C0 94.1 0.9 96.3 2.6 98C4.3 99.7 6.5 100.6 8.9 100.6C11.2 100.6 13.5 99.7 15.2 98L50.3 62.9L85.4 98C87.1 99.7 89.4 100.6 91.7 100.6C94.1 100.6 96.3 99.7 98 98C99.7 96.3 100.6 94.1 100.6 91.7C100.6 89.4 99.7 87.1 98 85.4L62.9 50.3Z"
                                    fill="black"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
