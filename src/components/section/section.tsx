import classNames from "classnames";
import React from "react";
import TextReveal from "../text-reveal/text-reveal";
import { ISection } from "./models";

const Section: React.FC<ISection> = ({ headline, children, fullscreen }) => {
  return (
    <section className="bg-white top-0 w-full">
      <div className="p-10 pb-0">
        <div className="flex sticky top-0">
          <TextReveal revealInView>
            <h1 className="text-3xl lg:text-8xl pt-4 lg:pt-8 uppercase font-bold bg-white w-full z-20 relative">
              {headline}
            </h1>
          </TextReveal>
        </div>
        <div
          className={classNames("pt-20 pb-60", {
            "min-h-[calc(100vh-120px)]": fullscreen !== false,
          })}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
export default Section;