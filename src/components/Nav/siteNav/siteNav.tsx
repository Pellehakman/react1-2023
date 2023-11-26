import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalendar, faContactBook, faHouse, faMessage, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

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
      transition: { staggerChildren: 0.07},
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
    
    { to: "/", label: "Home", className: "dashboard", icon: faHouse  },
    { to: "/", label: "Messages", className: "dashboard", icon: faMessage },
    { to: "/", label: "Calender", className: "dashboard", icon: faCalendar  },
    { to: "/", label: "Contacts", className: "dashboard", icon: faContactBook  },
    { to: "/login", label: "Login", className: "logout", icon: faUser  }
  ];

  return (
    <div className="bg-primary-600 absolute w-full shadow-md">
      <FontAwesomeIcon
        icon={faBars}
        className={`p-4 text-white  cursor-pointer`}
        onClick={toggleMenu}
      />
      <motion.nav
        className={`fixed top-0 left-0 w-full h-full shadow-md rounded-r-md  bg-gradient-to-b from-indigo-950 to-stone-950  p-4`}
        animate={menuOpen ? "open" : "closed"}
        variants={sidebarAnimation}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className=" text-white cursor-pointer"
          onClick={toggleMenu}
        />
        <div className="flex gap-4 p-4 mb-4  ">
          <div className="border-4 border-green-600 h-14 w-14 rounded-full flex justify-center items-center overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHVxtFr0EsmismCmwOrN_4fkCC0VoIUJ6ho3dxn3BEHyfM-HnK0EsDM0b202lY76fvnU&usqp=CAU"/>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs">Good morning</span>
            <span className="text-xl font-bold">Ada Lovelace</span>
          </div>
        </div>
        <motion.ul className=" flex flex-col py-4" variants={listAnimation}>
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="p-4"
              variants={itemAnimation}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={link.to} className={link.className}>
                <FontAwesomeIcon icon={link.icon} className="mr-2" />
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
