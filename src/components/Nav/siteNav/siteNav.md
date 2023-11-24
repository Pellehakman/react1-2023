<!-- import React, { useState } from "react";
import "./siteNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SiteNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 ${menuOpen ? "w-full" : "w-1/2"}`}>
      <div
        className="bg-gray-800 p-4 text-white cursor-pointer"
        onClick={toggleMenu}
      >
        Menu
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-full bg-white shadow-md">
          {/* Your menu content goes here */}
          <div
            className="p-4 bg-gray-800 text-white cursor-pointer"
            onClick={toggleMenu}
          >
            Close
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteNav;
 
       <FontAwesomeIcon className="p-4 absolute" icon={faBars} onClick={toggleMenu} /> -->
