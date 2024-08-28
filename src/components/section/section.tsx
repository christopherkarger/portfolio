import classNames from "classnames";
import React from "react";
import TextReveal from "../text-reveal/text-reveal";
import { ISection } from "./models";

const Section: React.FC<ISection> = ({
  headline,
  children,
  fullscreen,
  emoji,
  emojiClassName,
}) => {
  return (
    <section className="bg-white top-0 w-full">
      <div className="p-10 pb-0">
        <div className="flex sticky top-0 z-20">
          <div className="py-4 lg:py-8 lg:pb-4 bg-white w-full">
            <TextReveal revealInView>
              <h1 className="text-3xl lg:text-8xl uppercase font-bold  relative">
                {emoji ? (
                  <span className={`text-6xl lg:text-8xl ${emojiClassName}`}>
                    {emoji}
                  </span>
                ) : null}
                {headline}
              </h1>
            </TextReveal>
          </div>
        </div>
        <div
          className={classNames("pt-5 lg:pt-20 pb-20 lg:pb-40", {
            "min-h-[calc(100vh-85px)]": fullscreen !== false,
            "lg:min-h-[calc(100vh-130px)]": fullscreen !== false,
          })}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
export default Section;
