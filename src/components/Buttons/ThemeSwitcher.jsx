import { useState } from "react";
import { Switch } from "@headlessui/react";
import { SunMedium as SunIcon, Moon as MoonIcon } from "lucide-react";

import { useTheme } from "../../contexts/themeContext";

function ThemeSwitch() {
  const [enabled, setEnabled] = useState(false);
  const { toggleTheme } = useTheme();

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={toggleTheme}
      className={
        "bg-[#E01E5A] relative inline-flex h-7 w-14 items-center rounded-full"
      }
    >
      <span className="sr-only">Toggle theme</span>
      <SunIcon
        className={`absolute left-1 ${
          enabled ? "text-white" : "text-black"
        } z-10 transition duration-300`}
        size={18}
      />
      <MoonIcon
        className={`absolute right-1 ${
          enabled ? "text-black" : "text-white"
        } z-10 transition duration-300`}
        size={18}
      />
      <div
        className={`${
          enabled ? "translate-x-[30px]" : "translate-x-[2px]"
        } inline-block h-6 w-6 transform rounded-full bg-white transition duration-300 text-center`}
      ></div>
    </Switch>
  );
}

export default ThemeSwitch;
