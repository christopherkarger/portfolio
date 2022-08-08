/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Section from "../section/section";

const Apps: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth > 1023) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <Section headline="Apps">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-20">
        <div className="mb-10 lg:min-w-[300px] max-w-[400px]">
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

          <p className="text-xl mb-10">
            NextJS, TypeScript, Tailwind, Firebase, Firestore, Vercel
          </p>

          <p>
            A page-builder for online reports. Create digital financial reports
            as interactive summary pages and share them with the world.
          </p>
        </div>
        <ParallaxProvider>
          <div className="lg:pb-[100px] relative z-10 flex flex-col-reverse lg:block">
            <img
              className="block ml-auto lg:w-[90%]"
              src="images/app2.png"
              alt="Christopher"
            />

            <div className="lg:absolute lg:top-[35%]">
              <Parallax speed={isDesktop ? 10 : 0}>
                <img
                  className="block lg:w-[80%] mb-8 lg:mb-0"
                  src="images/app1.png"
                  alt="Christopher"
                />
              </Parallax>
            </div>
          </div>
        </ParallaxProvider>
      </div>
    </Section>
  );
};
export default Apps;
