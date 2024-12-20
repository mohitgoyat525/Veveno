import React from 'react'
import Header from '../common/Header'
import { HeroBgLayer, HeroBgLayerTwo, HeroBgMobileLayer} from '../utils/icons'

const Hero = () => {
  return (
    <div className='bg-offGreen h-[869px] max-xl:h-auto'>
      <div className=' relative max-w-[1920px] mx-auto max-lg:p-4 '>
        <p className=' absolute top-0 left-0 max-xl:hidden '><HeroBgLayer /></p>  
        <p className='absolute top-0 left-0 xl:hidden'><HeroBgMobileLayer/></p>
          <Header/>
        <div className="hero">
        <h1 className='text-custom9xl text-white max-xl:text-7xl max-lg:text-6xl relative z-30  max-w-[866px] max-sm:max-w-[365px] mx-auto font-bold leading-[104px] max-sm:leading-[52px] text-center uppercase font-sohneschmal pt-[79px] max-lg:pt-[43px]'>Make marketing a growth machine</h1>
        <p className='text-center flex items-center max-w-[566px] max-xl:ml-auto xl:mx-auto max-xl:hidden'><img src="/assets/images/png/green-line-img.png" alt="line"  className='max-sm:max-w-[146px] max-sm:translate-x-10'/></p>
        <p className='leading-[30px] text-2xl font-light text-center text-white max-w-[656px] pt-3 mx-auto max-sm:text-[22px] max-sm:pt-5'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
          <div className='border-2 justify-between border-white border-solid rounded-full max-w-[448px] mx-auto flex items-center py-[22px] px-[34px] mt-[30px]'>
            <input type="text" placeholder='Enter Your Website' className='w-full pe-4 bg-transparent text-[#FFFFFF99] font-normal text-[15px] outline-none placeholder:text-[15px] ' />
            <p className='text-white text-[15px] font-semibold cursor-pointer'>Analyze </p>
          </div>
          <div className='relative'>
          <p className='absolute right-0 bottom-[188px] max-xl:hidden'>
            <HeroBgLayerTwo/>
          </p>
          <p className=' translate-y-[66px] max-md:translate-y-12 relative'>
              <img src="/assets/images/webp/hero-sec-img.webp" alt="team-work" className='w-full max-w-[924px] mx-auto max-sm:hidden' />
              <div className='relative'>
                <img src="/assets/images/png/hero-sm-img.png" alt="team work" className='w-full sm:hidden' />
                <div className='absolute right-[13px] bottom-[-44px] sm:hidden flex items-center justify-center bg-offRed w-[107px] h-[107px] rounded-full text-black italic font-normal text-customsm'> <p className='max-w-[59px] mx-auto text-center'> MADE
                  for
                  BRANDS </p></div>
                </div>
            </p>
            </div>
        </div>
       
        </div>
    </div>
  )
}

export default Hero