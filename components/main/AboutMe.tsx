import React from 'react'
import AboutText from '../sub/AboutText'
import AboutContent from '../sub/AboutContent'

export default function AboutMe() {
  return (
    <section id='about' className='w-full'>
      <div className='flex flex-col backdrop-blur-xs ring-1 rounded-3xl items-center justify-center gap-5 h-full relative overflow-hidden py-20 px-4' style={{ transform: 'scale(0.9)' }}>
        <div>
          <AboutText />
        </div>
        <div>
          <AboutContent />
        </div>
        
      </div>
    </section>

  )
}
