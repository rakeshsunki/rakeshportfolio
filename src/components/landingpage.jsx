import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import SideBar from "./Sidebar";
import Navbar from "./Navigationbar"; // Import the new Navbar
import Typewriter from "./typewriter";
import styles from "./landingpage.module.css";
import { motion, easeInOut } from "framer-motion"; // Import easeInOut

const LandingPage = () => {
  const para = "Full Stack Developer Welcome To My Portfolio";
  const [Sidebarstate, Setsidebar] = useState(false);

  // Prevent page scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = Sidebarstate ? "hidden" : "auto";
  }, [Sidebarstate]);

  return (
    <div
      id="home"
      className="w-[100vw] h-[100vh] md:flex overflow-hidden relative"
    >
      {/* Add Navbar for desktop */}
      <Navbar />

      {/* Hamburger menu - only visible on mobile */}
      <motion.div
        className="absolute right-10 top-5 text-lg lg:text-black text-white cursor-pointer md:hidden"
        onClick={() => Setsidebar(true)}
        whileHover={{ scale: 1.2, rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <FaBars />
      </motion.div>

      {/* Left Section */}
      <motion.div
        className="w-screen h-1/3 md:w-1/3 md:h-full bg-slate-950 flex justify-center text-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className={styles.Name}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: easeInOut, // Fixed: Using named easing function
          }}
        >
          Rakesh Sunki
        </motion.h1>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-screen h-2/3 md:w-2/3 md:h-screen bg-red-200 flex items-center justify-center p-[1rem]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="justify-items-center">
          <motion.h1
            className="font-serif text-4xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.2,
              ease: "easeOut",
            }}
          >
            Hi I am a
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <Typewriter text={para} speed={150} delay={2000} />
          </motion.div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className={`${styles.img} absolute top-40 left-30 w-60 h-60 lg:top-30 lg:left-45 bg-white rounded-full shadow-xl flex items-center justify-center`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
        }}
      >
        <motion.img
          src="./RakeshPassportsize.jpg"
          className="w-[97%] h-[97%] !rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </motion.div>

      {/* Download Button - FIXED VERSION */}
      <motion.button
        className="absolute top-[75%] left-[30%] md:left-[60%] md:top-[60%] rounded-[10px] bg-blue-600 hover:bg-blue-700 h-[2rem] w-[10rem] text-white"
        onClick={() => window.open("./RakeshResume.pdf", "_blank")}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          boxShadow: [
            "0px 0px 0px rgba(0,0,255,0)",
            "0px 0px 20px rgba(0,0,255,0.3)",
            "0px 0px 0px rgba(0,0,255,0)",
          ],
        }}
        transition={{
          y: { duration: 0.6, delay: 2.5 },
          opacity: { duration: 0.6, delay: 2.5 },
          boxShadow: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Download CV
      </motion.button>

      {/* Sidebar Component */}
      <SideBar state={Sidebarstate} set={Setsidebar} />
    </div>
  );
};

export default LandingPage;
