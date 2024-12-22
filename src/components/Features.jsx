import React from 'react'
import { EnterpreneurIcon, ForbesIcon, FortuneIcon, IncIcon, WsjIcon } from '../utils/icons'

const Features = () => {
  return (
      <div className='pt-[400px] max-xl:pt-[14rem] max-md:pt-[6rem] max-sm:pt-[20rem] max-[500px]:pt-48 overflow-hidden'>
          <p className='text-customsm font-normal text-black text-center uppercase leading-[15px]'>Featured in</p>
      <div className='flex items-center mt-12 mb-[90px] max-lg:my-10 max-w-[1025px] mx-auto justify-evenly max-md:gap-9 slide-scroll-left'>
              <WsjIcon />
              <EnterpreneurIcon />
              <FortuneIcon />
              <ForbesIcon />
        <IncIcon />
        <div className='md:hidden flex items-center gap-9 slide-scroll-left'>
          <WsjIcon />
          <EnterpreneurIcon />
          <FortuneIcon />
          <ForbesIcon />
          <IncIcon />
        </div>
          </div>
<img src="/assets/images/png/features-bottom-green-line-one.png" alt="line" className='w-full' />
<img src="/assets/images/png/features-bottom-green-line-two.png" alt="line" className='w-full' />


    </div>
  )
}

export default Features