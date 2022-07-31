/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import AboutMe from "../components/home/about-me";
import Apps from "../components/home/apps";
import Intro from "../components/home/intro";
import MobileApps from "../components/home/mobile-apps";

const Home: NextPage = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Apps />
      <MobileApps />
    </div>
  );
};

export default Home;
