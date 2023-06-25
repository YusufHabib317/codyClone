import "./integer.css";

import SectionTitle from "../sectionTitle/SectionTitle";
import icon_1 from "./../../assets/photos/home-section_3-icon_1.svg";
import icon_2 from "./../../assets/photos/home-section_3-icon_2.svg";
import icon_3 from "./../../assets/photos/home-section_3-icon_3.svg";

const list = [
  {
    id: 1,
    icon: icon_1,
    title: "Advanced Data Defense",
    description:
      "Safeguard your data with Cody AI’s robust AWS encryption and SOC II vector database privacy standards. Delight in a secure environment that places your privacy first without sacrificing efficiency and flexibility.",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Customizable Access Controls",
    description:
      "Maintain absolute control over your data with Cody AI’s permission enforcement. Our platform grants access on a per-chatbot basis, ensuring that users can only access the information they’re authorized to view, with real-time permission updates.",
  },
  {
    id: 3,
    icon: icon_3,
    title: "Unwavering Commitment to Security",
    description:
      "Rest easy knowing that your data is in capable hands. We adhere to stringent third-party security standards and continuously work on enhancing our measures to provide exceptional protection tailored to your needs.",
  },
];
const Trusted = () => {
  const content = (
    <ul className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
      {list.map((ele, idx) => {
        return (
          <li
            key={idx}
            className="listTrustedSection rounded-3xl flex items-center flex-col p-5 gap-7 border-[3px] border-[#252646]"
          >
            <img src={ele.icon} alt={ele.title} className="w-16 h-16" />
            <div className="text-center">
              <p className="text-font_white mb-7 font-bold text-[1.4rem] sm:text-[1.7rem] md:text-[1.8rem]">
                {ele.title}
              </p>
              <p className="text-[#B4BCD0] opacity-85">{ele.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
  return (
    <div className="IntegerSection flex-center flex-col p-10 text-center">
      <SectionTitle>Trusted By Over 50,000 Businesses</SectionTitle>
      <p className="my-10 text-[#B4BCD0] opacity-85 ">
        Trust in Cody AI’s unparalleled data protection while utilizing our
        platform for seamless document storage and collaboration. Experience the
        perfect balance between uncompromised security and exceptional user
        experience.
      </p>
      {content}
    </div>
  );
};

export default Trusted;
