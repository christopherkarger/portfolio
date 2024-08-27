/* eslint-disable react/no-unescaped-entities */
import Section from "../section/section";

const AboutMe: React.FC = () => {
  return (
    <Section headline="About me" fullscreen={false}>
      <div className="flex flex-col lg:flex-row lg:max-w-[70%] lg:gap-20">
        <div className="lg:w-[50%]">
          <p className="text-xl lg:text-2xl mb-6 lg:mb-8">
            I'm a full stack developer building cutting edge apps and helping
            teams creating awesome projects for the web and mobile world.
          </p>
        </div>
        <div className="lg:w-[50%]">
          <p className="text-2xl font-bold">My tech stack:</p>
          <p className="text-xl mb-10">
            React, Angular, TypeScript, React Native, JavaScript, NodeJS,
            NextJS, Gatsby, RxJS, HTML, SCSS, LESS, Tailwind, MYSQL, MongoDB,
            REST, GraphQL, Jest, Cypress, Firebase
          </p>
        </div>
      </div>
    </Section>
  );
};
export default AboutMe;
