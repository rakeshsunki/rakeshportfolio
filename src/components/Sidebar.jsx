import { IoMdClose, IoIosPerson } from "react-icons/io";
import { FaHome, FaPhone, FaFolderOpen } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

const SideBar = ({ state, set }) => {
  const Scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-slate-950 text-2xl font-[cursive] text-white p-[2rem] transition-all duration-500 ease-in-out
      w-[80vw] md:w-[20vw] transform ${
        state ? "translate-x-0" : "translate-x-full"
      }
      z-50 shadow-lg`}
    >
      {/* Close Icon */}
      <span
        onClick={() => set(false)}
        className="absolute top-5 right-5 cursor-pointer"
      >
        <IoMdClose />
      </span>

      {/* Sidebar Links */}
      <div className="w-full h-full flex flex-col mt-10">
        <span
          onClick={() => Scroll("home")}
          className="flex items-center justify-center rounded-[10px] m-3 p-2 border border-white hover:bg-blue-700"
        >
          <FaHome className="text-green-900" /> Home
        </span>
        <span
          onClick={() => Scroll("About")}
          className="flex items-center justify-center rounded-[10px] m-3 p-2 border border-white hover:bg-amber-200 hover:text-black"
        >
          <IoIosPerson className="text-blue-900" />
          About Me
        </span>
        <span
          onClick={() => Scroll("skills")}
          className="flex items-center justify-center rounded-[10px] m-3 p-2 border border-white hover:bg-white hover:text-black"
        >
          <HiMiniWrenchScrewdriver className="text-blue-900" /> Skills
        </span>
        <span
          onClick={() => Scroll("projects")}
          className="flex items-center justify-center rounded-[10px] m-3 p-2 border border-white hover:bg-cyan-950"
        >
          <FaFolderOpen className="text-amber-400" />
          Projects
        </span>
        <span
          onClick={() => Scroll("contact")}
          className="flex items-center justify-center rounded-[10px] m-3 p-2 border border-white hover:bg-green-600"
        >
          <FaPhone />
          Contacts
        </span>
      </div>
    </div>
  );
};

export default SideBar;
