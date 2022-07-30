/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <section className="p-4 relative flex flex-col w-full h-screen justify-center items-center">
        <div className="rounded-full border-2 lg:border-4 border-black w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]  mb-6 overflow-hidden shrink-0">
          <img
            className="block w-full -translate-x-4"
            src="me.jpg"
            alt="Christopher"
          />
        </div>
        <h1 className="text-2xl lg:text-5xl uppercase font-bold lg:mb-4">
          Christopher Karger
        </h1>
        <h2 className="text-md lg:text-2xl">Senior Frontend Developer</h2>
      </section>
    </div>
  );
};

export default Home;
