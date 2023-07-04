import React from 'react'

const Banner = () => {
     return (
          <section className='relative'>
          <div className="">
               <img className="hidden md:block" src="./images/banner01.png" alt="pc"/>
               <img className="md:hidden" src="./images/banner01_m.png" alt="mobile"/>
          </div>
          <div className='absolute w-full top-1/3 text-center bg-brand/70'>
               <img className=" w-36 m-auto mb-4 relative -left-10" src="./images/logo2.png" alt="배너안로고" />
               {/* <p className=" text-white text-5xl ">Tottenham Hotsonny</p> */}
          </div>
     </section>
     )
}

export default Banner