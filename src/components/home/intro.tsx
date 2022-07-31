/* eslint-disable @next/next/no-img-element */
import React from "react";
import TextReveal from "../text-reveal/text-reveal";

const Intro: React.FC = () => {
  return (
    <section className="p-4 relative flex flex-col w-full h-screen justify-center items-center">
      <div className="flex flex-col items-center -translate-y-4">
        <div className="reveal-intro-image rounded-full border-2 lg:border-4 border-black w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]  mb-6 overflow-hidden shrink-0">
          <img
            className="block w-full -translate-x-6"
            src="images/me.jpg"
            alt="Christopher"
          />
        </div>
        <h1 className="text-2xl lg:text-5xl uppercase font-bold lg:mb-4">
          <TextReveal revealNow>Christopher Karger</TextReveal>
        </h1>
        <h2 className="text-md lg:text-2xl">
          <TextReveal revealNow>Frontend Developer</TextReveal>
        </h2>
      </div>
    </section>
  );
};

export default Intro;
