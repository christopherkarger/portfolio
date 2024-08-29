/* eslint-disable @next/next/no-img-element */
import { BiPaperPlane } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Section from "../section/section";

const Contact: React.FC = () => {
  return (
    <Section
      emoji="👨‍🚀"
      emojiClassName="text-[40px] lg:text-8xl translate-y-[2px] mr-[10px] lg:mr-[25px] inline-block"
      headline="Contact"
      fullscreen
    >
      <>
        <h2 className="text-xl lg:text-4xl font-bold mb-4">
          Lets work together.
        </h2>
        <div className="mb-10">
          <a
            href="mailto:karger1402@gmail.com"
            target="_blank"
            className="block-link text-xl lg:text-2xl"
            rel="noreferrer"
          >
            Mail me{" "}
            <BiPaperPlane
              size={25}
              className="inline-block -translate-y-[3px]"
            ></BiPaperPlane>
          </a>
        </div>
        <h3 className="font-bold text-xl mb-8">Social channels</h3>
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/christopher-karger-79574b16b/"
            target="_blank"
            type="button"
            rel="noreferrer"
          >
            <FaLinkedin className="text-6xl" />
          </a>
          <a
            href="https://twitter.com/Christo87768342"
            target="_blank"
            type="button"
            rel="noreferrer"
          >
            <FaTwitter className="text-6xl" />
          </a>
          <a
            href="https://github.com/christopherkarger"
            target="_blank"
            type="button"
            rel="noreferrer"
          >
            <FaGithub className="text-6xl" />
          </a>
        </div>
      </>
    </Section>
  );
};
export default Contact;
