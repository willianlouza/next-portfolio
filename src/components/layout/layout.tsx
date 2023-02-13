import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../footer";
import Background from "./background";
import Navbar from "./navbar";

type Props = {
  className?: string;
  children?: ReactNode;
};

export default function Layout({ className, children }: Props) {
  return (
    <>
      <Head>
        <title>Willian Louza</title>
        <meta
          name="description"
          content="Desenvolvedor Fullstack | Node | React | Tailwind | TypeScript | JavaScript | Express"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Background />
      <main className={`${className}`}>{children}</main>
      <Footer />
    </>
  );
}
