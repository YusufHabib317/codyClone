import "./sliderLogos.css";

import icon_01 from "./../../assets/photos/icon_flag/home-section_5-icon_1.svg";
import icon_02 from "./../../assets/photos/icon_flag/home-section_5-icon_2.svg";
import icon_03 from "./../../assets/photos/icon_flag/home-section_5-icon_3.svg";
import icon_04 from "./../../assets/photos/icon_flag/home-section_5-icon_4.svg";
import icon_05 from "./../../assets/photos/icon_flag/home-section_5-icon_5.svg";
import icon_06 from "./../../assets/photos/icon_flag/home-section_5-icon_6.svg";
import icon_07 from "./../../assets/photos/icon_flag/home-section_5-icon_7.svg";
import icon_08 from "./../../assets/photos/icon_flag/home-section_5-icon_8.svg";
import icon_09 from "./../../assets/photos/icon_flag/home-section_5-icon_9.svg";
import icon_10 from "./../../assets/photos/icon_flag/home-section_5-icon_10.svg";
import icon_11 from "./../../assets/photos/icon_flag/home-section_5-icon_11.svg";
import icon_12 from "./../../assets/photos/icon_flag/home-section_5-icon_12.svg";
import icon_13 from "./../../assets/photos/icon_flag/home-section_5-icon_13.svg";

const SliderLogos = () => {
  const logo = [
    {
      id: 1,
      icon: icon_01,
    },
    {
      id: 2,
      icon: icon_02,
    },
    {
      id: 3,
      icon: icon_03,
    },
    {
      id: 4,
      icon: icon_04,
    },
    {
      id: 5,
      icon: icon_05,
    },
    {
      id: 6,
      icon: icon_06,
    },
    {
      id: 7,
      icon: icon_07,
    },
    {
      id: 8,
      icon: icon_08,
    },
    {
      id: 9,
      icon: icon_09,
    },
    {
      id: 10,
      icon: icon_10,
    },
    {
      id: 11,
      icon: icon_11,
    },
    {
      id: 12,
      icon: icon_12,
    },
    {
      id: 13,
      icon: icon_13,
    },
  ];

  return (
    <div className=" top-[50%] left-[50%] w-[90%] h-full pt-[6rem]">
      <h2> Single Item</h2>
      <div className="slider w-full">
        <div className="slide-track">
          {logo.map((ele) => {
            return (
              <div key={ele.id} className="slide w-[3.5rem] h-[3.5rem] ">
                <img src={ele.icon} className="w-10 h-10" />
              </div>
            );
          })}
          {logo.map((ele) => {
            return (
              <div key={ele.id} className="slide  w-[3.5rem] h-[3.5rem]">
                <img src={ele.icon} className="w-10 h-10" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderLogos;
