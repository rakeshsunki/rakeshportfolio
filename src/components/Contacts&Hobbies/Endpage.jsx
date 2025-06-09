import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contacts from "./Contacts";
import Hobbies from "./Hobbies";
import { IoMailOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

const Endpage = () => {
  const [activeTab, setActiveTab] = useState("contacts");

  return (
    <motion.div
      id="contact"
      className="min-h-screen w-full mt-16 bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <motion.div
        className="flex items-center justify-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.span
          className="h-1 w-20 bg-amber-100"
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.span>
        <h2 className="text-3xl font-bold text-center text-white mx-4 uppercase tracking-wider">
          Get In Touch
        </h2>
        <motion.span
          className="h-1 w-20 bg-amber-100"
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.span>
      </motion.div>

      {/* Tab Selection */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex bg-gray-800 rounded-lg p-1.5 shadow-lg">
          <button
            className={`flex items-center justify-center gap-2 py-2.5 px-4 sm:px-8 text-sm sm:text-base font-medium rounded-md transition-all duration-300 flex-1 ${
              activeTab === "contacts"
                ? "bg-blue-600 text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveTab("contacts")}
          >
            <IoMailOutline className="text-lg" />
            <span>Contact Me</span>
          </button>
          <button
            className={`flex items-center justify-center gap-2 py-2.5 px-4 sm:px-8 text-sm sm:text-base font-medium rounded-md transition-all duration-300 flex-1 ${
              activeTab === "hobbies"
                ? "bg-purple-600 text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveTab("hobbies")}
          >
            <BsStars className="text-lg" />
            <span>My Hobbies</span>
          </button>
        </div>
      </div>

      {/* Content Area with Animation */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === "contacts" ? (
            <motion.div
              key="contacts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Contacts />
            </motion.div>
          ) : (
            <motion.div
              key="hobbies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Hobbies />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Endpage;
