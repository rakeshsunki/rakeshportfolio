import { useState } from "react";
import "./App.css";
import LandingPage from "./components/landingpage";
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";

function App() {
  const [sidebarState, setSidebarState] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
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

      {/* For homepage content */}
      <LandingPage />

      {/* Sidebar */}
      <SideBar state={sidebarState} set={setSidebarState} />
    </div>
  );
}

export default App;
