import Head from "next/head";
import Navbar from "../components/navbar";
import Greet from "../components/section/Greet";
import Experience from "../components/section/Experience";
import Projects from "../components/section/Projects";
import Contact from "../components/section/Contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Willian Louza</title>
        <meta name="description" content="Desenvolvedor Fullstack | Node | React | Tailwind | TypeScript | JavaScript | Express" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar className="px-6 py-6 lg:px-32" />
      </header>
      <main>
        <Greet />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
