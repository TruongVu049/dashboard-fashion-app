import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { BiSolidBellRing, BiUser } from "react-icons/bi";
import SideBar from "./SideBar";
const Navbar = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <nav
        className="p-4 fixed top-0 left-0 right-0 bg-white z-50  text-gray-950
        border-b-[2px] border-solid border-gray-300 
        "
      >
        <div className="flex justify-between text-gray-950">
          <div className="flex items-center gap-2">
            <div onClick={() => setIsShow(!isShow)} className="cursor-pointer">
              <HiMiniBars3BottomLeft className="duration-150 hover:text-rose-500 text-gray-950 text-3xl" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Fashion</h2>
            </div>
          </div>
          <div className="flex gap-x-3">
            <BiSolidBellRing className=" text-2xl hover:text-rose-500 cursor-pointer" />
            <BiUser className=" text-2xl hover:text-rose-500 cursor-pointer" />
          </div>
        </div>
      </nav>
      <SideBar isShow={isShow} />
    </>
  );
};

export default Navbar;
