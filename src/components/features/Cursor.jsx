import React, { useRef, useEffect } from "react";
import "../../assets/css/style.css";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) {
      return;
    }

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot dark:bg-purple-900 bg-black "></div>
      <div ref={cursorOutlineRef} className="cursor-outline dark:border-white  border-dashed border-purple-900 border-2 bg-gray-400/25"></div>
    </>
  );
};  

export default CustomCursor;
