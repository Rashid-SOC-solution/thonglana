import { useState } from "react";
import { Switch } from "@headlessui/react";
import { SunMedium, Moon } from "lucide-react";

import SunIcon from "../../assets/svgs/SunIcon";
import MoonIcon from "../../assets/svgs/MoonIcon";
import { useTheme } from "../../contexts/themeContext";

function ThemeSwitch() {
  const [enabled, setEnabled] = useState(false);
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
  const { toggleTheme, theme } = useTheme();

  const dark = theme == "dark";

  return (
    <>
      {/* <div className="flex flex-col justify-center h-screen items-center ">
        <div
          className="relative md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#E01E5A] rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
            toggleTheme();
          }}
        >
          <span className="absolute left-1">
            <MoonIcon />
          </span>

          <div
            className={
              "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out flex justify-center items-center" +
              (toggle ? null : toggleClass)
            }
          >
            <span className="mt-[3px]">
              {dark ? <MoonIcon dark={true} /> : <SunIcon dark={true} />}
            </span>
          </div>

          <span className="ml-1">
            <SunIcon />
          </span>
        </div>
      </div> */}
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-12 h-6  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-hover:after:scale-95">
          <Moon />
          <SunMedium />
        </div>
      </label>
    </>
  );
}

export default ThemeSwitch;
