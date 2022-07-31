/* eslint-disable @next/next/no-img-element */
import Section from "../section/section";

const Apps: React.FC = () => {
  return (
    <Section headline="Apps">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-20">
        <div className="mb-10">
          <h2 className="text-xl lg:text-4xl font-bold mb-4">Latest project</h2>
          <div className="mb-10">
            <a
              href="http://reportery.io"
              target="_blank"
              className="text-xl lg:text-2xl lg:w-[50%] hover:underline"
              rel="noreferrer"
            >
              reportery.io
            </a>
          </div>
          <h3 className="font-bold">Tech stack:</h3>
          <p>NextJS, TypeScript, Tailwind, Firebase, Vercel</p>
        </div>
        <div className="relative lg:pb-[100px]">
          <img
            className="block ml-auto w-[90%]"
            src="images/app2.png"
            alt="Christopher"
          />
          <img
            className="block w-[80%] absolute top-[35%]"
            src="images/app1.png"
            alt="Christopher"
          />
        </div>
      </div>
    </Section>
  );
};
export default Apps;
