import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomBoldHeadings from '../common/CustomBoldHeadings';
import CustomHeading from '../common/CustomHeading';

const GrowthPartners = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(1);

    const tabNames = ['Industry Expertise', 'ROI Focused', 'Proprietary Technology'];

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
                <div className='tab-content'>
                    <img
                        src='/assets/images/png/growth-img-one.png'
                        alt='Industry Expertise'
                        className='w-full max-w-[1280px] mx-auto'
                    />
                </div>
            );
        }

        if (activeTab === 2) {
            return (
                <div className='tab-content'>
                    <img
                        src='/assets/images/png/galaxy-img.png'
                        alt='ROI Focused'
                        className='w-full max-w-[1280px] mx-auto'
                    />
                </div>
            );
        }

        if (activeTab === 3) {
            return (
                <div className='tab-content'>
                    <img
                        src='/assets/images/png/project-rader-img.png'
                        alt='Proprietary Technology'
                        className='w-full max-w-[1280px] mx-auto'
                    />
                </div>
            );
        }

        return null;
    };

    return (
        <div className='pt-[113px] pb-[60px] max'>
            <CustomBoldHeadings BoldText="The growth partner " />
            <CustomHeading CustomHeading='you’ve been looking for.' />
            <p className='mt-[43px] font-normal text-customsm text-black leading-[20px] font-maisonRegular text-center'>
                Businesses trust Venveo to power grow.
            </p>

            <div className='tabs-parent mt-[105px] max-xl:mt-16 max-lg:mt-10 max-md:mt-8 relative z-20'>
                <div className='relative flex items-center justify-center gap-[78px]'>
                    <p
                        className={`text-lg font-semibold text-black opacity-35 leading-[18px] font-maisonBold cursor-pointer ${activeTab === 1 ? 'text-black opacity-100' : ''
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Industry Expertise
                        {activeTab === 1 && (
                            <img
                                src="/assets/images/png/tabs-bottm-red-line.png"
                                alt="redline"
                                className="mx-auto absolute"
                            />
                        )}
                    </p>
                    <p
                        className={`text-lg font-semibold text-black opacity-35 leading-[18px] font-maisonBold cursor-pointer ${activeTab === 2 ? 'text-black opacity-100' : ''
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        ROI Focused
                        {activeTab === 2 && (
                            <img
                                src="/assets/images/png/tabs-bottm-red-line.png"
                                alt="redline"
                                className="mx-auto absolute"
                            />
                        )}
                    </p>
                    <p
                        className={`text-lg font-semibold text-black opacity-35 leading-[18px] font-maisonBold cursor-pointer ${activeTab === 3 ? 'text-black opacity-100' : ''
                            }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Proprietary Technology
                        {activeTab === 3 && (
                            <img
                                src="/assets/images/png/tabs-bottm-red-line.png"
                                alt="redline"
                                className="mx-auto absolute"
                            />
                        )}
                    </p>
                </div>

                <div className='mt-[57px]'>{renderTabContent()}</div>
            </div>
            <img src="/assets/images/png/tab-bg-line.png" alt="line " className='w-full absolute z-0  -translate-y-5' />
            <img src="/assets/images/png/tab-img-bottom-line.png" alt="line" className='w-full mt-2' />
        </div>
    );
};

export default GrowthPartners;
