import React from 'react'
import Header from '../common/Header'
import { HeroBgLayer, TextBottomLine } from '../utils/icons'

const Hero = () => {
  return (
    <div className='bg-[#097980] h-[869px]'>
      <div className=' relative max-w-[1920px] mx-auto p-4'>
        <p className=' absolute top-0 left-0 max-xl:hidden'><HeroBgLayer /></p>  
          <Header/>
          <div className="hero">
        <h1 className='text-custom9xl text-white max-xl:text-7xl max-lg:text-6xl  max-w-[866px] max-sm:max-w-[365px] mx-auto font-bold leading-[104px] text-center uppercase font-sohneschmal pt-[79px] max-lg:pt-10 max-md:pt-5'>Make marketing a growth machine</h1>
        <p className='text-center flex items-center max-w-[566px] max-xl:ml-auto xl:mx-auto'><TextBottomLine/></p>
        <p className='leading-[30px] text-2xl font-light text-center text-white max-w-[656px] pt-3 mx-auto max-sm:text-[22px]'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
          <div className='border-2 justify-between border-white border-solid rounded-full max-w-[448px] mx-auto flex items-center py-[22px] px-[34px] mt-7 max-sm:mx-5'>
            <input type="text" placeholder='Enter Your Website' className='w-full pe-4 bg-transparent text-[#FFFFFF99] font-normal text-[15px] outline-none placeholder:text-[15px] ' />
            <p className='text-white text-[15px] font-semibold cursor-pointer'>Analyze </p>
          </div>
          <img src="/assets/images/svg/Vector.svg" alt="layer" className=' absolute right-0 bottom-[188px] max-xl:hidden' />
          <p className=' translate-y-[66px] relative'>
            <img src="/assets/images/webp/hero-sec-img.webp" alt="team-work"  className='w-full max-w-[924px] mx-auto'/>
          </p>
        </div>
       
        </div>
    </div>
  )
}

export default Hero