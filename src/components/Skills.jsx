import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "./Animation/3Danimation";

// Define skills directly in the component to avoid import issues
const SKILLS = [
  { name: "Html", link: "Html.svg", level: 90 },
  { name: "CSS", link: "CSS.svg", level: 85 },
  { name: "JavaScript", link: "JavaScript.svg", level: 85 },
  { name: "REACT", link: "REACT.svg", level: 80 },
  { name: "REDUX", link: "REDUX.svg", level: 75 },
  { name: "TAILWINDCSS", link: "TAILWINDCSS.svg", level: 80 },
  { name: "MUI", link: "MUI.svg", level: 75 },
  { name: "BOOTSTRAP", link: "BOOTSTRAP.svg", level: 70 },
  { name: "MongoDB", link: "MongoDB.svg", level: 80 },
  { name: "Mongoose", link: "Mongoose.svg", level: 75 },
  { name: "Node-js", link: "Node-js.svg", level: 80 },
  { name: "SQL", link: "SQL.svg", level: 75 },
  { name: "Express", link: "Express.svg", level: 80 },
  { name: "C", link: "C.svg", level: 85 },
  { name: "C++", link: "C++.svg", level: 85 },
  { name: "PYTHON", link: "PYTHON.svg", level: 75 },
  { name: "PANDAS", link: "PANDAS.svg", level: 70 },
  { name: "POWERBI", link: "POWERBI.svg", level: 70 },
  { name: "DSA", link: "DSA.svg", level: 80 },
];

// Predefined categories
const CATEGORIES = {
  all: SKILLS,
  frontend: SKILLS.filter((skill) =>
    [
      "REACT",
      "REDUX",
      "Html",
      "CSS",
      "JavaScript",
      "TAILWINDCSS",
      "MUI",
      "BOOTSTRAP",
    ].includes(skill.name)
  ),
  backend: SKILLS.filter((skill) =>
    [
      "MongoDB",
      "Mongoose",
      "Node-js",
      "Express",
      "SQL",
      "C",
      "C++",
      "PYTHON",
    ].includes(skill.name)
  ),
  data: SKILLS.filter((skill) =>
    ["PANDAS", "POWERBI", "SQL", "PYTHON", "MongoDB"].includes(skill.name)
  ),
};

const Skills = () => {
  const [activeView, setActiveView] = useState("carousel");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isReady, setIsReady] = useState(false);

  // Make sure component is mounted before animating
  useEffect(() => {
    setIsReady(true);
  }, []);

  const filteredSkills = CATEGORIES[activeCategory] || CATEGORIES.all;

  return (
    <motion.div
      id="skills"
      className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header - Simple version */}
      <motion.div
        className="flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider px-3">
          My Skills
        </h2>
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
              {Object.keys(CATEGORIES).map((category) => (
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
        <AnimatePresence mode="wait">
          {activeView === "3d" ? (
            <motion.div
              key="spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl shadow-blue-500/10 backdrop-blur-sm">
                <Spinner />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2"
            >
              {filteredSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Skill description area */}
      <motion.div
        className="mt-16 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-blue-300 text-lg font-medium mb-3">
          Professional Competencies
        </p>
        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Delivering High-Quality Solutions
        </h3>
        <p className="text-gray-400 leading-relaxed">
          With expertise in both frontend and backend technologies, along with a
          strong foundation in data structures and algorithms, I create
          responsive, scalable, and efficient applications. My continuous
          learning approach ensures I stay updated with the latest industry
          trends and best practices.
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
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          />
        )}
        3D View
      </motion.button>
    </div>
  );
};

// Skill Card with error handling and proper animation
const SkillCard = ({ skill, index }) => {
  const [imageError, setImageError] = useState(false);

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
          {!imageError ? (
            <img
              src={`./${skill.link}`}
              alt={skill.name}
              className="max-w-full max-h-full object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-16 h-16 flex items-center justify-center bg-slate-700 text-white text-xs rounded-full">
              {skill.name}
            </div>
          )}
        </motion.div>
        <span className="text-blue-100 font-medium text-center group-hover:text-white transition-colors">
          {skill.name}
        </span>

        {/* Safe Level indicator using transform instead of width */}
        <div className="mt-2 w-full bg-slate-700/50 h-1.5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 origin-left"
            style={{ width: "100%" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: ((skill.level || 75) + 10) / 100 }}
            transition={{
              delay: 0.05 * index + 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
