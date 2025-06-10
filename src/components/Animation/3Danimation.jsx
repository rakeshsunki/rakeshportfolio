import { useEffect, useState } from "react";
import styles from "./SpinnerAnime.module.css";
import { motion } from "framer-motion";

const Spinner = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [manualRotation, setManualRotation] = useState(0);
  const [loadingErrors, setLoadingErrors] = useState({});

  // Skills with levels (1-100)
  const skills = [
    { name: "JavaScript", icon: "JavaScript.svg", level: 90 },
    { name: "React", icon: "REACT.svg", level: 85 },
    { name: "Redux", icon: "REDUX.svg", level: 80 },
    { name: "HTML", icon: "Html.svg", level: 95 },
    { name: "CSS", icon: "CSS.svg", level: 90 },
    { name: "TailwindCSS", icon: "TAILWINDCSS.svg", level: 85 },
    { name: "Material UI", icon: "MUI.svg", level: 75 },
    // Backend technologies added
    { name: "Node.js", icon: "Node-js.svg", level: 85 },
    { name: "Express", icon: "Express.svg", level: 80 },
    { name: "MongoDB", icon: "MongoDB.svg", level: 80 },
    { name: "Mongoose", icon: "Mongoose.svg", level: 75 },
    // Existing backend/other skills
    { name: "C++", icon: "C++.svg", level: 80 },
    { name: "C", icon: "C.svg", level: 85 },
    { name: "Python", icon: "PYTHON.svg", level: 75 },
    { name: "SQL", icon: "SQL.svg", level: 80 },
    { name: "DSA", icon: "DSA.svg", level: 85 },
    { name: "Pandas", icon: "PANDAS.svg", level: 70 },
    { name: "Power BI", icon: "POWERBI.svg", level: 65 },
  ];

  // Controls for the 3D spinner
  useEffect(() => {
    const handleScroll = (e) => {
      if (!isRotating) {
        setManualRotation((prev) => prev + e.deltaY * 0.2);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isRotating]);

  const handleImageError = (skillName) => {
    setLoadingErrors((prev) => ({ ...prev, [skillName]: true }));
  };

  return (
    <div className={styles.Banner}>
      {/* Floating particles effect */}
      <ParticlesEffect />

      <motion.div
        className="absolute bottom-4 left-0 right-0 flex justify-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <button
          className="px-4 py-2 rounded-full bg-blue-600/30 backdrop-blur-sm text-white text-sm border border-blue-500/30 hover:bg-blue-600/50 transition-colors"
          onClick={() => setIsRotating(!isRotating)}
        >
          {isRotating ? "Pause Rotation" : "Start Rotation"}
        </button>
      </motion.div>

      <div
        className={styles.Slider}
        style={{
          "--quantity": skills.length,
          animation: isRotating ? "autoRun 25s linear infinite" : "none",
          transform: !isRotating
            ? `perspective(1200px) rotateX(-10deg) rotateY(${manualRotation}deg)`
            : undefined,
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.Item}
            style={{ "--position": index + 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {loadingErrors[skill.name] ? (
              <div className="w-full h-4/5 flex items-center justify-center bg-slate-800 rounded-lg">
                <span className="text-blue-400 text-sm">{skill.name}</span>
              </div>
            ) : (
              <img
                src={`./${skill.icon}`}
                alt={skill.name}
                onError={() => handleImageError(skill.name)}
              />
            )}
            <span>{skill.name}</span>

            {/* Fixed skill level indicator */}
            <div className="h-1 w-full bg-slate-700/50 mt-1 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 origin-left"
                style={{ width: "100%" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: skill.level / 100 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Floating particles background effect
const ParticlesEffect = () => {
  return (
    <div className="absolute inset-0 z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/20"
          style={{
            width: Math.random() * 8 + 3,
            height: Math.random() * 8 + 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -50 - 20],
            x: [0, Math.random() * 40 - 20],
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Spinner;
