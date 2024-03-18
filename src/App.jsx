import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import Tokenomics from "./sections/Tokenomics";
import Highlights from "./sections/Highlights";
import Buy from "./sections/Buy";
import Video from "./sections/Video";
import Video2 from "./sections/anotherVideo";
import Roadmap from "./sections/Roadmap";
import CTA from "./sections/CTA";
import FAQs from "./sections/FAQs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <div className="relative z-10 bg-white dark:bg-[#0D0720] text-[#0D0720] dark:text-[#fff] w-full mx-auto overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Tokenomics />
        {/* <Highlights /> */}
        <Buy />
        <Video />
        <Roadmap />
        <Video2 />
        <CTA />
        <FAQs />
        <Footer />
      </div>
    </>
  );
}

export default App;
