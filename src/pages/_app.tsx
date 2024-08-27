import type { AppProps } from "next/app";
import GoogleAnalytics from "../components/google/GoogleAnalytics";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics />
    </>
  );
}

export default MyApp;
