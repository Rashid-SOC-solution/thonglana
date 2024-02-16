import AboutStar from "../../assets/svgs/AboutStar";
import OutlineButtonArrow from "../../components/Buttons/OutlineButtonArrow";
import RadialBlur from "./RadialBlur";

function AboutSection() {
  return (
    <>
      <div className="relative ">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 mt-40 md:mx-40 mx-5">
          <div className="text-center md:text-left order-2 md:order-1">
            <h3 className="font-extrabold text-3xl md:text-4xl lg:text-5xl leading-8 md:leading-[55px]">
              What <span className="text-[#E01E5A]">thonglana</span> actullay
              is?
            </h3>
            <p className="text-lg md:text-xl my-7">
              Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed
              feugiat. Tellus non ut nibh eleifend maecenas erat. Non eu nisl
              ultrices condimentum eu laoreet mauris. Egestas pellentesque in
              aliquam velit facilisis vestibulum.
            </p>
            <div className="flex justify-center md:justify-start">
              <OutlineButtonArrow title="Learn More" />
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center order-1 md:order-2 mb-14 md:mb-0">
            <img className="w-[380px] h-auto" src="/about-1.png" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 mt-40 md:mx-40 mx-5">
          <div className="relative flex justify-center md:justify-start items-center mb-14 md:mb-0">
            <img className="w-[380px] h-auto" src="/about-2.png" />
            <div className="absolute z-20 h-full bg-gradient-to-tr from-white dark:from-[#0D0720] w-80 top-0"></div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[55px]">
              Some more content
            </h3>
            <p className="text-lg md:text-xl my-7">
              Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed
              feugiat. Tellus non ut nibh eleifend maecenas erat. Non eu nisl
              ultrices condimentum eu laoreet mauris. Egestas pellentesque in
              aliquam velit facilisis vestibulum.
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
    </>
  );
}

export default AboutSection;
