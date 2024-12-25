import React from 'react'

const PrimaryInput = () => {
  return (
      <div className='bg-cover bg-center bg-no-repeat bg-inputImg h-[209px] max-xl:h-full'>
          <div className='flex items-center pt-[60px]  max-xl:py-10 max-md:py-5 max-xl:flex-wrap justify-center max-w-[1440px] mx-auto gap-[10rem]  max-xl:gap-7 relative'>
              <div className=''>
                  <p className='text-black text-customsm font-normal font-maisonRegular'>Get a free competitive analysis on your market</p>
                  <h3 className='font-normal text-black text-[40px] font-maisonLight'>Outsmart your competition</h3>
              </div>
                  <img src="/assets/images/svg/green-curve-line.svg" alt="line" className='max-xl:hidden  absolute translate-x-[33px] translate-y-9 ' />    
              <div className=''>
                  <form className='bg-white flex items-center w-[446px] max-sm:w-[320px] justify-between border-white border rounded-full'>
                      
                          <input type="text" placeholder='Enter Your Website' required className='bg-transparent outline-none pb-4 pt-[21px] ps-[28px] text-black placeholder:text-black font-normal text-customsm' />
                          <button className='bg-transparent pe-[30px]'>Analyze</button>
                        
                  </form>
              </div>
          </div>
    </div>
  )
}

export default PrimaryInput