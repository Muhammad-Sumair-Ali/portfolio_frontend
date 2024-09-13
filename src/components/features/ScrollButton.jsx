import React, { useState, useEffect } from "react";
import { GoMoveToTop } from "react-icons/go";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 470) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth"
    });
  };

  return (
    <>
      {showButton && (
        <button className="text-white rounded-2xl shadow-xl hover:bg-purple-800  bg-purple-700 p-4 m-2 fixed bottom-4 right-6 z-10" onClick={scrollToTop}>
         <GoMoveToTop size={38}/>
        </button>
      )}
    </>
  );
};

export default ScrollButton;
