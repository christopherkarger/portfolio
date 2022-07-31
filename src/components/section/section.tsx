import React from "react";
import { ISection } from "./models";

const Section: React.FC<ISection> = ({ headline, children }) => {
  return (
    <section className="bg-white top-0 w-full">
      <div className="p-10 pb-0">
        <div className="flex sticky top-0">
          <h1 className="text-3xl lg:text-8xl pt-4 lg:pt-8 uppercase font-bold bg-white w-full z-20 relative">
            {headline}
          </h1>
        </div>
        <div className="min-h-[calc(100vh-120px)] pt-20 pb-60">{children}</div>
      </div>
    </section>
  );
};
export default Section;
