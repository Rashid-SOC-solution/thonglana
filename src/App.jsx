import Navbar from "./components/Navbar/Navbar";
import { useTheme } from "./contexts/themeContext";
import { Switch } from "@headlessui/react";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-[#191230] text-[#0D0720] dark:text-[#fff] w-full max-w-7xl mx-auto">
        <Navbar />
      </div>
    </>
  );
}

export default App;
