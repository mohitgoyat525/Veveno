import React from 'react'
import { FOOTER_LIST } from '../utils/helper'

const Footer = () => {
  return (
      <footer className='bg-offGreen max-lg:px-4'>
          <div className='max-w-[1321px] mx-auto pt-[90px] max-xl:pt-14 max-lg:pt-10 max-sm:pt-9'>
              <div className='flex max-xl:flex-wrap max-md:justify-center '>
                  <div className='w-8/12 max-lg:w-full flex gap-[83px] max-md:gap-5 max-sm:flex-wrap max-sm:justify-center max-sm:items-center'>
                      {FOOTER_LIST.map((obj, i) => (
                          <div key={i} className='w-3/12 max-lg:w-full'>
                              <h3 className='text-white text-xs font-medium leading-[13px] uppercase'>{obj.title}</h3>
                              <ul className='pt-5'>
                                  <li><a href="/" className='text-white font-normal font-maisonLight text-customsm leading-[30px]'>{ obj.list}</a></li>
                                  <li><a href="/" className='text-white font-normal font-maisonLight text-customsm leading-[30px]'>{ obj.listTwo}</a></li>
                                  <li><a href="/" className='text-white font-normal font-maisonLight text-customsm leading-[30px]'>{ obj.listThree}</a></li>
                                  <li><a href="/" className='text-white font-normal font-maisonLight text-customsm leading-[30px]'>{ obj.listFour}</a></li>
                                  <li><a href="/" className='text-white font-normal font-maisonLight text-customsm leading-[30px]'>{ obj.listFive}</a></li>
                              </ul>
                         </div>
                     ))}
                  </div>
                  <div className='max-md:pt-7'>
                      <h2 className='text-white text-custom3xl font-normal font-maisonLight text-center'>Get weekly data — and insights.</h2>
                      <form className='w-[449px] max-xl:max-w-[449px] max-xl:w-full mt-[35px] rounded-full border-2 flex items-center justify-between bg-transparent border-solid border-white px-7'>
                          <input type="email" required placeholder='Enter Your Email' className='placeholder:text-white placeholder:font-normal outline-none w-full  text-white placeholder:text-customsm bg-transparent py-7' />
                          <button className='bg-transparent text-[#D2F038] font-semibold text-customsm leading-5 w-28'>Get Started</button>
                      </form>
                  </div>
              </div>
          </div>
   </footer>
  )
}

export default Footer