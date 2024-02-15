import * as React from "react";

const HeroStar = (props) => (
  <svg
    className="fill-[#0D0720] dark:fill-white stroke-[#0D0720] dark:stroke-white"
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={79}
    fill="none"
    {...props}
  >
    <path
      //   fill="#0D0720"
      //   stroke="#0D0720"
      d="m43.672 30.494.178.278.326-.055 32.884-5.588-28.054 18.043-.278.178.055.326 5.588 32.884-18.043-28.054-.178-.278-.326.055L2.94 53.871l28.054-18.043.278-.178-.055-.326L25.629 2.44l18.043 28.054Z"
    />
  </svg>
);
export default HeroStar;
