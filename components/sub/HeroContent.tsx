"use client";
import React from 'react';
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="m-6 bg-black-900 rounded-lg"
        >
            <div className='section-hero flex flex-row flex-wrap lg:flex-nowrap m-2'>
                <div className="basis-2/3 h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                    {/* <motion.div
                  variants={slideInFromTop}
                  className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                  <h1 className="Welcome-text text-[13px]">
                    Fullstack Developer Portfolio
                  </h1>
                </motion.div> */}

                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                        <span>
                            Providing
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                the best{" "}
                            </span>
                            project exprience
                        </span>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                        Undergraduate Fullstack Developer | Crafting seamless digital experiences | Proficient in Frontend Development | Eager to contribute and learn in the tech world. Let&apos;s innovate together...!
                        {/* I&apos;m a Full Stack Software Engineer with experience in Website,
                  Mobile, and Software development. Check out my projects and skills. */}
                    </motion.p>
                    <motion.a
                        variants={slideInFromLeft(1)}
                        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                    >
                        Learn More!
                    </motion.a>
                </div>
                <div className='my-img-box w-full lg:basis-1/3 relative flex justify-center items-center transition transform translate-x-100'>

                    <motion.div
                        variants={slideInFromRight(0.8)}
                        className="w-full h-full flex justify-center items-center"
                    >
                        <img className='img-myprof rounded-full absolute z-10 shadow-lg shadow-cyan-900' src='/prof.png' alt='image not supported' />
                        <img className='img-myprof-svg overflow-hidden animate-spin-slow' src="/ccchaos.svg" alt="Image not supported" />
                    </motion.div>
                </div>

            </div>



        </motion.div>

    )
}


export default HeroContent;