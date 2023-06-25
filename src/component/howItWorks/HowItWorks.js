import SectionTitle from "../sectionTitle/SectionTitle";
import icon_1 from "./../../assets/photos/home-section_4-icon_1.svg";
import icon_2 from "./../../assets/photos/home-section_4-icon_2.svg";
import icon_3 from "./../../assets/photos/home-section_4-icon_3.svg";
import icon_4 from "./../../assets/photos/home-section_4-icon_4.svg";
import img_1 from "./../../assets/photos/Warstwa-10.png";
import img_2 from "./../../assets/photos/home-section_4-img_2_with_border.png";
import img_3 from "./../../assets/photos/home-section_4-img_3_with_border.png";
import img_4 from "./../../assets/photos/home-section_4-img_4_with_border.png";

const list = [
  {
    id: 1,
    img: img_1,
    icon: icon_1,
    title: "Teach It What It Needs To Know",
    description:
      "Upload files or import content using URLs to provide your chatbot with the essential knowledge to serve its purpose effectively.",
  },
  {
    id: 2,
    img: img_2,
    icon: icon_2,
    title: "Customize Cody For Different Uses",
    description:
      "Set up specialized chatbots for various tasks by tailoring their roles, strictness, and other settings for an enhanced user experience.",
  },
  {
    id: 3,
    img: img_3,
    icon: icon_3,
    title: "Share Cody with Your Employees or Customers",
    description:
      "Seamlessly integrate your chatbot with a shareable link, inline embed, or popup embed, ensuring easy access for your employees or customers.",
  },
  {
    id: 4,
    img: img_4,
    icon: icon_4,
    title: "Ask Cody",
    description:
      "Interact with your chatbot by simply asking questions on the chat screen to instantly receive accurate and relevant answers.",
  },
];

const HowItWorks = () => {
  let content;

  content = (
    <ul className="grid grid-cols-1 lg:grid-cols-2 my-5">
      {list.map((ele, idx) => {
        return (
          <li key={idx} className="my-5">
            <div>
              <img src={ele.img} alt={ele.title} />
            </div>
            <div className="flex items-center space-x-5 mt-5">
              <img src={ele.icon} alt={ele.title} className="w-12 h-12" />
              <span className="text-font_white text-[1.5rem]">{ele.title}</span>
            </div>
            <p className="text-[#B4BCD0] opacity-85 mt-5 text-[1rem]">
              {ele.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
  return (
    <div className="bg-[#121324] p-10 flex-center flex-col  ">
      <SectionTitle>How It Works</SectionTitle>
      {content}
    </div>
  );
};

export default HowItWorks;
