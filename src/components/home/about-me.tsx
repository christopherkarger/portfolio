/* eslint-disable react/no-unescaped-entities */
import Section from "../section/section";

const AboutMe: React.FC = () => {
  return (
    <Section
      emoji="👨🏼‍💻"
      emojiClassName="text-[40px] lg:text-8xl mr-[15px] lg:mr-[40px] inline-block"
      headline="About me"
    >
      <div className=" lg:max-w-[60%]">
        <p className="text-xl lg:text-2xl mb-6 lg:mb-8">
          Hello. I'm a full stack developer from Austria, building cutting edge
          apps and helping teams creating awesome projects for the web and
          mobile world.
        </p>
      </div>

      <div>
        <p className="text-2xl lg:text-3xl font-bold mb-4">My tech stack:</p>

        <div className="flex flex-col lg:flex-row lg:max-w-[70%] lg:gap-20 mb-10">
          <div className="">
            <p className="text-xl font-bold mb-2">Languages</p>
            <ul className="mb-5 list-disc list-inside">
              <li>TypeScript </li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>LESS</li>
            </ul>
            <p className="text-xl font-bold mb-2">Databases</p>
            <ul className="mb-5 list-disc list-inside">
              <li>MYSQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="">
            <p className="text-xl font-bold mb-2">Frameworks / Libraries</p>
            <ul className="mb-5 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>React Native</li>
              <li>NodeJS</li>
              <li>RxJS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
            </ul>
            <p className="text-xl font-bold mb-2">Testing</p>
            <ul className="mb-5 list-disc list-inside">
              <li>Cypress</li>
              <li>Jest</li>
            </ul>
          </div>

          <div className="">
            <p className="text-xl font-bold mb-2">Tools</p>
            <ul className="mb-5 list-disc list-inside">
              <li>Git</li>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>Babel</li>
              <li>Jenkins</li>
              <li>Openshift</li>
            </ul>
          </div>
          <div className="">
            <p className="text-xl font-bold mb-2">SSR</p>
            <ul className="mb-5 list-disc list-inside">
              <li>NextJS</li>
              <li>Gatsby</li>
            </ul>
            <p className="text-xl font-bold mb-2">API</p>
            <ul className="mb-5 list-disc list-inside">
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutMe;
