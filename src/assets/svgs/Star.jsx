import * as React from "react";

const Star = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-[#0D0720] dark:fill-white w-[60] md:w-[122] h-[61] md:h-[123] stroke-[#0D0720] dark:stroke-white"
    width={122}
    height={123}
    fill="none"
    {...props}
  >
    <path
      //   fill="#0D0720"
      //   stroke="#0D0720"
      d="m63.274 44.187.246.22.3-.139 55.987-26.003-41.294 45.887-.22.245.138.3 26.003 55.987-45.886-41.293-.246-.221-.3.139-55.987 26.003L43.31 59.425l.221-.245-.14-.3L17.389 2.893l45.886 41.294Z"
    />
  </svg>
);
export default Star;
