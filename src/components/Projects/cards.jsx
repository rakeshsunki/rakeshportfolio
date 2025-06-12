import styles from "./projectstyles.module.css";
import { FaCode } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import { motion } from "framer-motion";

const hoverColors = [
  "hover:bg-blue-900",
  "hover:bg-violet-900",
  "hover:bg-emerald-900",
  "hover:bg-pink-900",
  "hover:bg-yellow-900",
];

const Cards = ({ project }) => {
  // Check if the project should hide demo buttons
  const shouldHidePlayButton = project.name.includes("Linked List") || project.name.includes("Soil Class");

  return (
    <motion.div
      className={`${styles.flipcard} mx-auto max-w-[320px]`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className={styles.card}>
        <div
          className={`${styles.front} flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 shadow-xl`}
        >
          <h1 className="text-blue-200 text-lg md:text-xl font-semibold tracking-wide text-center drop-shadow px-4 py-4">
            {project.name}
          </h1>
        </div>
        <div
          className={`${styles.back} bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl`}
        >
          <h1 className="text-xl font-bold text-blue-300 mb-2">
            {project.name}
          </h1>
          <div className="h-[50%] w-[100%] content-center justify-items-center border-1 border-cyan-200 !rounded-[5px] overflow-hidden">
            <motion.img
              src={project.previewShot}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <motion.div
            className="flex justify-center space-x-2 mt-3 mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.icons &&
              project.icons.map((icon, index) => (
                <motion.span
                  key={index}
                  className={`text-white bg-slate-900 rounded-[50%] text-3xl p-1.5 transition-all duration-300 ${
                    hoverColors[index % hoverColors.length]
                  }`}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, -5, 0],
                    transition: { duration: 0.3 },
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                >
                  {icon}
                </motion.span>
              ))}
          </motion.div>
          <motion.p
            className="text-center text-blue-200 text-sm font-medium mt-1 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Tech Stack Used
          </motion.p>
          <div className={`h-[30%] flex p-[1rem] ${shouldHidePlayButton ? 'justify-center' : 'justify-between'} items-center`}>
            <motion.a
              href={project.github}
              target="_blank"
              className="bg-slate-800 text-blue-300 w-[40px] h-[40px] flex items-center justify-center transition-all duration-500 hover:bg-blue-900 hover:text-white rounded-full"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaCode />
            </motion.a>
            
            {/* Conditionally render the Play button */}
            {!shouldHidePlayButton && (
              <motion.a
                href={project.play}
                target="_blank"
                className="bg-slate-800 text-green-300 w-[40px] h-[40px] flex items-center justify-center transition-all duration-500 hover:bg-green-900 hover:text-white rounded-full"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoMdPlay />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
