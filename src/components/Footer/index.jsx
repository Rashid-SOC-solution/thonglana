import React from "react";
import NavbarLogo from "../../assets/svgs/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="flex flex-wrap md:flex-nowrap justify-center w-full lg:w-auto px-5 md:px-40">
            <div className="px-4 lg:w-1/3">
              <h2 className="text-3xl font-bold">thonglana</h2>
              <p className="mt-2 text-sm text-gray-400">
                AI-powered guidance and feedback for educators and students to
                build better writing skills, quicker.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 px-4 lg:w-1/3">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Quicklinks
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="" className="text-sm text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm text-gray-400 hover:text-white">
                    Our Solutions
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm text-gray-400 hover:text-white">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4 lg:mt-0 px-4 lg:w-1/3">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="" className="text-sm text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="" className="text-sm text-gray-400 hover:text-white">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 w-full border-t border-gray-700 pt-4">
            <p className="text-center text-sm text-gray-400">
              Copyright © 2024 Thonglana. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
