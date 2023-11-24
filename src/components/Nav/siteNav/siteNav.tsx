import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const SiteNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        className={`p-4 text-white cursor-pointer ${
          menuOpen ? "hidden" : "block"
        }`}
        onClick={toggleMenu}
      />
      <motion.nav
        className={`fixed top-0 left-0 w-2/3 h-full bg-stone-800 shadow-md`}
        animate={menuOpen ? "open" : "closed"}
        variants={variants}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="p-4 text-white cursor-pointer"
          onClick={toggleMenu}
        />
        {/* <Items /> */}
      </motion.nav>
    </div>
  );
};

export default SiteNav;
