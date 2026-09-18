import About from "@/components/About";
import Channels from "@/components/Channels";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Channels />
        <Projects />
        <Services />
        <Portfolio />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
