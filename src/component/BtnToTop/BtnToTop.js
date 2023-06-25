"use client";

import "./btnToTop.css";

import { useEffect, useState } from "react";

const BtnToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showTopBtn && <button className="btn-top" onClick={goToTop}></button>}
    </div>
  );
};

export default BtnToTop;
