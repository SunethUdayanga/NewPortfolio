"use client";
import * as React from 'react';
import { motion } from "framer-motion";
import { useState } from "react";
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const NavbarContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    function getMenuClasses() {
        let menuClasses = [];
        if (isOpen) {
            menuClasses = [
                'flex',
                'flex-col',
                'absolute',
                'bg-gray-900',
                'ring ring-blue-500 ring-offset-4 ring-offset-slate-900',
                'shadow-lg shadow-blue-500/50',
                '',
                'top-[60px]',
                'w-ful',
                'rounded-md',
                'right-0',
                'p-8',
                'gap-8',
            ];
        } else {
            menuClasses = ['hidden', 'md:flex'];


        }
        return menuClasses.join(' ');
    };



    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="px-4 md:px-10"
        >
            <motion.div
                variants={slideInFromTop}
                className="Navbar sticky mx-2 my-4 px-8 py-2 bg-gray-800 rounded-3xl ring-1 ring-blue-500 ring-offset-2 ring-offset-slate-900"
            >
                <nav className='bg-gray-800'>
                    <div className='flex flex-row justify-between'>
                        <div className='logo-side items-center'>
                            <Link rel="stylesheet" href="/" ><span className="Welcome-text text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                {" "}SUNETH UDAYANGA{" "}
                            </span></Link>
                        </div>
                        {/* <div className='link-side hidden md:flex items-center'> */}
                        <div className={getMenuClasses()}>
                            <Link href='#about' className='text-lg text-gray-400 mx-4 hover:text-gray-200'>About</Link>
                            <Link href='#skills' className='text-lg text-gray-400 mx-4 hover:text-gray-200'>Skills</Link>
                            <Link href='#projects' className='text-lg text-gray-400 mx-4 hover:text-gray-200'>My Projects</Link>
                            <Link href='#contact' className='text-lg text-gray-400 mx-4 hover:text-gray-200'>Contact</Link>

                        </div>
                        <div className="md:hidden flex items-center">
                            <button className='text-gray-300'
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            >
                                {isOpen ? (
                                    // Close icon
                                    <XMarkIcon className="h-8 w-8" stroke="gray" />
                                ) : (
                                    // Open icon
                                    <Bars3Icon className="h-8 w-8" stroke="gray" />
                                )}
                            </button>

                        </div>
                    </div>

                </nav>

            </motion.div>
        </motion.div>


    )
}

export default NavbarContent;


