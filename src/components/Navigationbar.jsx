import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigate to route instead of scrolling
  const navigateToSection = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <motion.nav
      className={`hidden md:flex fixed top-0 w-full items-center justify-between px-8 py-4 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-sm shadow-lg"
          : "bg-slate-900/30 backdrop-blur-sm border-b border-blue-500/20"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo - More prominently styled */}
      <motion.div
        className="text-2xl font-bold text-white cursor-pointer drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]"
        whileHover={{ scale: 1.05 }}
        onClick={() => navigateToSection("/")}
      >
        <span className="text-blue-400">R</span>akesh
      </motion.div>

      {/* Navigation Links - Improved visibility */}
      <div className="flex space-x-1">
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/skills", label: "Skills" },
          { path: "/projects", label: "Projects" },
          { path: "/contacts", label: "Contact" },
        ].map((item, index) => (
          <NavItem
            key={item.path}
            path={item.path}
            label={item.label}
            index={index}
            isActive={location.pathname === item.path}
            onClick={navigateToSection}
          />
        ))}
      </div>

      {/* Resume Button - Enhanced visibility */}
      <motion.button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md shadow-blue-900/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open("/SunkiRakesh.pdf", "_blank")}
      >
        Resume
      </motion.button>
    </motion.nav>
  );
};

const NavItem = ({ path, label, index, isActive, onClick }) => {
  return (
    <motion.div
      className="relative px-4 py-2 cursor-pointer group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      onClick={() => onClick(path)}
    >
      <span
        className={`${
          isActive
            ? "text-white font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            : "text-gray-200"
        } group-hover:text-white transition-colors`}
      >
        {label}
      </span>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 shadow-sm shadow-blue-400/50 origin-left"
        initial={{ scaleX: isActive ? 1 : 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Navbar;
