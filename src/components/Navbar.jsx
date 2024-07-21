import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiDiscount1, CiSearch, CiUser } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsPciCardNetwork } from "react-icons/bs";


export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };
  return (
    <>
      <div
        onClick={hideSideMenu}
        className=" bg-black-overlay h-full w-full fixed duration-500"
        style={{
          opacity: toggle ? "1" : "0",
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className=" w-[400px] absolute bg-white h-full duration-500"
          style={{
            left: toggle ? "0" : "-100%",
          }}
        ></div>
      </div>

      <header className="shadow-xl p-4 z-50">
        <div className="flex max-w-[1200px] mx-auto items-center justify-between">
          <div className=" flex gap-2 items-center">
            <img
              src="https://th.bing.com/th/id/OIP.bcVq_I5iqeec5DRmO_9YiwAAAA?w=124&h=182&c=7&r=0&o=5&pid=1.7"
              alt="swiggy logo"
              width={"40px"}
            />
            <p className=" text-xl">
              Location, <span className=" font-light">Lorem, ipsum.</span>{" "}
              <FaAngleDown
                onClick={showSideMenu}
                className="inline text-[.9rem] text-2xl font-bold text-[#fc8019]"
              />
            </p>
          </div>
          <nav className="flex list-none gap-9 text-xl">
            <li>Swiggy Corporate</li>
            <li className="flex items-center gap-1 justify-center">
              <CiSearch size={25} /> Search
            </li>
            <li className="flex items-center gap-1 justify-center">
              <CiDiscount1 size={25} />
              Offers
              <sup>New</sup>
            </li>
            <li className="flex items-center gap-1 justify-center">
              <IoHelpBuoyOutline className="inline" size={25} />
              Help
            </li>
            <li className="flex items-center gap-1 justify-center">
              <CiUser className="inline" size={25} />
              Sign In
            </li>
            <li className="flex items-center gap-1 justify-center"><BsPciCardNetwork />Cart</li>
          </nav>
        </div>
      </header>
    </>
  );
}
