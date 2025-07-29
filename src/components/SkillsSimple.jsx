import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillsOrb from "./Animation/SkillsOrb";
import { SKILLS_DATA, CATEGORIES, CATEGORY_INFO } from "../data/skillsData";

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const [activeView, setActiveView] = useState("carousel");
  const [activeCategory, setActiveCategory] = useState("all");

  // Simple mount detection
  useEffect(() => {
    setMounted(true);
    console.log("Skills component mounted"); // Debug log
  }, []);

  const filteredSkills = CATEGORIES[activeCategory] || CATEGORIES.all;
  // Show loading while mounting
  if (!mounted) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4">
      {/* Enhanced Header with Category Info */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">
          My Skills
        </h2>

        {/* Category Display */}
        {activeView === "carousel" && activeCategory !== "all" && (
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">
              {CATEGORY_INFO[activeCategory]?.icon}
            </span>
            <div className="text-center">
              <h3
                className={`text-xl font-semibold bg-gradient-to-r ${CATEGORY_INFO[activeCategory]?.gradient} bg-clip-text text-transparent`}
              >
                {CATEGORY_INFO[activeCategory]?.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {CATEGORY_INFO[activeCategory]?.description}
              </p>
            </div>
          </div>
        )}

        {/* Skills Count */}
        <div className="flex items-center gap-2 text-blue-300">
          <span className="text-sm">Showing</span>
          <span className="bg-blue-600/20 px-3 py-1 rounded-full text-sm font-medium">
            {filteredSkills.length}{" "}
            {filteredSkills.length === 1 ? "skill" : "skills"}
          </span>
        </div>
      </div>

      {/* View Switcher */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10">
          {/* View Toggle */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 flex justify-center">
            <ViewToggle activeView={activeView} setActiveView={setActiveView} />
          </div>

          {/* Enhanced Category Filter */}
          {activeView === "carousel" && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 flex justify-center flex-wrap gap-2">
              {Object.keys(CATEGORIES).map((category) => {
                const info = CATEGORY_INFO[category];
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium capitalize transition-all duration-200 flex items-center gap-2 ${
                      activeCategory === category
                        ? `bg-gradient-to-r ${info.gradient} text-white shadow-lg scale-105`
                        : "text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-600/50"
                    }`}
                  >
                    <span className="text-base">{info.icon}</span>
                    <span>
                      {category === "all" ? "All" : info.title.split(" ")[0]}
                    </span>
                    <span className="text-xs opacity-75 ml-1">
                      ({CATEGORIES[category].length})
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Skills Display Area */}
      <div className="max-w-7xl mx-auto">
        {activeView === "orbit" ? (
          <div className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl shadow-blue-500/10 backdrop-blur-sm bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-4">
            <SkillsOrb />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-2">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      layout: { duration: 0.3 },
                    }}
                  >
                    <SkillCard skill={skill} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Category Summary */}
            {activeCategory !== "all" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl">
                      {CATEGORY_INFO[activeCategory]?.icon}
                    </span>
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${CATEGORY_INFO[activeCategory]?.gradient} bg-clip-text text-transparent`}
                    >
                      {CATEGORY_INFO[activeCategory]?.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">
                    {CATEGORY_INFO[activeCategory]?.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <span>• {filteredSkills.length} Technologies</span>
                    <span>
                      •{" "}
                      {Math.round(
                        filteredSkills.reduce(
                          (acc, skill) => acc + skill.level,
                          0
                        ) / filteredSkills.length
                      )}
                      % Average Proficiency
                    </span>
                    <span>
                      •{" "}
                      {filteredSkills
                        .reduce((acc, skill) => {
                          const years = parseFloat(
                            skill.years.replace("+", "")
                          );
                          return acc + years;
                        }, 0)
                        .toFixed(1)}
                      + Years Combined Experience
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Enhanced Skill Description Area */}
      <div className="mt-20 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Frontend */}
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-pink-400 text-xl font-bold mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating responsive, interactive user interfaces with modern
              frameworks like React, styled with Tailwind CSS and enhanced with
              smooth animations.
            </p>
            <div className="mt-4 flex justify-center">
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-medium">
                {CATEGORIES.frontend.length} Technologies
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-green-400 text-xl font-bold mb-3">
              Backend Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building robust server-side applications with Node.js, Express,
              and databases like MongoDB. Strong foundation in C/C++ and
              algorithmic problem solving.
            </p>
            <div className="mt-4 flex justify-center">
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                {CATEGORIES.backend.length} Technologies
              </span>
            </div>
          </div>

          {/* Data Science */}
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-yellow-400 text-xl font-bold mb-3">
              Data Science
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Analyzing and visualizing data using Python, Pandas, and Power BI
              to derive meaningful insights and create compelling data-driven
              narratives.
            </p>
            <div className="mt-4 flex justify-center">
              <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                {CATEGORIES.data.length} Technologies
              </span>
            </div>
          </div>
        </div>

        {/* Overall Description */}
        <div className="text-center">
          <p className="text-blue-300 text-lg font-medium mb-3">
            Full-Stack Developer & Problem Solver
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Building Digital Solutions with Passion
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
            With expertise spanning across{" "}
            <strong className="text-white">
              {CATEGORIES.frontend.length} frontend technologies
            </strong>
            ,
            <strong className="text-white">
              {" "}
              {CATEGORIES.backend.length} backend tools
            </strong>
            , and
            <strong className="text-white">
              {" "}
              {CATEGORIES.data.length} data science platforms
            </strong>
            , I create comprehensive solutions that bridge the gap between user
            experience and technical excellence. My continuous learning approach
            ensures I stay at the forefront of technological innovation.
          </p>

          {/* Statistics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {SKILLS_DATA.length}+
              </div>
              <div className="text-gray-500 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">3+</div>
              <div className="text-gray-500 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">
                {Math.round(
                  SKILLS_DATA.reduce((acc, skill) => acc + skill.level, 0) /
                    SKILLS_DATA.length
                )}
                %
              </div>
              <div className="text-gray-500 text-sm">Avg Proficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">4</div>
              <div className="text-gray-500 text-sm">Specializations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced View Toggle Component
const ViewToggle = ({ activeView, setActiveView }) => {
  return (
    <div className="relative flex rounded-xl bg-slate-800/70 backdrop-blur-sm p-1.5 border border-slate-600/30">
      {/* Background sliding indicator */}
      <div
        className={`absolute top-1.5 h-[calc(100%-12px)] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg transition-all duration-300 ease-out ${
          activeView === "carousel"
            ? "left-1.5 w-[calc(50%-6px)]"
            : "left-[calc(50%+1.5px)] w-[calc(50%-6px)]"
        }`}
      />

      <button
        className={`relative z-10 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 min-w-[120px] justify-center ${
          activeView === "carousel"
            ? "text-white shadow-sm"
            : "text-gray-300 hover:text-white"
        }`}
        onClick={() => setActiveView("carousel")}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        Grid View
      </button>

      <button
        className={`relative z-10 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 min-w-[120px] justify-center ${
          activeView === "orbit"
            ? "text-white shadow-sm"
            : "text-gray-300 hover:text-white"
        }`}
        onClick={() => setActiveView("orbit")}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h8M12 8v8"
          />
        </svg>
        Orbit View
      </button>
    </div>
  );
};

// Enhanced Skill Card with detailed information
const SkillCard = ({ skill, index }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to get proficiency level text
  const getProficiencyLevel = (level) => {
    if (level >= 90) return { text: "Expert", color: "text-emerald-400" };
    if (level >= 80) return { text: "Advanced", color: "text-blue-400" };
    if (level >= 70) return { text: "Intermediate", color: "text-yellow-400" };
    return { text: "Beginner", color: "text-orange-400" };
  };

  const proficiency = getProficiencyLevel(skill.level);

  return (
    <motion.div
      className="group relative h-48 rounded-xl overflow-hidden border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      style={{
        transformStyle: "preserve-3d",
        backgroundColor: isHovered ? `${skill.color}10` : "transparent",
      }}
    >
      {/* Animated background gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${skill.color}20, transparent 70%)`,
        }}
      />

      {/* Skill level indicator bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-700/50 overflow-hidden">
        <motion.div
          className="h-full transition-all duration-1000 ease-out"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.1 }}
        />
      </div>

      <div className="flex flex-col items-center justify-between h-full p-4 relative z-10">
        {/* Icon and Name Section */}
        <div className="flex flex-col items-center flex-1 justify-center">
          <div className="w-16 h-16 mb-3 flex items-center justify-center relative">
            {!imageError ? (
              <motion.img
                src={`/${skill.link}`}
                alt={skill.name}
                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                onError={() => setImageError(true)}
                whileHover={{ rotateY: 10 }}
              />
            ) : (
              <div
                className="w-16 h-16 flex items-center justify-center text-white text-xs rounded-full border-2"
                style={{
                  borderColor: skill.color,
                  backgroundColor: `${skill.color}20`,
                }}
              >
                {skill.name}
              </div>
            )}
          </div>

          <h3 className="text-blue-100 font-semibold text-center group-hover:text-white transition-colors leading-tight">
            {skill.name}
          </h3>
        </div>

        {/* Skills Information */}
        <div className="w-full space-y-2">
          {/* Proficiency Level */}
          <div className="flex items-center justify-between text-xs">
            <span className={`${proficiency.color} font-medium`}>
              {proficiency.text}
            </span>
            <span className="text-gray-400">{skill.years} years</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ backgroundColor: skill.color }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ delay: index * 0.1 + 0.3 }}
            />
          </div>

          {/* Percentage */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Proficiency</span>
            <span className="font-bold" style={{ color: skill.color }}>
              {skill.level}%
            </span>
          </div>
        </div>

        {/* Hover Description */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm p-4 flex flex-col justify-center items-center rounded-xl border border-slate-600"
            >
              <div className="text-center">
                <h3 className="text-white font-bold mb-2">{skill.name}</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  {skill.description}
                </p>
                <div className="flex items-center justify-center gap-4 text-xs">
                  <span className={`${proficiency.color} font-medium`}>
                    {proficiency.text}
                  </span>
                  <span className="text-gray-400">{skill.years} exp</span>
                  <span className="font-bold" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Skills;
