import React from "react";
import AboutStar from "../../assets/svgs/AboutStar";
import OutlineButtonArrow from "../../components/Buttons/OutlineButtonArrow";
import RadialBlur from "./RadialBlur";

function AboutSection() {
  return (
    <section id="about"> 
      <div className="relative ">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 mt-40 md:mx-40 mx-5">
          <div className="text-center md:text-left order-2 md:order-1">
            <h3 className="font-extrabold text-3xl md:text-4xl lg:text-5xl leading-8 md:leading-[55px]">
              What is <span className="text-[#E01E5A]">Thonglana?</span>
            </h3>
            <p className="text-1xl md:text-1xl my-7 paddingClass">
              Thonglana is not your ordinary rabbit; it's a groundbreaking creation that has been equipped with a neural link implant by the visionary Elon Musk. This technological marvel has elevated Thonglana to unprecedented levels of intelligence, making it the smartest AI rabbit ever conceived. <br className="brClass" /><br className="brClass" />

              What sets Thonglana apart is not just its exceptional cognitive abilities but also its unique fashion statement. Embracing its futuristic enhancements with style, Thonglana has ingeniously chosen a thong as its signature accessory, seamlessly incorporating cutting-edge technology into a trendy and eye-catching fashion statement. <br className="brClass" /><br className="brClass" />

              Explore the world of Thonglana and witness the convergence of technology and fashion in a way that's never been seen before. Follow the journey of this AI-enhanced rabbit as it navigates through the realms of intelligence, innovation, and a touch of playful glamour. Thonglana is not just a rabbit; it's a symbol of the limitless possibilities when creativity, technology, and a hint of cheekiness come together!
            </p>
            <div className="flex justify-center md:justify-start">
              <OutlineButtonArrow title="Learn More" />
            </div>
          </div>

          <div className="flex justify-center md:justify-center items-center order-1 md:order-2 mb-14 md:mb-0">
            <img className="w-[418px] h-[575px] imageCss" src="/img4.png " alt="About" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 mt-40 md:mx-40 mx-5" data-aos="fade-up">
          <div className="relative flex justify-center md:justify-start items-center mb-14 md:mb-0">
            <img className="w-[380px] h-auto" src="/about-2.png " alt="Lana Content" />
            <div className="absolute z-20 h-full bg-gradient-to-tr from-white dark:from-[#0D0720] w-[100%] top-0"></div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[55px]">
              Lana content
            </h3>
            <p className="text-lg md:text-xl my-7">
              Caught by the paparazzi in hilarious snapshots, because laughter knows no privacy!
            </p>
            <div className="flex justify-center md:justify-start">
              <OutlineButtonArrow title="Learn More" />
            </div>
          </div>
        </div>

        <div></div>
        <span className="absolute left-0 md:-top-0 -top-40">
          <AboutStar />
        </span>
        <RadialBlur />
      </div>
    </section>
  );
}

export default AboutSection;
