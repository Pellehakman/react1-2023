import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import NavItems from "./NavItems/NavItems";

const SiteNav = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const variants2 = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variants3 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
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
        <motion.ul className="p-4" variants={variants2}>
          <motion.li
            className="p-4  rounded-sm bg-black shadow-md"
            variants={variants3}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            menuItem
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default SiteNav;
