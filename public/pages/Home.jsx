import Hero from "../../src/sections/Hero";
import About from "../../src/sections/About";
import Skill from "../../src/sections/Skill";
import Work from "../../src/sections/Work";
import Education from "../../src/sections/Education";
import Experience from "../../src/sections/Experience";
import Review from "../../src/sections/Review";
import Contact from "../../src/sections/Contact";
import Footer from "../../src/sections/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Work />
      <Education />
      <Experience />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
