import React, { useEffect, useState } from "react";
import { ButtonArrow, LogoIcon, SearchIcon } from "../utils/icons";
import { NAV_LIST } from "../utils/helper";

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };

        handleOverflow();
        window.addEventListener("resize", handleOverflow);

        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <nav className="flex items-center bg-transparent text-white justify-between max-w-[1920px] mx-auto">
            <a href="/" className="logo-icon relative z-40 max-w-[59px] max-sm:w-[42px] translate-y-[30px] max-lg:translate-y-0 max-lg:ps-0 ps-[57px]">
                <LogoIcon />
            </a>
            <div
                className={`flex items-center gap-12 bg-white ps-11 max-lg:ps-0 max-lg:flex-col max-lg:fixed max-lg:top-0 z-40 max-lg:w-full max-lg:h-screen max-lg:justify-center max-lg:items-center max-lg:bg-ball-blue max-lg:transition-all max-lg:duration-300 ${open ? 'max-lg:left-0 !bg-offGreen' : 'left-full'}`}>
                {NAV_LIST.map((obj, i) => (
                    <div key={i} className="relative group">
                        <a href={obj.link} className="text-black flex font-medium cursor-pointer items-center gap-1 text-customsm">
                            {obj.name} <span className="text-[6px]">{obj.icon}</span>
                        </a>
                        <div className="absolute left-0 mt-2 bg-white text-black shadow-md rounded hidden max-w-[190px] group-hover:block z-10">
                            {obj.content.map((item, index) => (
                                <a
                                    key={index}
                                    href='/'
                                    className="block px-6 py-2 hover:bg-gray-200 w-[120px]"
                                >
                                    {item.item}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
                <p className=" cursor-pointer"><SearchIcon /></p>
                <button className="flex items-center gap-1 py-8 px-[33px] bg-lightGreen text-black text-[15px] font-semibold transition-all ease-linear duration-200 hover:bg-lightGrey max-lg:p-5">
                    Let’s Talk <ButtonArrow />
                </button>
            </div>
           
            <button
                className={`hidden size-6 justify-center relative z-50 max-lg:flex flex-col overflow-hidden`}
                onClick={handleOpen}
            >
                <span
                    className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90 bg-black after:bg-black' : ''}`}
                ></span>
                <span
                    className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10  bg-black' : ''}`}
                ></span>
            </button>
        </nav>
    );
};

export default Header;
