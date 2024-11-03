import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import { IoMdClose } from "react-icons/io";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { images } from "../constants/index.js";

const navItemInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items:["About Me", "Contact Me"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItem = ({item}) => {

const [dropdown, setDropdown] = useState(false);
const toggleDropdownHandler = () => {
  setDropdown((curSate) => {
    return !curSate;
  })

}

return (
  <li className=" relative group">
    {item.type === "link" ? (
      <>
        <a className="px-4 py-2" href="/">
          {item.name}
        </a>
        <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
          /
        </span>
      </>
    ) : (
      <div className="flex flex-col items-center">
        <button
          className="px-2 py-0 flex gap-x-1 items-center"
          onClick={toggleDropdownHandler}
        >
          <span>{item.name}</span>
          <MdOutlineKeyboardArrowDown className=" group-hover:opacity-100 lg:opacity-0" />
        </button>
        <div
          className={` ${
            dropdown ? "block" : "hidden"
          } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
        >
          <ul className="flex flex-col shadow-lg rounded-lg  overflow-hidden">
            {item.items.map((page, index) => (
              <a
              key={index}
                href="/"
                className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
              >
                {page}
              </a>
            ))}
          </ul>
        </div>
      </div>
    )}
  </li>
);
};

const Header = () => {
const [navIsVisible, setNavIsVisible] = useState(false);

const navVisibilityHandler = () => {
  setNavIsVisible((curSate) => {
    return !curSate;
  })
}




  return (
    <section className="sticky top-0 right-0 left-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-12 lg:w-full " src={images.logo} alt="logo" />
        </div>
        <div className=" lg:hidden z-50">
          {navIsVisible ? (
            <IoMdClose className="w-6 h-6" onClick={navVisibilityHandler} />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          }  transition-all duration-500 mt-[65px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed top-0 bottom-0  lg:static gap-x-9 items-center`}
        >
          <ul className="flex text-white lg:text-dark-soft items-center gap-y-4 flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemInfo.map((item) => (
              <NavItem key={item.name} item = {item} />
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-500">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
