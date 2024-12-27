import React from 'react'
import CustomBoldHeadings from '../common/CustomBoldHeadings'
import { BtnArrow } from '../utils/icons'
import { LEARN_US_LIST } from '../utils/helper'

const LearnFrom = () => {
  return (
      <div className='mt-[109px] mb-[59px] max-xl:mt-20 max-md:my-14 max-sm:my-10'>
          <CustomBoldHeadings BoldText='Learn from us.' />
          <p className='text-black font-maisonRegular font-normal text-customsm text-center leading-[20px]'>Digital marketing resources from Venveo to help you grow.</p>
          <div className='flex items-center justify-center mt-9 max-lg:mt-6 max-sm:mt-5'>
              <button className='bg-transparent text-customsm font-semibold text-black font-maisonBold flex gap-2 hover:gap-4 transition-all ease-linear duration-200 items-center justify-center'>See All <BtnArrow /></button>
          </div>
          <div className='mt-20 max-xl:mt-16 max-lg:mt-12 max-md:mt-8 max-sm:mt-6'>
              <img
                  src="/assets/images/png/yellow-green-line.png"
                  alt="yellow-line"
                  className="w-full absolute -z-10 translate-y-28"/>
              <div className='relative max-w-[1322px] mx-auto w-full'>
                  <img src="/assets/images/webp/learn-from-us-img.webp" alt="team-work" className='w-full max-w-[1322px] mx-auto relative max-md:hidden' />
                  <img src="/assets/images/png/sm-learn-more-img.png" alt="team-work" className='w-full max-w-[1322px] mx-auto relative  md:hidden' />
              <div className='bg-white border border-solid rounded-3xl px-7 pt-9 pb-8 absolute left-[29px] bottom-[31px] max-sm:left-[19px] max-sm:bottom-[19px] w-full max-w-[382px] max-md:max-w-[339px]'>
                  <div>
                      {LEARN_US_LIST.map((obj, i) => (
                          <div className='' key={i}>
                              <h4 className='text-customsm font-semibold leading-[20px] text-[#00AFB5] uppercase font-maisonLight'>{obj.heading}</h4>
                              <h3 className='text-black font-light text-custom3xl leading-[30px] max-w-[325px] pt-4 font-maisonLight'>{obj.discription}</h3>
                              <p className='text-black font-normal text-customsm leading-5 max-w-[315px] pt-4 font-maisonRegular'>{obj.discriptionTwo}</p>
                              <button className='bg-transparent text-customsm font-semibold text-black mt-[28px] font-maisonBold flex gap-2 hover:gap-4 transition-all ease-linear duration-200 items-center justify-center'>{obj.btn}<BtnArrow/></button>
                          </div>
                      ))}
                  </div>
                  </div>
                  </div>
          </div>
    </div>
  )
}

export default LearnFrom