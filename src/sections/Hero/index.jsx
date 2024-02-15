import HeroStar from "../../assets/svgs/HeroStar";
import RadialBlur from "./RadialBlur";

function HeroSection() {
  return (
    <>
      <RadialBlur />
      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <div className="text-center flex flex-col space-y-4">
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-8xl">
            thonglana{" "}
            <span className="text-black/25 dark:text-white/25">token</span>
          </h1>
          <span className="text-md md:text-xl lg:text-2xl font-bold md:font-extrabold">
            thonglana is a new <span className="text-[#E01E5A]">meme</span>{" "}
            token straight from metaverse 🚀
          </span>
        </div>
        <div className="flex mt-16 space-x-4 w-full justify-center">
          <img
            className="h-[200px] md:h-[340px] lg:h-[400px] w-[130px] md:w-[250px] lg:w-[320px] mt-10"
            src="/hero-1.png"
          />
          <img
            className="h-[200px] md:h-[340px] lg:h-[400px] w-[130px] md:w-[250px] lg:w-[320px] "
            src="/hero-2.png"
          />
          <img
            className="h-[200px] md:h-[340px] lg:h-[400px] w-[130px] md:w-[250px] lg:w-[320px] mt-10"
            src="/hero-3.png"
          />
        </div>
        <div className="absolute z-20 bottom-0 h-[180px] md:h-[250px] lg:h-[320px] w-full bg-gradient-to-t from-[#fff] dark:from-[#0D0720]"></div>

        <span className="absolute right-0 top-14">
          <HeroStar />
        </span>
      </div>
    </>
  );
}

export default HeroSection;
