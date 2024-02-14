import { useState } from "react";
import NavbarLogo from "../../assets/svgs/Logo";
import DownloadIcon from "../../assets/svgs/DownloadIcon";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import ThemeSwitch from "../Buttons/ThemeSwitcher";

const NavLink = ({ text, href }) => {
  return (
    <a
      href={href}
      className="text-[16px] font-semibold hover:text-[#E01E5A] transition duration-150 ease-in-out"
    >
      {text}
    </a>
  );
};

const links = [
  {
    text: "Home",
    href: "#home",
  },
  {
    text: "About",
    href: "#about",
  },
  {
    text: "Roadmap",
    href: "#roadmap",
  },
  {
    text: "FAQ's",
    href: "#faqs",
  },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdown, setIsMobileDropdown] = useState(false);

  const toogle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="relative flex items-center justify-between sm:h-10 md:h-16 py-6 px-6 md:px-8 w-full dark:bg-[#111920]">
        <div className="flex items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" aria-label="Home">
              <NavbarLogo />
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex md:space-x-10 mr-20">
            {links.map(function (link) {
              console.log("test");
              return (
                <NavLink
                  key={Math.random().toString()}
                  text={link.text}
                  href={link.href}
                />
              );
            })}
          </div>

          <div className="relative hidden md:flex md:items-center ">
            <span className="mr-3">
              <ThemeSwitch />
            </span>
            <span className="mr-3">
              <SecondaryButton title="Whitepaper" rightIcon={DownloadIcon} />
            </span>
            <PrimaryButton title="Get Token" />
          </div>
        </div>

        <div className="-mr-2 flex items-center md:hidden">
          {/* <Switcher /> */}
          <button
            type="button"
            onClick={() => toogle()}
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-white hover:text-gray-500 dark:bg-[#1B2731] focus:outline-none focus:bg-gray-100 focus:text-gray-500"
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
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden px-2 pt-2 pb-4`}
      >
        <a
          href="#"
          className="block text-center hover:text-[#E01E5A] hover:shadow-lg px-6 py-3"
        >
          Research
        </a>
        <a
          href="#"
          className="block text-center hover:text-[#E01E5A] hover:shadow-lg px-6 py-3"
        >
          API
        </a>
        <a
          href="#"
          className="block text-center hover:text-[#E01E5A] hover:shadow-lg px-6 py-3"
        >
          Prpduct
        </a>
        <a
          href="#"
          className="block text-center hover:text-[#E01E5A] hover:shadow-lg px-6 py-3"
        >
          Company
        </a>

        <button
          onClick={() => setIsMobileDropdown(!isMobileDropdown)}
          className="flex items-center text-center hover:text-[#E01E5A] hover:shadow-lg px-6 py-3 mx-auto"
        >
          <span>Try Products</span>
        </button>
      </div>
    </>
  );
}

export default Navbar;
