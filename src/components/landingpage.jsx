import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import SideBar from "./Sidebar";
import Typewriter from "./typewriter";
import styles from "./landingpage.module.css";

const LandingPage = () => {
  const para = "Front End Developer Welcome To My Portfolio";
  const [Sidebarstate, Setsidebar] = useState(false);

  // ✅ Prevent page scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = Sidebarstate ? "hidden" : "auto";
  }, [Sidebarstate]);

  return (
    <div
      id="home"
      className="w-[100vw] h-[100vh] md:flex overflow-hidden relative"
    >
      <div
        className="absolute right-10 top-5 text-lg lg:text-black text-white cursor-pointer"
        onClick={() => Setsidebar(true)}
      >
        <FaBars />
      </div>

      {/* Left Section */}
      <div className="w-screen h-1/3 md:w-1/3 md:h-full bg-slate-950 flex justify-center text-white">
        <h1 className={styles.Name}>Rakesh Sunki</h1>
      </div>

      {/* Right Section */}
      <div className="w-screen h-2/3 md:w-2/3 md:h-screen bg-red-200 flex items-center justify-center p-[1rem]">
        <div className={styles.Role}>
          <h1 className="font-mono text-4xl">Hi I am a</h1>
          <Typewriter text={para} speed={150} delay={2000} />
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`${styles.img} absolute top-40 left-30 w-60 h-60 lg:top-30 lg:left-45 bg-white rounded-full shadow-xl flex items-center justify-center `}
      >
        <img
          src="./RakeshPassportsize.jpg"
          className="w-[97%] h-[97%] !rounded-full"
        />
      </div>

      {/* Download Button */}
      <button
        className="absolute top-[75%] left-[35%] md:left-[60%] md:top-[60%] rounded-[10px] bg-blue-600 hover:bg-blue-700 h-[2rem] w-[10rem] text-white"
        onClick={() => window.open("./RakeshResume.pdf")}
      >
        Download CV
      </button>

      {/* Sidebar Component */}
      <SideBar state={Sidebarstate} set={Setsidebar} />
    </div>
  );
};

export default LandingPage;
