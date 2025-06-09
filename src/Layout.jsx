import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import { FaBars } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Layout = () => {
  const [sidebarState, setSidebarState] = useState(false);
  const location = useLocation();

  // Prevent scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarState ? "hidden" : "auto";
  }, [sidebarState]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navbar />
      
      {/* Mobile menu button */}
      <motion.div
        className="fixed right-10 top-5 text-white text-lg cursor-pointer z-30 md:hidden"
        onClick={() => setSidebarState(true)}
        whileHover={{ scale: 1.2, rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <FaBars />
      </motion.div>
      
      {/* Page Content with Animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      
      {/* Sidebar */}
      <SideBar state={sidebarState} set={setSidebarState} />
    </div>
  );
};

export default Layout;