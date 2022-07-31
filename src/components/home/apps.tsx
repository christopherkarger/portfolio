/* eslint-disable @next/next/no-img-element */
import Section from "../section/section";

const Apps: React.FC = () => {
  return (
    <Section headline="Apps">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-20">
        <div className="mb-10 min-w-[300px]">
          <h2 className="text-xl lg:text-4xl font-bold mb-4">Reportery</h2>
          <div className="mb-10">
            <a
              href="http://reportery.io"
              target="_blank"
              className="text-xl lg:text-2xl lg:w-[50%] block-link"
              rel="noreferrer"
            >
              reportery.io
            </a>
          </div>
          <h3 className="font-bold text-xl">Tech stack:</h3>
          <p className="text-xl">
            NextJS, TypeScript, Tailwind, Firebase, Vercel
          </p>
        </div>
        <div className="lg:pb-[100px] relative flex flex-col-reverse lg:block">
          <img
            className="block ml-auto lg:w-[90%] "
            src="images/app2.png"
            alt="Christopher"
          />
          <img
            className="block lg:w-[80%] lg:absolute top-[35%] mb-8 lg:mb-0"
            src="images/app1.png"
            alt="Christopher"
          />
        </div>
      </div>
    </Section>
  );
};
export default Apps;
