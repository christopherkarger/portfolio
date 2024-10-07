/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import TextReveal from "../text-reveal/text-reveal";

const Intro: React.FC = () => {
  const scrollToFirstSection = useCallback(() => {
    const element = document.querySelectorAll("section");
    element[1]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToLastSection = useCallback(() => {
    const element = document.querySelectorAll("section");
    element[element.length - 1]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <section
      className="p-4 relative flex flex-col w-full justify-center items-center h-screen"
      style={{
        height: "100dvh",
      }}
    >
      <div className="flex flex-col items-center -translate-y-4">
        <div className="reveal-intro-image rounded-full border-2 lg:border-[5px] border-black w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]  mb-6 overflow-hidden shrink-0">
          <img
            className="block w-[115%] -translate-x-[22px] max-w-none"
            src="images/me.jpg"
            alt="Christopher"
          />
        </div>
        <h1 className="text-2xl lg:text-5xl leading-none uppercase font-bold mb-2 text-center">
          <TextReveal revealNow>Christopher Karger</TextReveal>
        </h1>
        <h2 className="text-md lg:text-2xl mb-4 leading-none">
          <TextReveal revealNow>Full Stack Developer</TextReveal>
        </h2>
        <a
          href="docs/cv.pdf"
          target="_blank"
          className="block-link text-md lg:text-2xl"
        >
          <TextReveal revealNow>Download CV</TextReveal>
        </a>
      </div>

      <button
        type="button"
        className="absolute bottom-5 left-[50%] -translate-x-[50%]"
        onClick={() => scrollToFirstSection()}
      >
        <MdOutlineKeyboardArrowDown size={40} />
      </button>
    </section>
  );
};

export default Intro;
