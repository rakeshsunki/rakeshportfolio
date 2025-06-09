import { useState, useEffect } from "react";
import IMAGES from "../store/images";
import { motion } from "framer-motion";
import styles from "./landingpage.module.css";
import Spinner from "./Animation/3Danimation";

const Skills = () => {
  const [activeView, setActiveView] = useState("carousel");
  const [activeCategory, setActiveCategory] = useState("all");
  const imageSet = [...IMAGES];
  
  // Group skills by category
  const categories = {
    all: imageSet,
    frontend: imageSet.filter(img => ["html", "CSS3", "JavaScript", "REACT", "REDUX", "TAILWINDCSS", "MUI"].includes(img.name)),
    backend: imageSet.filter(img => ["C", "C++", "PYTHON", "SQL"].includes(img.name)),
    data: imageSet.filter(img => ["PANDAS", "POWERBI", "SQL", "PYTHON"].includes(img.name))
  };
  
  const filteredImages = categories[activeCategory] || categories.all;

  return (
    <motion.div
      id="skills"
      className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header with animated lines */}
      <motion.div 
        className="flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.span 
          className="h-1 w-[10vw] bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "10vw" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.span>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mx-4 uppercase tracking-wider px-3">
          My Skills
        </h2>
        
        <motion.span 
          className="h-1 w-[10vw] bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "10vw" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.span>
      </motion.div>

      {/* View Switcher */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10">
          {/* View Toggle */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 flex justify-center">
            <ViewToggle activeView={activeView} setActiveView={setActiveView} />
          </div>
          
          {/* Category Filter - Only shown in carousel view */}
          {activeView === "carousel" && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 flex justify-center flex-wrap">
              {["all", "frontend", "backend", "data"].map(category => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                    activeCategory === category 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Skills Display Area */}
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {activeView === "3d" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EnhancedSpinner />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2"
          >
            {filteredImages.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index} 
              />
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Skill description area */}
      <motion.div 
        className="mt-16 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-blue-300 text-lg font-medium mb-3">Professional Competencies</p>
        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Delivering High-Quality Solutions
        </h3>
        <p className="text-gray-400 leading-relaxed">
          With expertise in both frontend and backend technologies, along with a strong foundation in 
          data structures and algorithms, I create responsive, scalable, and efficient applications.
          My continuous learning approach ensures I stay updated with the latest industry trends and best practices.
        </p>
      </motion.div>
    </motion.div>
  );
};

// Enhanced View Toggle Component
const ViewToggle = ({ activeView, setActiveView }) => {
  return (
    <div className="flex rounded-lg bg-slate-700/40 p-1">
      <motion.button
        className={`relative px-5 py-2 rounded-md text-sm font-medium ${
          activeView === "carousel" ? "text-white" : "text-gray-400"
        }`}
        onClick={() => setActiveView("carousel")}
        whileTap={{ scale: 0.97 }}
      >
        {activeView === "carousel" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md -z-10"
            layoutId="toggleBackground"
            initial={false}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          />
        )}
        Grid View
      </motion.button>
      
      <motion.button
        className={`relative px-5 py-2 rounded-md text-sm font-medium ${
          activeView === "3d" ? "text-white" : "text-gray-400"
        }`}
        onClick={() => setActiveView("3d")}
        whileTap={{ scale: 0.97 }}
      >
        {activeView === "3d" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md -z-10"
            layoutId="toggleBackground"
            initial={false}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          />
        )}
        3D View
      </motion.button>
    </div>
  );
};

// Enhanced Spinner Component (just add some improvements to the container)
const EnhancedSpinner = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl shadow-blue-500/10 backdrop-blur-sm">
      <Spinner />
    </div>
  );
};

// New Skill Card Component
const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="group relative h-40 rounded-xl overflow-hidden border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.4 }}
      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="flex flex-col items-center justify-center h-full p-4">
        <motion.div 
          className="w-16 h-16 mb-3 flex items-center justify-center"
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          <img 
            src={`./${skill.link}`} 
            alt={skill.name} 
            className="max-w-full max-h-full object-contain" 
          />
        </motion.div>
        <span className="text-blue-100 font-medium text-center group-hover:text-white transition-colors">
          {skill.name}
        </span>
        
        {/* Experience level indicator */}
        <div className="mt-2 w-full bg-slate-700/50 h-1.5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
            initial={{ width: 0 }}
            animate={{ width: `${(skill.level || 75) + 10}%` }}
            transition={{ delay: 0.05 * index + 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
