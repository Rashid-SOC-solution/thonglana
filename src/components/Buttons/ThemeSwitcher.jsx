import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { SunMedium as SunIcon, Moon as MoonIcon } from "lucide-react";

import { useTheme } from "../../contexts/themeContext";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme(); // Destructure `theme` here
  const [enabled, setEnabled] = useState(theme === "dark"); // Use `theme` to set initial state

  useEffect(() => {
    // This effect ensures the switch reflects the current theme
    setEnabled(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    toggleTheme(); // This will trigger a context update and re-render
  };
  
  // The initial theme setting effect is no longer needed because the ThemeProvider takes care of setting the theme

  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
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
