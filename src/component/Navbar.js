"use client";

import { BsDiscord, BsTwitter } from "react-icons/bs";

import { HiMenu } from "react-icons/hi";
import logo from "./../assets/photos/logo.svg";
import logoWhite from "./../assets/photos/cody_logo_white.svg";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const ulList = [
  {
    id: 1,
    title: "Why Cody?",
  },
  {
    id: 2,
    title: "Use Cases",
  },
  {
    id: 3,
    title: "Pricing",
  },
  {
    id: 4,
    title: "API",
  },
  {
    id: 5,
    title: "Discord",
  },
];

function Navbar() {
  const isAboveLargeScreen = useMediaQuery("(min-width:976px)");
  const [activeSideMenu, setActiveSideMenu] = useState(false);

  const initial = { x: "300px", opacity: 0 };
  const animate = { x: 0, opacity: 1 };
  const transition = {
    type: "tween",
    duration: 0.3,
  };

  return (
    <nav className="relative flex-between w-full mx-auto py-[24px] px-[18px] bg-[#121324]">
      <div className="w-[10rem]">
        <img src={logo} alt="logo" />
      </div>
      {isAboveLargeScreen ? (
        <>
          <ul className="flex-center gap-5">
            {ulList.map((itemList) => {
              return (
                <li key={itemList.id} className="li text-font_white">
                  {itemList.title}
                </li>
              );
            })}
          </ul>
          <div className="flex-center space-x-5 mr-6">
            <li className="li">Login</li>

            <button
              className={`btn bg-main_blue text-font_white mt-3 py-3 px-12 rounded-full text-[1.3rem]  hover:bg-main_pink`}
            >
              Join Free
            </button>
          </div>
        </>
      ) : (
        <div className="text-[2.5rem] text-main_blue font-bold cursor-pointer">
          <HiMenu onClick={() => setActiveSideMenu(true)} />
        </div>
      )}

      {activeSideMenu ? (
        <motion.div
          initial={initial}
          animate={animate}
          transition={transition}
          className="absolute top-0 right-0 min-h-screen bg-main_blue text-font_white  space-y-2
                     flex-center flex-col gap-15 w-[23rem] z-50"
        >
          <div
            className="absolute ئ-10 flex-center px-9 py-7 w-5 h-5 text-[2rem] bg-white text-black top-0 right-0 cursor-pointer
            font-bold
            "
            onClick={() => setActiveSideMenu(false)}
          >
            X
          </div>
          <div className="flex-center flex-col ">
            <div className="w-[18rem]">
              <img src={logoWhite} alt="logo" />
            </div>
            <ul className="flex-col-center gap-5 my-5">
              {ulList.map((itemList) => {
                return (
                  <li key={itemList.id} className="li">
                    {itemList.title}
                  </li>
                );
              })}
            </ul>
            <div className="flex-center flex-col space-x-5 mt-5">
              <li className="li">Login</li>
              {/* <Button bg={"font_white"} text_color={"main_blue"}>
                Join Free
              </Button> */}
              <button
                className={`btn bg-font_white mt-3 py-3 px-12 rounded-full text-[1.3rem] text-main_blue`}
              >
                Join Free
              </button>
            </div>
            <div className="flex-center mt-7 space-x-5 text-[2rem] ">
              <div
                className="bg-font_white hover:text-font_white hover:bg-main_pink  text-main_blue cursor-pointer
                w-[3rem] h-[3rem] rounded-full flex-center transition-all
              "
              >
                <BsTwitter />
              </div>
              <div
                className="bg-font_white  hover:text-font_white hover:bg-main_pink text-main_blue  cursor-pointer
                  w-[3rem] h-[3rem] rounded-full flex-center transition-all
              "
              >
                <BsDiscord />
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
