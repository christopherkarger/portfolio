/* eslint-disable @next/next/no-img-element */
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Section from "../section/section";

const MobileApps: React.FC = () => {
  return (
    <Section
      emoji="📱"
      emojiClassName="text-[35px] lg:text-8xl translate-y-[2px] mr-[5px] lg:mr-[15px] inline-block"
      headline="Mobile Apps"
    >
      <div className="flex flex-col lg:flex-row lg:gap-20">
        <div className="mb-10 lg:min-w-[300px] max-w-[400px]">
          <h2 className="text-xl lg:text-4xl font-bold mb-4">Coinatix</h2>
          <div className="mb-10"></div>
          <h3 className="font-bold text-xl">Tech stack:</h3>

          <p className="text-xl mb-10">
            React Native, TypeScript, SCSS, Firebase, SQLite
          </p>

          <p>
            A cryptocurrency wallet. Track all your crypto assets in one app.
            Just add your public addresses or coins to your portfolio. Coinatix
            does the rest for you.
          </p>
        </div>
        <ParallaxProvider>
          <div className="lg:pb-[100px] relative lg:ml-[30%] z-10 lg:z-30">
            <img
              className="block w-[80%] ml-auto"
              src="images/mobile2.png"
              alt="mobile2"
            />
            <div className="block w-[80%] absolute top-[15%] right-[20%] lg:right-[42%]">
              <Parallax speed={15}>
                <img src="images/mobile1.png" alt="mobile1" />
              </Parallax>
            </div>
          </div>
        </ParallaxProvider>
      </div>
    </Section>
  );
};
export default MobileApps;
