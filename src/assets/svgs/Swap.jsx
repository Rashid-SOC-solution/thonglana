import * as React from "react";

const SwapIcon = (props) => (
  <svg
    className="stroke-black dark:stroke-white"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      //   stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={0.942}
      d="M5.783 3.25v8.792L3.27 10.158M9.55 12.042V3.25l2.512 1.884"
    />
  </svg>
);
export default SwapIcon;
