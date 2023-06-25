import "./landing.css";

import Navbar from "../Navbar";

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="flex-center relative flex-col p-10 z-100">
        <div className="absolute w-[50%] h-full top-0 left-0 z-0  one" />
        <div className="absolute w-[50%] h-full top-0 right-0 z-0  two" />
        <div className="flex-center flex-col z-10">
          <h1 className="flex-center flex-col w-full text-[1.9rem] sm:text-[3rem] lg:text-[4.5rem] font-extrabold">
            <p>
              <span className="mr-5 text-font_grey">Your</span>
              <span className=" bg-gradient-to-r from-main_pink   to-main_blue inline-block text-transparent bg-clip-text">
                AI-Assistant
              </span>
            </p>
            <p className=" text-font_grey">for Business</p>
          </h1>
          <button
            className={`btn text-[0.9rem] sm:text-[1.3rem] bg-main_blue text-font_white mt-3 py-3 px-12 m-auto rounded-full   hover:bg-main_pink`}
          >
            Get Started Free
          </button>
          <p className="text-font_white">No Credit Card Required</p>
        </div>
        <div className="w-[80%]">
          <div className=" w-[100%] h-0 relative mt-5 rounded-3xl z-10 overflow-hidden pb-[56.25%] ">
            <iframe
              src="https://player.vimeo.com/video/795360336?autoplay=1&muted=1"
              frameBorder="0"
              allowFullScreen=""
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              id="player"
              className="absolute w-[100%] h-[100%] top-[0%] left-0  rounded-3xl z-0 "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
