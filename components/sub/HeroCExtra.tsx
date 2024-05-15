"use client";

import React from 'react';
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const HeroCExtra = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromRight(0.8)}
      className=""
    >

        <img className='img-myprof rounded-full absolute z-10 shadow-lg shadow-cyan-900' src='./prof.png' alt='image not supported' />
        <img className='img-myprof-svg overflow-hidden animate-spin-slow' src="./ccchaos.svg" alt="Image not supported" />

    </motion.div>
  )
}

export default HeroCExtra;