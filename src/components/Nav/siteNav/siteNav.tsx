import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendar,
  faCog,
  faContactBook,
  faHouse,
  faMessage,
  faSignIn,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./siteNav.css";

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
    },
  };

  const listAnimation = {
    open: {
      transition: { staggerChildren: 0.07 },
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

  const menuItems = [
    { to: "/", label: "Home", className: "navItem", icon: faHouse },
    {
      to: "/Messages",
      label: "Messages",
      className: "navItem",
      icon: faMessage,
    },
    {
      to: "/Calender",
      label: "Calender",
      className: "navItem",
      icon: faCalendar,
    },
    {
      to: "/Contacts",
      label: "Contacts",
      className: "navItem",
      icon: faContactBook,
    },
  ];
  const settingItems = [
    { to: "/Settings", label: "Settings", className: "navItem", icon: faCog },
  ];
  const loginItems = [
    { to: "/login", label: "Login", className: "navItem", icon: faSignIn },
 
  ];

  return (
    <div className="bg-primary-600 absolute w-full shadow-md text-base">
      <FontAwesomeIcon
        icon={faBars}
        className={`p-4 text-white  cursor-pointer`}
        onClick={toggleMenu}
      />
      <motion.nav
        className={`fixed top-0 left-0 w-2/3 flex flex-col h-full justify-between shadow-md rounded-r-md  bg-gradient-to-b from-[#22071C] to-[#0F0E1B] `}
        animate={menuOpen ? "open" : "closed"}
        variants={sidebarAnimation}
      >
        <div className=" ">
          <FontAwesomeIcon
            icon={faTimes}
            className=" text-white cursor-pointer p-4"
            onClick={toggleMenu}
          />

          <div className="flex gap-4 p-4 ">
            <div className="border-4 border-green-600 h-16 w-16 rounded-full flex justify-center items-center overflow-hidden">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHVxtFr0EsmismCmwOrN_4fkCC0VoIUJ6ho3dxn3BEHyfM-HnK0EsDM0b202lY76fvnU&usqp=CAU" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs">Good morning</span>
              <span className="text-xl font-bold">Ada Lovelace</span>
            </div>
          </div>
          <motion.ul className=" flex flex-col py-4  " variants={listAnimation}>
            {menuItems.map((link, index) => (
              <motion.li
                key={index}
                className=" "
                variants={itemAnimation}
              >
                <NavLink to={link.to} className={link.className}>
                  <FontAwesomeIcon icon={link.icon} className="mr-4" />
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={itemAnimation} className="border-t rounded-full mx-8"></motion.div>
          <motion.ul className=" flex flex-col py-4" variants={listAnimation}>
          {settingItems.map((link, index) => (
            <motion.li key={index} className="" variants={itemAnimation}>
              <Link to={link.to} className={link.className}>
                <FontAwesomeIcon icon={link.icon} className="mr-4" />
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        </div>

        <motion.ul className=" flex flex-col p-4 " variants={listAnimation}>
          {loginItems.map((link, index) => (
            <motion.li key={index} className=" " variants={itemAnimation}>
              <Link to={link.to} className={link.className}>
                <FontAwesomeIcon icon={link.icon} className="mr-4" />
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
