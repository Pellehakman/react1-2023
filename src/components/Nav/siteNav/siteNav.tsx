import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SiteNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sidebarAnimation = {
    open: (height = 1000) => ({
      opacity: 1,
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      opacity: 0,
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const listAnimation = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemAnimation = {
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

  const navLinks = [
    { to: "/login", label: "Login", className: "logout" },
    { to: "/dashboard", label: "Dashboard", className: "dashboard" },
    // Add more links as needed
  ];

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
        className={`fixed top-0 left-0 w-2/3 h-full bg-stone-950 shadow-md`}
        animate={menuOpen ? "open" : "closed"}
        variants={sidebarAnimation}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="p-4 text-white cursor-pointer"
          onClick={toggleMenu}
        />
        <motion.ul className="p-4 flex flex-col gap-4" variants={listAnimation}>
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="p-4 rounded-sm bg-black shadow-md"
              variants={itemAnimation}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={link.to} className={link.className}>
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default SiteNav;
