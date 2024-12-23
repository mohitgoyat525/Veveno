import React from 'react';
import CustomHeading from '../common/CustomHeading';
import CustomBoldHeadings from '../common/CustomBoldHeadings';
import { MARKETING_CARD_LIST } from '../utils/helper';
import { BtnArrow } from '../utils/icons';

const Marketing = () => {
    return (
        <div className="pt-[132px] pb-[129px] max-xl:py-28 max-lg:py-20 max-md:py-16 max-sm:py-10 relative">
            <CustomHeading CustomHeading="Problems we solve." />
            <div className="max-w-[552px] mx-auto">
                <CustomBoldHeadings BoldText="Digital Marketing for today’s Business" />
            </div>
            <p className="font-normal text-customsm uppercase text-center max-w-[614px] leading-[20px] pt-6 text-black mx-auto tracking-[1px]">
                We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.
            </p>
            <img
                src="/assets/images/png/yellow-green-line.png"
                alt="yellow-line"
                className="w-full absolute -z-10 translate-y-36"
            />
            <div className="flex flex-wrap gap-x-[66px] gap-y-[57px] max-md:gap-6 justify-center pt-[88px] max-lg:pt-12 max-md:pt-10 max-sm:mx-4 max-w-[1440px] mx-auto">
                {MARKETING_CARD_LIST.map((obj, i) => (
                    <div
                        key={i}
                        className={`border-2 relative z-40 max-w-[503px] h-[506px] bg-white border-solid border-extrimeGreen rounded-[25px] pl-[48px] ps-[38px] max-md:p-10 max-sm:p-7 pt-[65px] pb-[54px] max-xl:w-full ${i===1 ? 'pe-[71px] pt-[65px] pb-[48px]':i===2 ? 'pe-[67px] pb-[39px]':i ===3? 'pe-[71px] pb-[39px]' :'pe-[71px]'}`}>
                        <div className="flex items-start gap-6 max-sm:flex-col">
                            <img src={obj.logo} alt="data-icon" className='pointer-events-none' />
                            <div>
                                <h3 className="text-black font-light text-custom3xl leading-[30px] max-w-[325px] max-sm:max-w-none">{obj.title}</h3>
                                <p className="text-black font-normal max-w-[315px] tracking-[2.5px] pt-5 leading-[20px] text-customsm max-sm:max-w-none">{obj.description}</p>
                                <ul className="list-disc pl-5 mt-7 max-w-[285px] max-sm:max-w-none">
                                    <li className='font-semibold text-black leading-[20px] text-customsm'>{obj.listOne}</li>
                                    <li className='font-semibold text-black leading-[20px] text-customsm'>{obj.listTwo}</li>
                                    <li className='font-semibold text-black leading-[20px] text-customsm'>{obj.listThree}</li>
                                </ul>
                                <button className={`mt-[52px] transition-all ease-linear duration-200 hover:gap-6 flex items-center gap-2 max-md:mt-8 max-sm:mt-6 text-customsm font-semibold leading-[20px] ${i===1 ? 'mt-[33px]' :i ===3? 'mt-[33px]' : i===2? 'mt-[29px]':  'mt-[54px]'}`}>
                                    {obj.btn} <BtnArrow/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketing;
