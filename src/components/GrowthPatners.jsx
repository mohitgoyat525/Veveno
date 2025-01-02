import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomBoldHeadings from '../common/CustomBoldHeadings';
import CustomHeading from '../common/CustomHeading';
import { ButtonArrow, LogoIpsumIcon, NetWorkIcon } from '../utils/icons';

const GrowthPartners = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(3);

    const tabNames = ['industry-expertise', 'roi-focused', 'proprietary-technology'];

    useEffect(() => {
        const tabParam = searchParams.get('tab');
        const tabIndex = tabNames.findIndex((name) => name === tabParam);
        if (tabIndex >= 0) {
            setActiveTab(tabIndex + 1);
        }
    }, [searchParams]);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        setSearchParams({ tab: tabNames[tabIndex - 1] });
    };

    const renderTabContent = () => {
        if (activeTab === 1) {
            return (
                <div className='bg-cover bg-no-repeat bg-center xl:bg-tabOneBgImg max-xl:bg-tabOneSmImg w-full max-w-[1280px] max-xl:h-full h-[720px] mx-auto'>
                    <div className='ps-[79px] pt-[75px] max-xl:p-12 max-md:p-8 max-sm:p-5'>
                        <h3 className='text-white font-bold text-custom8xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-sohne leading-[70px] max-w-[415px] uppercase'>the smartest minds in the
                            industry</h3>
                        <p className='max-w-[360px] font-light text-custom3xl max-md:text-2xl text-white leading-[30px]'>Answer our questions and listen to our answers.</p>
                        <p className='max-w-[360px] mt-[31px] font-normal text-customsm font-maisonRegular leading-[20px] text-white'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                        <button className='transition-all ease-linear duration-200 hover:bg-offGreen max-lg:mb-6 max-sm:px-5 max-sm:py-4 max-sm:max-w-[245px] text-white font-medium font-maisonMedium text-customsm flex items-center py-[34.84px] px-[32px] border border-solid max-w-[256px] bg-[#FF4242] border-[#FF4242] gap-[10px] mt-[58px]'><NetWorkIcon /> Subscribe to Podcast <span className='text-[6px]'>▼</span></button>
                        <div>
                            <img src="/assets/images/png/patners-logo-img.png" alt="logo" className='  xl:hidden mx-auto' />
                            <img src="/assets/images/png/tab-one-card.png" alt="card"  className='xl:hidden max-w-[320px] max-[425px]:max-w-[295px] mt-5 mx-auto' />
                        </div>
                  </div>
                </div>
          );
        }

        if (activeTab === 2) {
            return (
                <div className='bg-cover bg-no-repeat bg-center xl:bg-tabTwoBgImg max-xl:bg-tabTwoSmImg w-full max-w-[1337px] max-xl:h-full h-[720px] mx-auto'>
                    <div className='pt-[75px] ps-[89px] max-xl:p-12 max-md:p-8 max-sm:p-5'>
                    <h3 className='text-white font-bold text-custom8xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-sohne leading-[70px]'>Proven Results</h3>
                        <p className='max-w-[360px] font-light text-custom3xl max-md:text-2xl max-xl:pb-7 text-white leading-[30px]'>Not hopes and prayers.</p>
                        <img src="/assets/images/png/data-group.png" alt="data"  className='xl:hidden mx-auto'/>
                        </div>
                </div>
            );
        }

        if (activeTab === 3) {
            return (
                <div className='xl:bg-tabThreeBgImg max-md:p-4 max-xl:bg-tabThreeSmImg max-xl:h-full bg-cover bg-center bg-no-repeat w-full max-w-[1337px] h-[720px] mx-auto'>
                    <div className='pt-[75px] ps-[79px] flex items-center justify-between max-md:flex-wrap max-xl:p-12 max-md:p-0 '>
                    <div className='flex-col flex'>
                        <h3 className='text-white font-bold text-custom8xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-sohne leading-[70px]'>Project radar</h3>
                        <p><LogoIpsumIcon /></p>
                        <p className='pt-[162px] max-xl:pt-24 max-lg:pt-16 max-md:pt-11 max-sm:pt-8 max-w-[360px] font-light text-custom3xl max-md:text-2xl text-white leading-[30px]'>Lorem ipsum what this
                            product actually does.</p>
                        <p className='font-normal text-customsm leading-[20px] text-white font-maisonLight max-w-[360px] mt-[14px]'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                        <button className='transition-all ease-linear duration-200 hover:bg-offGreen max-xl:mb-6 mt-[57px] flex items-center text-black text-customsm font-semibold leading-[15px] py-[31px] gap-[10px] px-[28px] max-md:px-6 border border-solid bg-[#D2F038] border-[#D2F038] max-w-[274px] max-sm:max-w-[265px] max-sm:py-8'>Call to Action Somewhere <ButtonArrow /> </button>
                        
                    </div>
                    <div className='xl:hidden'>
                        <img src="/assets/images/png/card-data-img.png" alt="card-data"/>
                        </div>
                        </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className='pt-[113px] pb-[60px]  max-lg:pt-20 max-md:pt-16 max-sm:py-10 max-sm:px-4'>
            <CustomBoldHeadings BoldText="The growth partner " />
            <CustomHeading CustomHeading='you’ve been looking for.' />
            <p className='mt-[43px] font-normal text-customsm text-black leading-[20px] font-maisonRegular text-center'>
                Businesses trust Venveo to power grow.
            </p>

            <div className='tabs-parent mt-[105px] max-xl:mt-16 max-lg:mt-10 max-md:mt-8 relative z-20'>
                <div className='relative max-md:overflow-x-scroll max-md:mx-auto max-md:gap-7 flex items-center max-sm:justify-start justify-center gap-[78px] max-md:pb-6'>
                    <p
                        className={`text-lg max-sm:text-base font-semibold  max-md:whitespace-nowrap text-black opacity-35 leading-[18px] font-maisonBold cursor-pointer ${activeTab === 1 ? 'text-black !opacity-100' : ''
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Industry Expertise
                        {activeTab === 1 && (
                            <img
                                src="/assets/images/png/tabs-bottm-red-line.png"
                                alt="redline"
                                className="mx-auto absolute max-md:hidden"
                            />
                        )}
                    </p>
                    <p
                        className={`text-lg max-sm:text-base font-semibold max-md:whitespace-nowrap text-black opacity-35 leading-[18px] font-maisonBold cursor-pointer ${activeTab === 2 ? 'text-black !opacity-100' : ''
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        ROI Focused
                        {activeTab === 2 && (
                            <img
                                src="/assets/images/png/tabs-bottm-red-line.png"
                                alt="redline"
                                className="mx-auto absolute -translate-x-6 max-md:hidden"
                            />
                        )}
                    </p>
                    <p
                        className={`text-lg max-sm:text-base font-semibold max-md:whitespace-nowrap text-black opacity-35 leading-[18px] font-maisonBold cursor-pointer ${activeTab === 3 ? 'text-black !opacity-100' : ''
                            }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Proprietary Technology
                        {activeTab === 3 && (
                            <img
                                src="/assets/images/png/tabs-bottm-red-line.png"
                                alt="redline"
                                className="mx-auto absolute max-md:hidden"
                            />
                        )}
                    </p>
                </div>

                <div className='mt-[57px]'>{renderTabContent()}</div>
            </div>
            <img src="/assets/images/png/tab-bg-line.png" alt="line " className='w-full absolute z-0  -translate-y-5 max-sm:hidden' />
            <img src="/assets/images/png/tab-img-bottom-line.png" alt="line" className='w-full mt-2 max-sm:hidden' />
        </div>
    );
};

export default GrowthPartners;
