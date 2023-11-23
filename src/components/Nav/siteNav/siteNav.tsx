import React, { useState } from "react";
import "./siteNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function SiteNav() {
  const [activeMenu, setActiveMenu] = useState(false);
  const variants = {
    open: { opacity: 1, height: "100vh", overflowY: "scroll" },
    closed: { opacity: 0, height: 0, overflowY: "hidden" },
  };
  const toggleMenu = () => setActiveMenu((prevActiveMenu) => !prevActiveMenu);

  return (
    <>
      <FontAwesomeIcon className="p-4 absolute" icon={faBars} onClick={toggleMenu} />

      {activeMenu && (
        <motion.div
          className="bg-slate-600"
          initial="closed"
          animate={activeMenu ? "open" : "closed"}
          variants={variants}
        >
          <p>hej</p>
          {/* Add more content as needed */}
        </motion.div>
      )}
    </>
  );
}

export default SiteNav;
