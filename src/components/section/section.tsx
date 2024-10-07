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
    <section
      className="bg-white top-0 w-full"
      style={{
        height: fullscreen ? "100dvh" : "auto",
      }}
    >
      <div className="p-10 pb-0">
        <div className="flex sticky top-0 z-20">
          <div className="py-4 lg:py-8 lg:pb-4 bg-white w-full">
            <TextReveal revealInView>
              <h1 className="text-3xl lg:text-8xl uppercase font-bold  relative">
                {emoji ? (
                  <span className={`${emojiClassName}`}>{emoji}</span>
                ) : null}
                {headline}
              </h1>
            </TextReveal>
          </div>
        </div>
        <div className={classNames("pt-5 lg:pt-20 pb-20 lg:pb-40")}>
          {children}
        </div>
      </div>
    </section>
  );
};
export default Section;
