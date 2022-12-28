import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
