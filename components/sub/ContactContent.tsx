"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface contactProps {
    src: string;
    width: number;
    height: number;
    index: number;
    text: string;
    name: string;
    dtext: string;
}

const ContactContent = ({ src, width, height, text, name, dtext, index }: contactProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const animationDelay = 0.3

    return (
        <motion.div
            ref={ref}
            initial='hidden'
            variants={imageVariants}
            animate={inView ? 'visible' : 'hidden'}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className='w-full md:w-auto'
        >
            <div className='card flex flex-row w-full h-12 justify-center items-center rounded-xl p-4 gap-2 bg-gradient-to-r from-indigo-900 to-sky-900'>
                <div className='flex bg-white rounded-full'>
                    <Image
                        src={src}
                        width={width/1.5}
                        height={height}
                        alt={''}
                    />
                </div>
                <div className='flex'><p className='text-gray-200'> <Link href={text} target='_blank'>{name} : {dtext}</Link></p></div>
                <div className='flex'>
                    <button type="button" onClick={() => {navigator.clipboard.writeText(text)}}><ClipboardDocumentListIcon className='h-5 w-5 text-gray-100' /></button>
                </div>
            </div>

        </motion.div>
        
    )
}

export default ContactContent;