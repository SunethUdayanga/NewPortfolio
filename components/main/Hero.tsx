import React from 'react';
import HeroContent from '../sub/HeroContent';





function Hero() {
  return (
    <>

      <div className="w-full mt-20 px-6">
      <HeroContent />
      

        {/* <div className="section-hero flex flex-row flex-wrap lg:flex-nowrap m-6">
          <div className="name-text basis-2/3">
            <HeroContent />
          </div>
          <div className="my-img-box w-full lg:basis-1/3 relative flex justify-center items-center transition transform translate-x-100 ">
            <img className='img-myprof rounded-full absolute z-10 shadow-lg shadow-cyan-900' src='/prof.png' alt='image not supported' />
            <img className='img-myprof-svg overflow-hidden animate-spin-slow' src="/ccchaos.svg" alt="Image not supported" />
          </div>
        </div> */}


      </div>
    </>

  )
}

export default Hero;

