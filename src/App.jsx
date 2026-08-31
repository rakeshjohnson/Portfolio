import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CrystalField from "./components/CrystalField";
import useScrollReveal from "./hooks/useScrollReveal";
import useMouseParallax from "./hooks/useMouseParallax";

export default function App() {
  useScrollReveal();
  useMouseParallax();

  return (
    <>
      <CrystalField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
