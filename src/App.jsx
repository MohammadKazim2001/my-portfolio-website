import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Review from "./sections/Review";
import Skill from "./sections/Skill";
import Work from "./sections/Work";

// Node modules
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParticlesBackground from "./components/ParticlesBackground";
import Education from "./sections/Education";
import Experience from "./sections/Experience";

// register the gsap hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "90%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root className="relative bg-black">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skill />
        <Work />
        <Education />
        <Experience />
        <Review />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;

// <div className="relative bg-black">
//   {" "}
//   <ParticlesBackground />
//   <Header />
//   <main className="relative z-10">
//     <Hero />
//     <About />
//     <Skill />
//     <Work />
//     <Education />
//     <Experience />
//     <Review />
//     <Contact />
//     <Footer />
//   </main>
// </div>
