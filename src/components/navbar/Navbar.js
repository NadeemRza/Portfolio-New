import "./navbar.scss";
import github from "../../assets/github.png";
import vercel from "../../assets/vercel.png";
import netlify from "../../assets/netlify.png";
import linkedin from "../../assets/linkedin.png";

import { motion } from "framer-motion";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Nadeem's Portfolio
        </motion.span>
        <div className="social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/NadeemRza"
          >
            <motion.img
              src={github}
              alt="github_logo"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com/dashboard"
          >
            <motion.img
              src={vercel}
              alt="vercel_logo"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.netlify.com/teams/nadeemrza/sites"
          >
            <motion.img
              src={netlify}
              alt="netlify_logo"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nadeem-r-240868167"
          >
            <motion.img
              src={linkedin}
              alt="linkedin_logo"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
