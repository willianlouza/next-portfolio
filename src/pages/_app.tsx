import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Fira_Mono } from "@next/font/google";
import React from "react";

const fira = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
            --fira-font: ${fira.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
