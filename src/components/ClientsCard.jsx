import React from 'react';
import CustomHeading from '../common/CustomHeading';
import CustomBoldHeadings from '../common/CustomBoldHeadings';
import { CLIENTS_CARDS } from '../utils/helper';
import { BtnArrow } from '../utils/icons';

const ClientsCard = () => {
    return (
        <div className="mt-[101px] max-xl:mt-24 max-lg:mt-20 max-md:mt-10">
            <CustomHeading CustomHeading="Driving digital revenue for over" />
            <div className='relative max-w-[1440px] mx-auto'>
            <CustomBoldHeadings BoldText="1,400+ satisfied clients." />
                <img src="/assets/images/png/red-line.png" alt="line" className=' translate-x-[450px] max-xl:hidden' />
                </div>
            <div className="flex flex-wrap justify-between max-xl:justify-center max-xl:gap-6 mt-[88px] max-xl:mt-14 max-lg:mt-10 max-xl:m-4 max-w-[1920px] mx-auto">
                {CLIENTS_CARDS.map((obj, i) => (
                    <div
                        key={i} className={`bg-no-repeat bg-center relative bg-cover max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col !w-[440px] max-sm:!w-[390px] ${i === 1 ? "bg-cardImgTwo" : i === 2 ? "bg-cardImgThree" : "bg-cardImgOne"}`}>
                        <div className='flex flex-col bg-white w-[382px] max-sm:w-[320px] rounded-[25px] shadow-lg px-7 pt-[38px] max-sm:m-4 pb-[31px] mx-7 mt-[31px]'>
                            <div className={i === 0 ? "absolute  bg-black text-white font-semibold text-[12px] border border-solid rounded-full w-[165px] py-2 top-3 ps-3 border-black font-maisonBold" : i === 1 ? "absolute top-5 text-black font-semibold text-customsm font-maisonBold" : ""}>{obj.heading}</div>

                        <div className="mb-4">{obj.logo}</div>
                        <h3 className="font-light font-maisonLight text-custom3xl leading-[30px] max-sm:text-2xl max-w-[325px] text-black mt-6 max-sm:mt-4">
                            {obj.title}
                        </h3>
                        <p className="max-w-[315px] font-normal font-maisonRegular text-customsm text-black max-sm:pt-5 pt-[31px]">
                            {obj.description}
                        </p>
                            <button className="mt-[54px] font-maisonBold max-md:mt-9 max-sm:mt-7 font-semibold text-customsm flex items-center gap-2 transition-all ease-linear duration-200 hover:gap-6">
                            {obj.btn} <BtnArrow/>
                        </button>
                        </div>
                        <div className="flex items-center justify-center gap-12 mt-[13px] mb-[33px]">
                            <div className="">
                                <p className="text-[50px] font-sohne font-bold max-md:text-[40px] font-sohneschmal text-black leading-[44px]">{obj.leads}</p>
                                <p className="font-medium font-maisonMedium text-customsm text-black leading-[15px]">{obj.leadText}</p>
                            </div>
                            <div className="">
                                <p className="text-[50px] font-sohne max-md:text-[40px] font-bold font-sohneschmal text-black leading-[44px]">{obj.adLeads}</p>
                                <p className="font-medium font-maisonMedium text-customsm text-black leading-[15px]">{obj.adLeadsText}</p>
                            </div>
                            <div className="">
                                <p className="text-[50px] font-sohne max-md:text-[40px] font-bold font-sohneschmal text-black leading-[44px]">
                                    {obj.webTraffic}
                                </p>
                                <p className="font-medium font-maisonMedium text-customsm text-black leading-[15px]">{obj.webTrafficText}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsCard;
