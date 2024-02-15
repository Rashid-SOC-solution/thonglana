import * as React from "react";

const DownloadIcon = (props) => (
  <svg
    className="stroke-[#0D0720] dark:stroke-white hidden lg:flex"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      //   stroke="#0D0720"
      strokeWidth={1.5}
      d="M12 15V5m0 10-3-3m3 3 3-3M20 17l-1 3H5l-1-3"
    />
  </svg>
);
export default DownloadIcon;
