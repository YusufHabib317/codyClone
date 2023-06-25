import "./integer.css";

import SectionTitle from "../sectionTitle/SectionTitle";
import icon_1 from "./../../assets/photos/home-section_5-icon_1-updated.png";
import icon_10 from "./../../assets/photos/home-section_5-icon_10-active.png";
import icon_11 from "./../../assets/photos/home-section_5-icon_11-updated.png";
import icon_13 from "./../../assets/photos/home-section_5-icon_13-notion-updated.png";
import icon_2 from "./../../assets/photos/home-section_5-icon_2-updated.png";
import icon_4 from "./../../assets/photos/home-section_5-icon_4-updated.png";
import icon_5 from "./../../assets/photos/home-section_5-icon_5-updated.png";
import icon_6 from "./../../assets/photos/home-section_5-icon_6-updated.png";
import icon_7 from "./../../assets/photos/home-section_5-icon_7-updated.png";
import icon_8 from "./../../assets/photos/home-section_5-icon_8-updated.png";
import icon_9 from "./../../assets/photos/home-section_5-icon_9-active.png";

const Integrate = () => {
  return (
    <div className="bg-[#121324]">
      <div className="bg-[#20213E] Isection rounded-[2.5%] border-[5px] border-[#252646] flex-center flex-col">
        <div className="w-full text-center my-5">
          <SectionTitle>Integrate With Your Favorite Tools</SectionTitle>
          <p className="text-[#B4BCD0] opacity-85">
            Incorporate Cody into your favorite apps through our powerful API,
            allowing you to harness the full potential of your knowledge
            anywhere.
          </p>
        </div>
        <div className="flex-center flex-col md:flex-row p-6  gap-[5rem]">
          <div className="w-full flex-center flex-col gap-[5rem]">
            <div className="flex-center gap-[5rem]">
              <div className="gloy rounded-3xl m-1">
                <img src={icon_1} alt="icon1" className="" />
              </div>
              <div>
                <img
                  src={icon_4}
                  alt="icon4"
                  className="gloy rounded-3xl m-1"
                />
              </div>
            </div>

            <div className="">
              <img src={icon_5} alt="icon5" className="gloy rounded-3xl m-1" />
            </div>

            <div className="flex-center  gap-[5rem]">
              <div>
                <img
                  src={icon_2}
                  alt="icon2"
                  className="gloy rounded-3xl m-1"
                />
              </div>
              <div>
                <img
                  src={icon_13}
                  alt="icon13"
                  className="gloy rounded-3xl m-1"
                />
              </div>
            </div>
          </div>

          <div className="w-full mx-auto mid m-1">
            <img
              src={icon_11}
              alt="icon11"
              className="md:w-[30rem] md:h-[19rem] w-[15rem] h-[15rem] mx-auto"
            />
          </div>

          <div className="w-full flex-center flex-col gap-[5rem]">
            <div className="flex-center gap-[5rem]">
              <div>
                <img
                  src={icon_8}
                  alt="icon8"
                  className="gloy rounded-3xl m-1"
                />
              </div>
              <div>
                <img
                  src={icon_10}
                  alt="icon10"
                  className="gloy rounded-3xl m-1"
                />
              </div>
            </div>

            <div className="flex-center m-1">
              <img src={icon_9} alt="icon9" className="gloy rounded-3xl m-1" />
            </div>

            <div className="flex-center gap-[5rem]">
              <div>
                <img
                  src={icon_6}
                  alt="icon6"
                  className="gloy rounded-3xl m-1"
                />
              </div>
              <div>
                <img
                  src={icon_7}
                  alt="icon7"
                  className="gloy rounded-3xl m-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrate;
