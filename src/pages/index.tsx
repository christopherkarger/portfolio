/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/home/about-me";
import Contact from "../components/home/contact";
import Experience from "../components/home/experience";
import Intro from "../components/home/intro";
import MobileApps from "../components/home/mobile-apps";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Christopher Karger</title>
      </Head>
      <Intro />
      <AboutMe />
      <Experience />
      {/* <Apps /> */}
      <MobileApps />
      <Contact />
    </div>
  );
};

export default Home;
