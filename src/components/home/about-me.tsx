/* eslint-disable react/no-unescaped-entities */
import Section from "../section/section";

const AboutMe: React.FC = () => {
  return (
    <Section headline="About me" fullscreen={false}>
      <div className="pt-5">
        <p className="text-xl lg:text-2xl lg:w-[40%]">
          I'm a frontend developer building cutting edge apps and helping teams
          creating awesome projects for the web and mobile world.
        </p>
      </div>
    </Section>
  );
};
export default AboutMe;