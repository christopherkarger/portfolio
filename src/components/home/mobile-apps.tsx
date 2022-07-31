/* eslint-disable @next/next/no-img-element */
import Section from "../section/section";

const MobileApps: React.FC = () => {
  return (
    <Section headline="Mobile Apps">
      <div className="flex flex-col lg:flex-row lg:gap-20">
        <div className="mb-10">
          <h2 className="text-xl lg:text-4xl font-bold mb-4">Coinatix</h2>
          <div className="mb-10">
            <a
              href="https://play.google.com/store/apps/details?id=com.christopherk1986.coinatix&gl=AT"
              target="_blank"
              className="text-xl lg:text-2xl lg:w-[50%] hover:underline"
              rel="noreferrer"
            >
              Play Store
            </a>
          </div>
          <h3 className="font-bold text-xl">Tech stack:</h3>
          <p className="text-xl">React Native, TypeScript, SCSS, Firebase</p>
        </div>
        <div className="lg:pb-[100px] relative lg:ml-[30%]">
          <img
            className="block w-[80%]"
            src="images/mobile2.png"
            alt="mobile2"
          />
          <img
            className="block w-[80%] absolute top-[20%] right-[20%] lg:right-[50%]"
            src="images/mobile1.png"
            alt="mobile1"
          />
        </div>
      </div>
    </Section>
  );
};
export default MobileApps;
