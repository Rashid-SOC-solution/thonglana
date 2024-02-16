import * as React from "react";

const GreenCheck = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={124}
    height={125}
    fill="none"
    {...props}
  >
    <rect
      width={124}
      height={124}
      y={0.275}
      fill="#00FFA3"
      fillOpacity={0.16}
      rx={62}
    />
    <path
      stroke="#00FFA3"
      strokeLinecap="round"
      strokeWidth={8}
      d="m36.564 61.82 17.26 17.26L87.436 45.47"
    />
  </svg>
);
export default GreenCheck;
