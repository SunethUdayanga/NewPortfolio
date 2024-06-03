'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import Image from 'next/image';
import { projects } from '@/constants';


const ProjectContent = () => {
    const [selectedId, setSelectedId] = useState('');
    return (
        <motion.div className="w-full">
            <div className="flex flex-wrap justify-center gap-4">
                {projects.map((card, index) => (
                    <motion.div
                        className={`bg-gray-800 bg-opacity-80 rounded-lg p-4 flex items-center cursor-pointer transform transition-transform duration-500 hover:scale-105 ${selectedId === card.id ? 'card-selected' : ''}`}
                        layoutId={`card-container-${card.id}`}
                        onClick={() => setSelectedId(card.id)}
                        key={card.id}
                        initial={{ scale: 1 }}
                        animate={{ scale: selectedId === card.id ? 1.1 : 1 }} // Increase scale on selected card
                        transition={{ duration: 0.01 }}
                    >
                        <div className="card-content">
                            <div className='relative w-[300px] h-[200px]'>
                                <Image src={card.mpimageUrl} className='rounded-sm shadow-sm shadow-blue-500/50 ring-1 ring-blue-800 ring-offset-2 ring-offset-slate-900' alt='' objectFit='cover' layout='fill' />
                            </div>
                            <div className='flex flex-row justify-between h-full'>
                                <div>
                                    <motion.h2 className="text-xl font-bold my-3 text-gray-300">{card.mptitle}</motion.h2>
                                    <motion.h5 className="text-sm font-bold mb-1 text-gray-400">{card.mpsubtitle}</motion.h5>
                                </div>
                                <div className='flex items-end'>
                                    <div className='bg-gray-700 px-2 mb-0 rounded-full'><h5 className='text font-bold text-gray-400'>{card.year}</h5></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-2 rounded-2xl bg-gray-900 bg-opacity-70 flex items-center justify-center p-4 pt-[60px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        exit={{ opacity: 0 }}
                    >
                        {projects.map((card, index) => (
                            card.id === selectedId && (
                                <motion.div
                                    className="bg-gray-800 rounded-lg p-4 shadow-md shadow-gray-500/30 max-w-lg mx-auto"
                                    layoutId={`card-container-${card.id}`}
                                    key={card.id}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                >
                                    <motion.div className="relative">
                                        <motion.button
                                            className="absolute right-2 bottom-0 px-2 text-center text-white bg-red-500 rounded-full"
                                            onClick={() => setSelectedId('')}
                                        >
                                            Close
                                        </motion.button>
                                        <div className='relative w-full h-[200px] md:h-[220px] mb-4'>
                                            <Image src={card.mpimageUrl} className='rounded-md shadow-sm shadow-blue-500/50 ring-1 ring-blue-500 ring-offset-2 ring-offset-slate-900' alt='' objectFit='cover' layout='fill' />
                                        </div>
                                        <motion.h2 className="text-xl font-bold mb-2 text-gray-100">{card.mptitle}</motion.h2>
                                        <motion.h5 className="text-sm font-bold mb-1 text-gray-200">{card.mpsubtitle}</motion.h5>
                                        <motion.p className="text-md text-gray-300 mb-6">{card.description}</motion.p>
                                        {/* <motion.p
                                            className="text-md text-gray-400"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            Additional content can go here!
                                        </motion.p> */}
                                    </motion.div>
                                </motion.div>
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>

    );
}

export default ProjectContent;
