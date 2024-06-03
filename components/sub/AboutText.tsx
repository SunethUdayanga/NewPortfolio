"use client";
import React from 'react';
import {motion} from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';

const AboutText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-4'>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[40px] text-white font-medium text-center'
        >
            Who Am I...?
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mt-[10px] text-center'
        >
          Simple description about me
        </motion.div>
    </div>
  )
}

export default AboutText;