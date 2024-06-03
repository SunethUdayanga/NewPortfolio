"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PaperClipIcon from '@heroicons/react/24/solid/PaperClipIcon';



const AboutContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-2">
            <dl className="">
            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }} className="bg-gray-200 bg-opacity-5 m-2 ring-1 rounded-xl p-6 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium leading-6 text-gray-200">Full name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">- Suneth Udayanga Wijewickrama</dd>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }} className="bg-gray-200 bg-opacity-5 m-2 ring-1 rounded-xl p-6 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium leading-6 text-gray-200">Age</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">- 27 years old</dd>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }} className="bg-gray-200 bg-opacity-5 m-2 ring-1 rounded-xl p-6 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium leading-6 text-gray-200">Early Interest</dt>
                    <dl className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                        <dd>- Developed a passion for computers from a young age.</dd>
                        <dd>- Explored various aspects of computing and conducted educational experiments.</dd>
                    </dl>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }} className="bg-gray-200 bg-opacity-5 m-2 ring-1 rounded-xl p-6 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium leading-6 text-gray-200">Education</dt>
                    <dl className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                        <dd>- Completed Advanced Level examinations in Kegalu Vidyalaya, Kegalle.</dd>
                        <dd>- Attended the Department of Technical Education & Training Warakapola and Completed ICT Technician NVQ Level 4. </dd>
                        <dd>- Undergraduate Bachelor of Information and Communication Technology in Rajarata University of Sri Lanka, Mihintale.</dd>
                    </dl>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }} className="bg-gray-200 bg-opacity-5 m-2 ring-1 rounded-xl p-6 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium leading-6 text-gray-200">Professional Interests</dt>
                    <dl className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                        <dd>- Keen interest in exploring new technologies and innovations in the field of Information and Communication Technology.</dd>
                        <dd>- Passionate about continuous learning and professional development.</dd>
                    </dl>
                </motion.div>

            </dl>
        </motion.div>

    );

}













// const AboutContent = () => {
//     return (
//         <div className="max-w-4xl mx-auto p-6">
//             <div>

//             </div>
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-blue-900 text-white shadow-lg rounded-lg p-8"
//           >
//             <div className="text-lg mb-4">
//               <p><strong>Name:</strong> G.R. Suneth Udayanga</p>
//               <p><strong>Age:</strong> 27 years old</p>
//             </div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="mt-6"
//             >
//               <h2 className="text-2xl font-semibold mb-2">Early Interest</h2>
//               <p className="mb-4">
//                 Developed a passion for computers from a young age. Explored various aspects of computing and conducted educational experiments.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 1 }}
//               className="mt-6"
//             >
//               <h2 className="text-2xl font-semibold mb-2">Education</h2>
//               <p className="mb-2"><strong>Advanced Level Examinations</strong></p>
//               <p className="mb-4">Attended the Department of Technical Education & Training and completed ICT Technician (NVQ Level 4) course.</p>
//               <p className="mb-4">Attended Rajarata University of Sri Lanka and graduated with a Bachelor of Information and Communication Technology (Hons) degree.</p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 1.5 }}
//               className="mt-6"
//             >
//               <h2 className="text-2xl font-semibold mb-2">Professional Interests</h2>
//               <p className="mb-4">
//                 Keen interest in exploring new technologies and innovations in the field of Information and Communication Technology. Passionate about continuous learning and professional development.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       );
//   };


export default AboutContent;