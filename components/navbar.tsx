"use client";
import { navLinks, siteDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [btn, setBtn] = useState(false);

    const pathName = usePathname()


    return (
        <nav className="flex font-sans max-[1100px]:px-12 fixed backdrop-blur-2xl rounded-card max-md:p-4 z-50 top-3 right-0 left-0 max-w-[1720px] w-full mx-auto items-center justify-between px-16 py-5">
            <Link href={'/'} className="flex items-center justify-center gap-2  text-primary ">
                <p className="font-bold">
                    {siteDetails.siteName}
                </p>
            </Link>
            <div className={`nav-links max-w-[950px] w-full max-[1140px]:max-w-[600px]  flex items-center justify-between ${btn ? 'max-lg:flex  rounded-card backdrop-blur-3xl absolute top-0 left-0 right-0 bottom-0 flex-col gap-5 h-screen items-center justify-center w-full max-lg:max-w-[768px] -z-10 bg-secondary-700' : 'max-lg:hidden'}`}>
                <ul className="links  flex gap-[38px] items-center justify-between text-lg  max-lg:text-[15px]  max-lg:flex-col max-lg:gap-5 ">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <a href={link.path} className={`font-sans font-medium tracking-wider text-primary flex items-center gap-1 justify-center hover:text-primary transition-all ${pathName === link.path ? " text-secondary-700 max-lg:border-b-2 max-lg:border-primary max-lg:text-primary " : ""}`}>{link.name}{link.name === "AI" ? (
                                <span className="text-sm px-1 py-0 rounded-card border-primary border text-primary hover:opacity-80">beta</span>
                            ) : ""}</a>
                        </li>
                    ))}

                </ul>

                <div className="flex items-center justify-center gap-5 max-lg:flex-col">
                    <Link href={'/sign-in'}>
                        <button className="btn-trsp">Sign In</button>

                    </Link>
                    <Link href={'/sign-up'}>
                        <button className="btn-primary">Start For Free</button>
                    </Link>
                </div>
            </div>

            {btn ? <button onClick={() => setBtn(!btn)} className="text-lg lg:hidden"><FaXmark /></button> : <button onClick={() => setBtn(!btn)} className="text-lg lg:hidden"><FaAlignJustify /></button>}


        </nav>
    )
}

export default Navbar