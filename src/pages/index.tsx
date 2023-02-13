import Head from "next/head";
import Navbar from "../components/layout/navbar";
import Greet from "../components/sections/Greet";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/footer";
import Background from "../components/layout/background";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Greet />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}
