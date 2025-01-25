import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Contact from "@/components/contsct";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
export default function Home() {
  return (
        <div>
          <Nav/>
          <Hero/>
          <About/>
          <Services/>
          <Skills/>
          <Projects/>
          {/* <Slider/> */}
          <Contact/>
          <Footer/>
        </div>
  );
}
