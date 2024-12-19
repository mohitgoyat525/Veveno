import React, { useEffect, useState } from "react";
import { ButtonArrow, LogoIcon, SearchIcon } from "../utils/icons";
import { NAV_LIST } from "../utils/helper";

const Header = () => {
    const [open, setOpen] = useState(false);

    // Handle body overflow when the menu is open
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
            <a href="/" className="relative z-40 max-w-[59px]">
                <LogoIcon />
            </a>
            <div
                className={`flex items-center gap-12 bg-white ps-11 max-lg:ps-0 max-lg:flex-col max-lg:fixed max-lg:top-0 z-40 max-lg:w-full max-lg:h-screen max-lg:justify-center max-lg:items-center max-lg:bg-ball-blue max-lg:transition-all max-lg:duration-300 ${open ? 'bg-darkGreen max-lg:left-0' : 'left-full'}`}
            >
                {NAV_LIST.map((obj, i) => (
                    <div key={i} className="relative group">
                        <p className="text-black font-semibold cursor-pointer">
                            {obj.name}
                        </p>
                        <div className="absolute left-0 mt-2 bg-white text-black shadow-md rounded hidden group-hover:block z-10">
                            {obj.content.map((item, index) => (
                                <a
                                    key={index}
                                    href='/'
                                    className="block px-6 py-2 hover:bg-gray-200"
                                >
                                    {item.item}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
                <p><SearchIcon /></p>
                <button className="flex items-center py-8 px-[33px] bg-[#D2F038] text-black text-[15px] font-semibold">
                    Let’s Talk <ButtonArrow />
                </button>
            </div>
           
            <button
                className={`hidden size-6 justify-center relative z-50 max-lg:flex flex-col overflow-hidden`}
                onClick={handleOpen}
            >
                <span
                    className={`w-6 transition-all duration-300 h-0.5 bg-black mb-1 rounded-md ${open ? 'translate-x-10' : ''}`}
                ></span>
                <span
                    className={`w-6 transition-all duration-300 h-0.5 bg-black mb-1 rounded-md relative after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`}
                ></span>
                <span
                    className={`w-6 transition-all duration-300 h-0.5 bg-black rounded-md ${open ? '-translate-x-10' : ''}`}
                ></span>
            </button>
        </nav>
    );
};

export default Header;
