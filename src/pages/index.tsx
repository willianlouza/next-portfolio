import Head from "next/head";
import Navbar from "../components/navbar";
import Greet from "../layout/Greet";
import Experience from "../layout/Experience";
import Projects from "../layout/Projects";
import Contact from "../layout/Contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Willian Louza</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar className="px-6 py-6 lg:px-32" />
      </header>
      <main className="snap-y snap-mandatory">
        <Greet  />
        <Experience />
        <Projects  />
        <Contact  />
        <Footer />
      </main>
    </>
  );
}
