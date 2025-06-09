import { MiniProjects, ProjectsList } from "../../store/projectsstore";
import Cards from "./cards";
import styles from "./projectstyles.module.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCode } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io"; // Added missing import

// Import slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Custom arrow components for the slider
  const NextArrow = ({ onClick }) => (
    <motion.div
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-slate-800/60 p-3 rounded-full"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(30, 41, 59, 0.9)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <FaArrowRight className="text-blue-300 text-xl" />
    </motion.div>
  );

  const PrevArrow = ({ onClick }) => (
    <motion.div
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-slate-800/60 p-3 rounded-full"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(30, 41, 59, 0.9)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <FaArrowLeft className="text-blue-300 text-xl" />
    </motion.div>
  );

  // Settings for the major projects slider
  const majorSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setCurrentSlide(next),
    dotsClass: "slick-dots custom-dots",
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide ? "bg-blue-400 scale-125" : "bg-gray-400"
        }`}
      />
    ),
  };

  // Settings for the mini projects slider
  const miniSettings = {
    ...majorSettings,
    beforeChange: (_, next) => setCurrentSlide(next + ProjectsList.length),
  };

  return (
    <motion.div
      id="projects"
      className="w-[100vw] h-[fit-content] p-[1rem] pt-10 pb-16 mt-16 bg-gradient-to-b from-slate-900 to-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.div
        className="flex items-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.span
          className="h-1 w-[10vw] bg-amber-100"
          initial={{ width: 0 }}
          animate={{ width: "10vw" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.span>
        <motion.span
          className={`${styles.About}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
            stiffness: 200,
          }}
        >
          Projects
        </motion.span>
        <motion.span
          className="h-1 w-[20vw] md:w-[50vw] bg-amber-100"
          initial={{ width: 0 }}
          animate={{
            width: "20vw",
            "@media (min-width: 768px)": { width: "50vw" },
          }}
          transition={{ duration: 1.2, delay: 0.3 }}
        ></motion.span>
      </motion.div>

      {/* Major Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <h1 className="font-serif text-white text-2xl mb-6 border-l-4 border-blue-500 pl-3">
          Major Projects
        </h1>

        <div className="relative">
          <Slider {...majorSettings}>
            {ProjectsList.map((project, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-800/60 rounded-xl p-6">
                  {/* Left side - Project description */}
                  <motion.div
                    className="w-full md:w-1/2 text-white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                  >
                    <h2 className="text-2xl font-bold text-blue-300 mb-3">
                      {project.name}
                    </h2>
                    <p className="text-gray-300 mb-6">
                      {project.description ||
                        "This is an innovative project showcasing my skills in web development. Using modern technologies, I've created a responsive and interactive application that solves real-world problems."}
                    </p>

                    <div className="mb-4">
                      <h3 className="text-blue-200 text-lg mb-2">
                        Key Features:
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Responsive design for all devices</li>
                        <li>Interactive user interface</li>
                        <li>Performance optimized</li>
                        <li>Modern architecture</li>
                      </ul>
                    </div>

                    <div className="flex space-x-4 mt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        className="bg-slate-900 hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaCode /> <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={project.play}
                        target="_blank"
                        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IoMdPlay /> <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Right side - Flip card */}
                  <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                  >
                    <Cards project={project} />
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Mini Projects Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <h1 className="font-serif text-white text-2xl mb-6 border-l-4 border-green-500 pl-3">
          Mini Fun Projects
        </h1>

        <div className="relative">
          <Slider {...miniSettings}>
            {MiniProjects.map((project, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-800/60 rounded-xl p-6">
                  {/* Left side - Project description */}
                  <motion.div
                    className="w-full md:w-1/2 text-white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                  >
                    <h2 className="text-2xl font-bold text-green-300 mb-3">
                      {project.name}
                    </h2>
                    <p className="text-gray-300 mb-6">
                      {project.description ||
                        "A fun mini project I created to experiment with different concepts and technologies. It demonstrates my problem-solving skills and creativity."}
                    </p>

                    <div className="mb-4">
                      <h3 className="text-green-200 text-lg mb-2">
                        What I Learned:
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>New implementation techniques</li>
                        <li>Creative problem solving</li>
                        <li>Quick prototyping</li>
                        <li>Testing and optimization</li>
                      </ul>
                    </div>

                    <div className="flex space-x-4 mt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        className="bg-slate-900 hover:bg-green-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaCode /> <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={project.play}
                        target="_blank"
                        className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IoMdPlay /> <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Right side - Flip card */}
                  <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                  >
                    <Cards project={project} />
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
