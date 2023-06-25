"use client";

import "./faq.css";

import { motion } from "framer-motion";
import { useState } from "react";

const list = [
  {
    id: 1,
    question: "What Is Cody?",
    answer:
      "Cody is an AI-powered virtual employee that can assist your business in various tasks, such as answering questions, completing tasks, onboarding new hires, providing support and troubleshooting, and bringing new ideas and insights.",
  },
  {
    id: 2,
    question: "How Does Cody Work?",
    answer:
      "Cody searches all of your accumulated company data, including articles, PowerPoints, and PDFs, and sources the top 10 most relevant documents to create an answer to your question in seconds.",
  },
  {
    id: 3,
    question: "Can I Upload Documents To Cody?",
    answer:
      "Yes, you can upload various types of documents to Cody, such as Word, PowerPoint, and PDFs, and Cody will instantly learn all that information and use it to provide answers to your questions.",
  },
  {
    id: 4,
    question: "Can I Train Cody On My Specific Business Processes?",
    answer:
      "Yes, you can train Cody on your specific business processes, such as support documentation, allowing your team to quickly troubleshoot any issues.",
  },
  {
    id: 5,
    question: "Is Cody A Replacement For Human Employees?",
    answer:
      "No, Cody is not a replacement for human employees. Instead, it is designed to assist and augment your team, allowing them to focus on more important tasks and work more efficiently.",
  },
];

const Faq = () => {
  const [activeIdx, setactiveIdx] = useState(0);

  const handleSelect = (id) => {
    setactiveIdx(activeIdx === id ? null : id);
  };

  return (
    <div className="bg-[#121325] text-center flex-center flex-col ">
      <h2 className="sm:text-[3.5rem] my-10 text-[1.3rem] font-bold text-font_white">
        Frequently Asked Questions
      </h2>
      <ul className="flex-center flex-col gap-[1rem] w-[70%] text-font_white p-16 transition-all ">
        {list.map((item, idx) => {
          return (
            <li
              key={item.id}
              onClick={() => handleSelect(idx)}
              className={`relative w-fit sm:w-full transition-all cursor-pointer text-left  `}
            >
              <div
                className={`flex justify-between  border border-main_pink py-6 px-10 w-full text-[0.9rem] md:text-[2rem]
                ${idx === activeIdx ? "bordRadius" : "rounded-3xl"}
                `}
              >
                <p className="text-[1.5rem]">{item.question}</p>
                <div
                  className={
                    idx === activeIdx
                      ? "minus transition-all"
                      : "plus transition-all"
                  }
                />
              </div>
              {idx === activeIdx && (
                <motion.p
                  initial={{ y: -30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="answer font-bold text-[1.1rem] text-left py-6 px-10 pb-6 border border-main_pink "
                >
                  {item.answer}
                </motion.p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Faq;
