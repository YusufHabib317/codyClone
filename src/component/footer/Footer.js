import "./footer.css";

import { BsDiscord, BsTwitter } from "react-icons/bs";

import logo from "./../../assets/photos/logo.svg";

const supportList = [
  {
    id: 1,
    item: "Help",
  },

  {
    id: 2,
    item: "Use Cases",
  },
  {
    id: 3,
    item: "Enterprise",
  },
  {
    id: 4,
    item: "API",
  },
  {
    id: 5,
    item: "Community",
  },
];
const aboutList = [
  {
    id: 1,
    item: "  Affiliates",
  },

  {
    id: 2,
    item: "Terms & Conditions",
  },
  {
    id: 3,
    item: "Privacy Policy",
  },
  {
    id: 4,
    item: "Log In",
  },
  {
    id: 5,
    item: "Sign Up",
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#121324] flex md:flex-row flex-col items-center justify-between p-10">
        <div className="flex items-center justify-between gap-5 flex-col">
          <img src={logo} alt="logo" />
          <p className="text-[1.2rem] text-font_white hover:text-main_pink cursor-pointer">
            support@meetcody.ai
          </p>
          <div className="flex-center mt-7 space-x-5 text-[2rem] ">
            <div
              className="bg-font_white hover:text-main_blue text-[#121324] cursor-pointer
                    w-[3rem] h-[3rem] rounded-full flex-center transition-all"
            >
              <BsTwitter />
            </div>
            <div
              className="bg-font_white  hover:text-main_blue text-[#121324] cursor-pointer
                       w-[3rem] h-[3rem] rounded-full flex-center transition-all"
            >
              <BsDiscord />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 text-font_white py-5 ">
          <h3 className="mb-4 text-[1.2rem] sm:text-[1.4rem] md:self-start">
            About
          </h3>
          <ul className="flex flex-col items-center gap-3">
            {aboutList.map((ele, idx) => {
              return (
                <li
                  key={idx}
                  className="text-[0.95rem] sm:text-[1.1rem] md:self-start hover:text-main_blue transition-all cursor-pointer"
                >
                  {ele.item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-5 text-font_white py-5 bg-[#]">
          <h3 className="mb-4 text-[1.2rem] sm:text-[1.4rem] md:self-start">
            Support
          </h3>
          <ul className="flex flex-col items-center gap-3 ">
            {supportList.map((ele, idx) => {
              return (
                <li
                  key={idx}
                  className="text-[0.95rem] sm:text-[1.1rem] md:self-start hover:text-main_blue transition-all cursor-pointer"
                >
                  {ele.item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex items-center flex-wrap text-font_white gap-5 bg-[#121324] flex-center py-10">
        <span className="px-3 py-1 hover:px-3 hover:py-1 hover:bg-font_white hover:text-[#121324] cursor-pointer; text-main_blue">
          Englsh
        </span>
        <span className="px-3 py-1 hover:px-3 hover:py-1 hover:bg-font_white hover:text-[#121324] cursor-pointer; text-font_white">
          Español
        </span>
        <span className="px-3 py-1 hover:px-3 hover:py-1 hover:bg-font_white hover:text-[#121324] cursor-pointer; text-font_white">
          Français
        </span>
        <span className="px-3 py-1 hover:px-3 hover:py-1 hover:bg-font_white hover:text-[#121324] cursor-pointer; text-font_white">
          Deutsch
        </span>
        <span className="px-3 py-1 hover:px-3 hover:py-1 hover:bg-font_white hover:text-[#121324] cursor-pointer; text-font_white">
          日本語
        </span>
        <span className="px-3 py-1 hover:px-3 hover:py-1 hover:bg-font_white hover:text-[#121324] cursor-pointer; text-font_white">
          한국어
        </span>
        <span className="px-3 py-1 hover:px-3 hover:py-1 hover:bg-font_white hover:text-[#121324] cursor-pointer; text-font_white">
          한국어
        </span>
        <span className="px-3 py-1 hover:px-3 hover:py-1 hover:bg-font_white hover:text-[#121324] cursor-pointer; text-font_white">
          Português
        </span>
      </div>
    </>
  );
};

export default Footer;
