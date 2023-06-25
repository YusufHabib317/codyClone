import "./workLang.css";

import SliderLogos from "../slider/SliderLogos";

function WorkLang() {
  return (
    <div className="bg-[#0b0c15] relative min-h-[15rem] flex-center flex-col">
      <div className="img" />
      <h2 className="md:text-[2.2rem] text-[1.2rem] font-bold text-font_white mt-10 tracking-wider titleSe">
        Works in Every Language
      </h2>
      <SliderLogos />
    </div>
  );
}

export default WorkLang;
