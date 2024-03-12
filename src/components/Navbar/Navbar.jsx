import React, { useState } from "react";
import { Link } from "react-scroll";
import NavbarLogo from "../../assets/svgs/Logo";
import logoDark from '../../assets/images/logo-dark.png'
import logoLight from '../../assets/images/logo-light.png';
import DownloadIcon from "../../assets/svgs/DownloadIcon";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import ThemeSwitch from "../Buttons/ThemeSwitcher";
import RadialBlur from "./RadialBlur";
import { useTheme } from "../../contexts/themeContext";

const NavLink = ({ className, text, to }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      className={className}
    >
      {text}
    </Link>
  );
};

const links = [
  {
    text: "Home",
    to: "home",
  },
  {
    text: "About",
    to: "about",
  },
  {
    text: "Roadmap",
    to: "roadmap",
  },
  {
    text: "FAQs",
    to: "faqs",
  },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const toggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      <RadialBlur />
      <nav className="relative overflow-hidden flex items-center justify-between sm:h-10 md:h-16 py-6 px-6 md:px-8 w-full bg-transparent">
        <div className="flex items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" aria-label="Home">
              <img style={{ width: "152px", height: "29px" }} src={theme == "light" ? logoDark : logoLight} alt="" />
            </a>
          </div>
        </div>
        <div className="flex items-center lg:ml-40">
          <div className="hidden md:flex space-x-2 md:space-x-4 lg:space-x-8 mr-0 md:mr-2 lg:mr-10">
            {links.map((link, index) => (
              <NavLink className="text-[14px] md:text-[16px] font-semibold hover:text-[#E01E5A] transition duration-150 ease-in-out" key={index} text={link.text} to={link.to} />
            ))}
          </div>
        </div>

        <div className="relative hidden md:flex md:items-center ">
          <span className="mr-1 md:mr-1 lg:mr-4 mt-1">
            <ThemeSwitch />
          </span>
          <span className="md:mr-1 lg:mr-3">
            <SecondaryButton title="Whitepaper" rightIcon={DownloadIcon} />
          </span>
          <PrimaryButton title="Get Token" />
        </div>

        <div className="-mr-2 flex items-center md:hidden">
          <span className="mr-1 md:mr-1 lg:mr-4 mt-1">
            <ThemeSwitch />
          </span>
          <button
            type="button"
            onClick={toggle}
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-white hover:text-gray-500 dark:bg-[#0D0720] focus:outline-none focus:bg-gray-100 focus:text-gray-500"
          >
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden px-2 pt-2 pb-4`}
      >
        {links.map((link, index) => (
          <NavLink className="block text-center hover:text-[#E01E5A] hover:shadow-lg px-6 py-3" key={index} text={link.text} to={link.to} />
        ))}
        <div className="w-full flex flex-col justify-center space-y-2">
          <SecondaryButton title="Whitepaper" rightIcon={DownloadIcon} />
          <PrimaryButton title="Get Token" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
