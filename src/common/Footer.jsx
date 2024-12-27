import React from 'react'
import { FOOTER_LIST } from '../utils/helper'

const Footer = () => {
  return (
      <footer className='bg-offGreen '>
          <div className='max-w-[1321px] mx-auto pt-[90px]'>
              <div className='flex items-center'>
                  <div className='w-8/12 max-md:w-full flex gap-[83px]'>
                      {FOOTER_LIST.map((obj, i) => (
                          <div key={i} className='w-3/12 max-sm:w-full'>
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
                  <div className=''>
                      <h2 className='text-white text-custom3xl font-normal font-maisonLight text-center'>Get weekly data — and insights.</h2>
                      <form className='w-[449px] mt-[35px] rounded-full border-2 flex items-center justify-between bg-transparent border-solid border-white px-7'>
                          <input type="email" required placeholder='Enter Your Email' className='placeholder:text-white placeholder:font-normal outline-none w-full  text-white placeholder:text-customsm bg-transparent py-7' />
                          <button className='bg-transparent text-[#D2F038] font-semibold text-customsm leading-5 w-24'>Get Started</button>
                      </form>
                  </div>
              </div>
          </div>
   </footer>
  )
}

export default Footer