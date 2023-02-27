/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/home/about-me";
import Apps from "../components/home/apps";
import Contact from "../components/home/contact";
import Intro from "../components/home/intro";
import Journey from "../components/home/journey";
import MobileApps from "../components/home/mobile-apps";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Christopher Karger</title>
      </Head>
      <Intro />
      <AboutMe />
      <Journey />
      <Apps />
      <MobileApps />
      <Contact />
    </div>
  );
};

export default Home;
