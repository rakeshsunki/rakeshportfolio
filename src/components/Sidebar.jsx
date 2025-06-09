import { IoMdClose, IoIosPerson } from "react-icons/io";
import { FaHome, FaPhone, FaFolderOpen } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SideBar = ({ state, set }) => {
  const navigate = useNavigate();

  const navigateToSection = (path) => {
    navigate(path);
    set(false); // Close sidebar after navigation
  };

  // Animation variants
  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 20 },
  };

  const menuItems = [
    {
      path: "/",
      icon: <FaHome className="text-blue-400" />,
      label: "Home",
      hoverClass: "hover:bg-blue-700",
    },
    {
      path: "/about",
      icon: <IoIosPerson className="text-amber-400" />,
      label: "About Me",
      hoverClass: "hover:bg-amber-700",
    },
    {
      path: "/skills",
      icon: <HiMiniWrenchScrewdriver className="text-green-400" />,
      label: "Skills",
      hoverClass: "hover:bg-green-700",
    },
    {
      path: "/projects",
      icon: <FaFolderOpen className="text-purple-400" />,
      label: "Projects",
      hoverClass: "hover:bg-purple-700",
    },
    {
      path: "/contacts",
      icon: <FaPhone className="text-red-400" />,
      label: "Contacts",
      hoverClass: "hover:bg-red-700",
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {state && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => set(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 right-0 h-full bg-gradient-to-b from-slate-900 to-slate-950 text-xl font-sans text-white p-8 w-[80vw] md:w-[25vw] z-50 shadow-lg overflow-hidden"
        variants={sidebarVariants}
        initial="closed"
        animate={state ? "open" : "closed"}
      >
        {/* Close Icon with Animation */}
        <motion.div
          className="absolute top-5 right-5 cursor-pointer"
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => set(false)}
        >
          <IoMdClose className="text-2xl text-red-400" />
        </motion.div>

        {/* User Profile Section */}
        <motion.div
          className="flex flex-col items-center mt-6 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-400 mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="./RakeshPassportsize.jpg"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </motion.div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Rakesh Sunki
          </h2>
          <p className="text-sm text-gray-400 mt-1">Full Stack Developer</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
        />

        {/* Navigation Links with Staggered Animation */}
        <div className="w-full flex flex-col space-y-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              onClick={() => navigateToSection(item.path)}
              className={`flex items-center gap-3 p-3 rounded-lg border border-gray-800 backdrop-blur-sm 
                         ${item.hoverClass} cursor-pointer transition-all duration-300`}
              variants={itemVariants}
              custom={index}
              initial="closed"
              animate={state ? "open" : "closed"}
              transition={{ delay: 0.1 * index }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SocialLink href="https://github.com/rakeshsunki" icon="github" />
          <SocialLink
            href="https://linkedin.com/in/your-linkedin"
            icon="linkedin"
          />
          <SocialLink href="mailto:youremail@example.com" icon="email" />
        </motion.div>
      </motion.div>
    </>
  );
};

// Social Link Component
const SocialLink = ({ href, icon }) => {
  let iconElement;

  switch (icon) {
    case "github":
      iconElement = (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
      break;
    case "linkedin":
      iconElement = (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
      break;
    case "email":
      iconElement = (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
        </svg>
      );
      break;
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 hover:bg-blue-900 hover:text-white transition-colors"
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
    >
      {iconElement}
    </motion.a>
  );
};

export default SideBar;
