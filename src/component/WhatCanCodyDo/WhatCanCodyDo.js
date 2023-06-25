import "./WhatCanCodyDo.css";

import SectionTitle from "../sectionTitle/SectionTitle";
import icon_1 from "./../../assets/photos/home-section_3-icon_1.svg";
import icon_2 from "./../../assets/photos/home-section_3-icon_2.svg";
import icon_3 from "./../../assets/photos/home-section_3-icon_3.svg";
import icon_4 from "./../../assets/photos/home-section_3-icon_4.svg";
import icon_5 from "./../../assets/photos/home-section_3-icon_5.svg";
import icon_6 from "./../../assets/photos/home-section_3-icon_6.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const list = [
  {
    id: 1,
    icon: icon_1,
    title: "Instant Answers To Your Business Questions",
    description:
      "No need to track down manuals or sift through endless documents. Cody analyzes all accumulated documents and acts as an expert on all your company processes to provide the answer you need in seconds.",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Upload Any Data & Build Your Knowledge Base",
    description:
      "Securely upload anything from PowerPoints to PDFs or crawl an entire website to instantly integrate information and customize Cody for your company. Cody will search your database and use it to craft an intelligent responses.",
  },
  {
    id: 3,
    icon: icon_3,
    title: "Provide Sources For Every Answers",
    description:
      "For added peace of mind, you can check Cody’s work. Whether it’s from one source or multiple sources, Cody provides the sources used to come up with every answer.",
  },
  {
    id: 4,
    icon: icon_4,
    title: "Boost Employee Efficiency",
    description:
      "With instant answers, ideas, and ready-made work, your team can work smarter, not harder. Use Cody to complete tasks faster, like writing professional emails, translating documents, or creating marketing materials.",
  },
  {
    id: 5,
    icon: icon_5,
    title: "Provide Support & Troubleshoot Issues",
    description:
      "Not making full use of your digital tools? Can’t get the sound to work on Zoom? Cody uses support documentation to help your team quickly troubleshoot any issues and discover hidden features.",
  },
  {
    id: 6,
    icon: icon_6,
    title: "Brainstorm Ideas & Give Suggestions",
    description:
      "If you’re not sure where to start, you can use Cody to bring new perspectives and insights to the table. Because Cody remembers conversations and contextual history, it can give ideas and advice.",
  },
];

function WhatCanCodyDo() {
  const ver = Array.from({ length: 6 }, (_, i) => i + 1);
  const isAboveLargeScreen = useMediaQuery("(min-width:976px)");

  return (
    <div className="bg-[#121324]">
      <div className="flex-center flex-col p-16 what bg-[#20213E] rounded-[2.5%] border-[5px] border-[#252646]">
        <SectionTitle color="font_white">What can Cody do?</SectionTitle>
        <ul className="grid grid-cols-1 lg:grid-cols-3 mt-10 list ">
          {isAboveLargeScreen && <div className="hor" />}
          {list.map((ele, idx) => {
            return (
              <li
                key={idx + 1}
                className={`flex relative items-center flex-col p-3 text-center my-10 ${
                  isAboveLargeScreen ? "ver" : "horEle"
                }`}
              >
                <div>
                  <img src={ele.icon} className="w-16 h-16" />
                </div>
                <div className="my-10 w-full ">
                  <p className="text-font_white font-bold text-[1.2rem] sm:text-[1.5rem] mb-5">
                    {ele.title}
                  </p>
                  <p className="text-[#B4BCD0]  font-bold opacity-85">
                    {ele.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default WhatCanCodyDo;
