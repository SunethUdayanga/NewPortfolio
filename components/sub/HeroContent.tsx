"use client";
import React from 'react';
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import AnimatedText from './AnimatedText';
import Link from 'next/link';

const DownloadResume = () => {

}


const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="mx-6 my-1 bg-black-900 rounded-lg"
        >
            <div className='section-hero flex flex-row flex-wrap lg:flex-nowrap m-2'>
                <div className="basis-2/3 h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                    <div><AnimatedText text={'Full-Stack Developer Portfolio'} classname={'"text text-gray-400 text-3xl font-bold"'} /></div>
                    <motion.div
                        // variants={slideInFromLeft(0.8)}
                        className="Welcome-box"
                    >
                        {/* <AnimatedText text={'Full-Stack Developer Portfolio'} classname={'"text text-gray-400 text-3xl font-bold"'} /> */}
                        {/* <span className="Welcome-text text-6xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-violet-600 bg-clip-text text-transparent">
                                {" "}
                                Suneth Udayanga{" "}
                            </span> */}
                    </motion.div>

                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="flex flex-col gap-6 text-6xl font-bold text-white max-w-[700px] w-auto h-auto"
                    >
                        <span>
                            Turning Complex Problems into
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Elegant Solutions..!{" "}
                            </span>

                        </span>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="text-lg text-gray-400 max-w-[650px]"
                    >
                        Undergraduate Fullstack Developer | Crafting seamless digital experiences | Proficient in Frontend Development | Eager to contribute and learn in the tech world. Let&apos;s innovate together...!
                        {/* I&apos;m a Full Stack Software Engineer with experience in Website,
                  Mobile, and Software development. Check out my projects and skills. */}
                    </motion.p>
                    <motion.a
                        variants={slideInFromLeft(1)}
                        className="inline-flex sm:w-full m-6 md:w-1/3 h-12 animate-shimmer items-center justify-center rounded-3xl shadow-md shadow-cyan-500/50 border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        href={'/assets/resume/Resume.pdf'}
                    >
                        Download Resume
                    </motion.a>
                </div>
                <div className='my-img-box w-full m-2 lg:basis-1/3 relative flex justify-center items-center transition transform translate-x-100'>

                    <motion.div
                        variants={slideInFromRight(0.8)}
                        className="w-full h-full m-2 flex justify-center items-center"
                    >
                        <Image className='img-myprof rounded-full absolute shadow-lg shadow-cyan-900' width={400} height={400} src='/prof.png' alt='image not supported' />
                        <Image className='img-myprof-svg overflow-hidden -z-10 animate-spin-slow' width={400} height={400} src="/ccchaos.svg" alt="Image not supported" />
                    </motion.div>
                </div>

            </div>
        </motion.div>

    )
}

export default HeroContent;