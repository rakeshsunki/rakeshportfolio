import { useState } from "react";
import { motion } from "framer-motion";
import "./SkillsOrb.css";
import { SKILLS_DATA } from "../../data/skillsData";

const SkillsOrb = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Responsive dimensions
  const svgWidth = 800;
  const svgHeight = 600;
  const radius = 240; // Reduced for better fit
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  // Use centralized skills data
  const skills = SKILLS_DATA;

  return (
    <div className="skills-orb-container">
      {/* Control Panel */}
      <div className="controls">
        <motion.button
          className="control-btn"
          onClick={() => setIsRotating(!isRotating)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRotating ? "⏸️ Pause" : "▶️ Play"}
        </motion.button>
      </div>

      {/* Skills Orbit */}
      <div className="orb-wrapper">
        <svg
          width={svgWidth}
          height={svgHeight}
          className="skills-svg"
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        >
          {/* Central hub */}
          <motion.circle
            cx={centerX}
            cy={centerY}
            r="50"
            fill="url(#centralGradient)"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="3"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orbit rings */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />

          {/* Skills nodes */}
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length;
            const radian = (angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(radian);
            const y = centerY + radius * Math.sin(radian);

            return (
              <SkillNode
                key={skill.name}
                skill={skill}
                x={x}
                y={y}
                centerX={centerX}
                centerY={centerY}
                isRotating={isRotating}
                onSelect={setSelectedSkill}
                isSelected={selectedSkill?.name === skill.name}
              />
            );
          })}

          {/* Gradients */}
          <defs>
            <radialGradient id="centralGradient">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.4)" />
            </radialGradient>
          </defs>
        </svg>

        {/* Skill Info Panel */}
        {selectedSkill && (
          <motion.div
            className="skill-info"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h3>{selectedSkill.name}</h3>
            <div className="skill-level">
              <span>Proficiency: {selectedSkill.level}%</span>
              <div className="level-bar">
                <motion.div
                  className="level-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ backgroundColor: selectedSkill.color }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const SkillNode = ({
  skill,
  x,
  y,
  centerX,
  centerY,
  isRotating,
  onSelect,
  isSelected,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.g
      animate={
        isRotating
          ? {
              rotate: 360,
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }
          : {}
      }
      style={{ transformOrigin: `${centerX}px ${centerY}px` }}
    >
      <motion.circle
        cx={x}
        cy={y}
        r={isSelected || isHovered ? "35" : "28"}
        fill={isSelected ? skill.color : "rgba(15, 23, 42, 0.9)"}
        stroke={skill.color}
        strokeWidth="2"
        className="skill-node"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onSelect(skill)}
        whileHover={{ scale: 1.2 }}
        animate={
          isSelected
            ? {
                scale: [1, 1.2, 1],
                transition: { duration: 1, repeat: Infinity },
              }
            : {}
        }
      />

      {/* Skill icon */}
      <foreignObject
        x={x - 16}
        y={y - 16}
        width="32"
        height="32"
        className="skill-icon"
        onClick={() => onSelect(skill)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!imageError ? (
          <img
            src={`/${skill.icon}`}
            alt={skill.name}
            onError={() => setImageError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: isSelected ? "brightness(1.2)" : "brightness(0.9)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
              color: "white",
              textAlign: "center",
            }}
          >
            {skill.name}
          </div>
        )}
      </foreignObject>

      {/* Skill name label */}
      <text
        x={x}
        y={y + 55}
        textAnchor="middle"
        fontSize="13"
        fill="white"
        className="skill-label"
        onClick={() => onSelect(skill)}
      >
        {skill.name}
      </text>
    </motion.g>
  );
};

export default SkillsOrb;
