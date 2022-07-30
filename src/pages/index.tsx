import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <section className="flex flex-col w-full h-screen justify-center items-center">
        <h1 className="text-6xl uppercase font-bold mb-4">
          Christopher Karger
        </h1>
        <h2 className="text-4xl">Senior Frontend Developer!</h2>
      </section>
    </div>
  );
};

export default Home;
