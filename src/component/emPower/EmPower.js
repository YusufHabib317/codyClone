import "./em.css";

import Button from "../button/Button";

const EmPower = () => {
  return (
    <div className="bg-[#121324]">
      <div className="bgImg relative flex-center flex-col rounded-[4%]">
        <h2 className="text-[1.2rem] sm:text-[2rem] md:text-[3.5rem] font-bold text-font_white mb-5">
          Empower Your Team With AI
        </h2>
        <Button bg={"main_blue"} bg_hover={"bg-main_pink"}>
          Get Started Free
        </Button>
      </div>
    </div>
  );
};

export default EmPower;
