const AboutMe: React.FC = () => {
  return (
    <section className="bg-white top-0 w-full">
      <div className="p-10">
        <div className="sticky top-0">
          <h1 className="text-3xl lg:text-8xl uppercase font-bold bg-white pt-10 pb-3">
            About me
          </h1>
        </div>
        <div className="min-h-[calc(100vh-120px)] pt-20 pb-60">
          <p className="text-xl lg:text-2xl lg:w-[50%]">
            I'm a frontend developer building cutting edge apps. Lorem ipsum
            dolor si amet dlor si amert lorem ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
