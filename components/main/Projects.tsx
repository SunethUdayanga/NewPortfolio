import React, { useState } from 'react'
import ProjectContent from '../sub/ProjectContent'
import { projects } from '@/constants'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectText from '../sub/ProjectText';




export default function Projects() {
  return (
    <section id='projects' className='w-full py-4 px-4'>
        <div className='py-[30px]'>
        <ProjectText />
        <ProjectContent />
        </div>
    </section>
  );
}
