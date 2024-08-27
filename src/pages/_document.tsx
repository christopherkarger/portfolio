/* eslint-disable @next/next/no-page-custom-font */
import { Head, Html, Main, NextScript } from "next/document";
import GoogleAnalytics from "../components/google/GoogleAnalytics";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <GoogleAnalytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
