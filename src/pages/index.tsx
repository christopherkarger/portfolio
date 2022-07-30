/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import AboutMe from "../components/home/about-me";
import AppDevelopment from "../components/home/app-development";
import Intro from "../components/home/intro";
import NativeDevelopment from "../components/home/native-development";

const Home: NextPage = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <AppDevelopment />
      <NativeDevelopment />
    </div>
  );
};

export default Home;
