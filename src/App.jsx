import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import Tokenomics from "./sections/Tokenomics";

function App() {
  return (
    <>
      <div className="relative z-10 bg-white dark:bg-[#0D0720] text-[#0D0720] dark:text-[#fff] w-full max-w-7xl mx-auto overflow-hidden">
        <Navbar />

        <HeroSection />
        <AboutSection />
        <Tokenomics />
      </div>
    </>
  );
}

export default App;
