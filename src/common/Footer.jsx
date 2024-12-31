import React, { useState } from 'react'
import { FOOTER_LIST,FOOTER_MOBILE_LIST ,MEDIA_ICON_LIST } from '../utils/helper'
import { FooterVenveoIcon } from '../utils/icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [mobileList, setMobileList] = useState(null)
    const listToggle = (index) => {
        setMobileList(mobileList === index ? null : index)
    }
    return (
      
      <footer className='bg-offGreen max-lg:px-4'>
          <div className='max-w-[1321px] mx-auto pt-[90px] pb-[100px] max-xl:py-14 max-lg:py-10 max-sm:py-9'>
              <div className='flex max-xl:flex-wrap-reverse max-xl:justify-center'>
                  <div className='w-8/12 max-lg:w-full flex gap-[82px] max-md:gap-5 max-sm:flex-wrap max-sm:justify-center max-sm:items-center max-md:hidden'>
                      {FOOTER_LIST.map((obj, i) => (
                          <div key={i} className='w-3/12 max-lg:w-full'>
                              <h3 className='text-white text-xs font-medium leading-[108%] uppercase font-maisonMedium'>{obj.title}</h3>
                              <ul className='pt-5'>
                                  <li><a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.list}</a></li>
                                  <li><a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.listTwo}</a></li>
                                  <li><a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.listThree}</a></li>
                                  <li><a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.listFour}</a></li>
                                  <li><a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.listFive}</a></li>
                              </ul>
                          </div>
                      ))}
                  </div>
                  <div className='w-8/12 max-lg:w-full flex gap-[82px] max-md:gap-5 max-sm:flex-wrap max-sm:justify-center max-sm:items-center md:hidden'>
                      {FOOTER_MOBILE_LIST.map((obj, i) => (
                          <div key={i} className='w-3/12 max-lg:w-full'>
                              <h3 onClick={() => listToggle(i)} className='text-lightGreen text-xs font-medium leading-[108%] uppercase font-maisonMedium'>{obj.title}</h3>
                              <ul className={`overflow-hidden duration-300 ease-linear flex flex-col gap-6 ${mobileList === i ? "max-h-[300px] pt-5" : "max-h-0"}`}>
                                  <li className='flex gap-4 items-center'>{obj.icon}<a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.list}</a></li>
                                  <li className='flex gap-4 items-center'>{obj.iconTwo}<a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.listTwo}</a></li>
                                  <li className='flex gap-4 items-center'>{obj.iconThree}<a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.listThree}</a></li>
                                  <li className='flex gap-4 items-center'>{obj.iconFour}<a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.listFour}</a></li>
                                  <li className='flex gap-4 items-center'>{obj.iconFive}<a href="/" className='text-white font-light font-maisonLight text-customsm leading-[30px] hover:text-lightGreen duration-300 ease-linear'>{obj.listFive}</a></li>
                              </ul>
                          </div>
                      ))}
                  </div>
                  <div className='max-md:pt-7 max-xl:pb-20'>
                      <h2 className='text-white text-3xl font-normal font-maisonLight text-center'>Get weekly data <span className='max-sm:block'>— and insights.</span></h2>
                      <form className='w-[449px] max-xl:max-w-[449px] max-xl:w-full mt-[35px] rounded-full border-2 flex items-center justify-between bg-transparent border-solid border-white px-7 max-md:px-5'>
                          <input type="email" required placeholder='Enter Your Email' className='placeholder:text-white placeholder:font-normal outline-none w-full  text-white placeholder:text-customsm bg-transparent py-[18px] placeholder:font-maisonRegular font-maisonRegular max-sm:py-5 text-customsm' />
                          <button className='bg-transparent text-lightGreen font-semibold text-customsm leading-[133%] w-28 font-maisonMedium'>Get Started</button>
                      </form>
                  </div>
              </div>
              <div className='pt-20 w-full flex justify-between max-xl:gap-7 items-end  max-xl:items-start px-4 max-[769px]:hidden'>
                  <div>
                      <a href="/" className='pb-0.5'><FooterVenveoIcon/> </a>
                      <p className='max-w-[415px] text-white text-customXsm font-normal font-maisonLight leading-[153%] pt-5'>Venveo is an award-winning digital marketing <span className='block'>solutions provider. Since 2003.</span>
                          ©{currentYear} Venveo</p>
                  </div>
                  <div className='flex gap-14'>
                      <ul>
                          <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium pb-0.5'>Visit</p>
                          <li className='pt-7'><a href="/" className='text-white font-light font-maisonLight text-customXsm leading-[153%]'>100 N Main Street <span className='block'>#201 </span>
                              Blacksburg, VA 24060</a></li>
                      </ul>
                      <ul>
                          <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium pb-0.5'>contact</p>
                          <li className='pt-7'><a href="mailto:info@venveo.com" className='text-white font-light font-maisonLight text-customXsm leading-[153%px] hover:text-lightGreen duration-300 ease-linear border-b border-lightGreen'>info@venveo.com</a></li>
                          <li className='pt-5'><a href="tel:+4733378901" className='text-white font-light font-maisonLight text-customXsm leading-[153%px] hover:text-lightGreen duration-300 ease-linear border-b border-lightGreen'>1 · 800 · 123 · 4567</a></li>
                      </ul>
                  </div>
                  <div className='flex flex-col gap-8 items-center'>
                      <div className='flex gap-8'>
                          <a href="/" className='text-white text-customXsm font-maisonMedium font-medium leading-[153%] hover:text-lightGreen duration-300 ease-linear'>All Rights Reserved</a>
                          <a href="/" className='text-white text-customXsm font-maisonMedium font-medium leading-[153%] hover:text-lightGreen duration-300 ease-linear'>Privacy Policy</a>
                      </div>
                      <div className='flex gap-[34px]'>
                          {MEDIA_ICON_LIST.map((obj, i) => (
                              <a key={i} href={obj.link} target='_blank' className='text-white text-customXsm font-maisonMedium font-medium leading-[153%] hover:scale-125 duration-300 ease-linear'>{obj.icon}</a>
                          ))}
                      </div>
                  </div>
              </div>
              <div className='min-[769px]:hidden pt-16 justify-center items-center flex flex-col'>
                  <div className='flex gap-14 flex-col text-center'>
                      <ul>
                          <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium'>Visit</p>
                            <li className='pt-5'><a href="/" className='text-white font-light font-maisonLight text-customsm leading-[133%]'>100 N Main Street <span className='block'>#201 </span>
                              Blacksburg, VA 24060</a></li>
                      </ul>
                      <ul>
                          <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium pb-0.5'>contact</p>
                          <li className='pt-7'><a href="mailto:info@venveo.com" className='text-white font-light font-maisonLight text-customXsm leading-[153%px] hover:text-lightGreen duration-300 ease-linear border-b border-lemon-lime'>info@venveo.com</a></li>
                          <li className='pt-5'><a href="tel:+4733378901" className='text-white font-light font-maisonLight text-customXsm leading-[153%px] hover:text-lightGreen duration-300 ease-linear border-b border-lemon-lime'>1 · 800 · 123 · 4567</a></li>
                      </ul>
                  </div>
                  <div className='flex gap-[34px] pt-16'>
                      {MEDIA_ICON_LIST.map((obj, i) => (
                          <a key={i} href={obj.link} target='_blank' className='text-white text-customXsm font-maisonMedium font-medium leading-[153%] hover:scale-125 duration-300 ease-linear media-link'>{obj.icon}</a>
                      ))}
                  </div>
                  <div className='flex items-center justify-center flex-col text-center pt-14'>
                      <a href="/" className='pb-0.5'> <FooterVenveoIcon/> </a>
                      <p className='max-w-[415px] text-white text-customXsm font-normal font-maisonLight leadin-[153%] pt-3'>Venveo is an award-winning digital marketing <span className='block'>solutions provider. Since 2003.</span>
                          ©{currentYear} Venveo</p>
                  </div>
                  <div className='flex gap-8 pt-9'>
                      <a href="/" className='text-white text-customXsm font-maisonMedium font-medium leading-[153%] hover:text-lightGreen duration-300 ease-linear'>All Rights Reserved</a>
                      <a href="/" className='text-white text-customXsm font-maisonMedium font-medium leading-[153%] hover:text-lightGreen duration-300 ease-linear'>Privacy Policy</a>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer