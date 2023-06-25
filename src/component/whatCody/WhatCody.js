import "./whatCody.css";

import SectionTitle from "../sectionTitle/SectionTitle";
import cross from "../../assets/photos/cross-icon.svg";

const list = [
  {
    id: 1,
    text: "No Keyword Searches",
  },
  {
    id: 2,
    text: "No Regurgitated Answers",
  },
  {
    id: 3,
    text: "No Need to Give Context Every Time",
  },
];

function WhatCody() {
  return (
    <div className="  flex-center flex-col pt-10 text-font_white bg-[#121324] p-16">
      <div className="w-[60%] text-center">
        <SectionTitle>What is Cody?</SectionTitle>
        <p className="text-[1.2rem] my-5 text-[#B4BCD0]">
          Cody is an intelligent AI assistant like ChatGPT – with the added
          benefit of being able to train it on your business, your team, your
          processes, and your clients with your own knowledge base. Use Cody as
          an employee to support your team, answer questions, help with creative
          work, troubleshoot issues, and brainstorm ideas.
        </p>
        <ul className="flex-center flex-col space-y-5 text-[1.3rem]">
          {list.map((item) => {
            return (
              <li
                key={item.id}
                className="gloy rounded-full w-fit p-15 flex-center flex-row space-x-5  border-[2px] border-main_pink
                 px-6 py-2 text-[#DDDDDD] my-2 text-[0.65rem] sm:text-[1rem]"
              >
                <img
                  src={cross}
                  alt={cross}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default WhatCody;
