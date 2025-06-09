import styles from "./landingpage.module.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <motion.div
        id="About"
        className="w-full h-[fit-content] bg-[#282c34] flex-row items-center justify-between p-10 mt-14 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title with animated lines */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.span
            className="h-1 w-[10vw] bg-amber-100"
            initial={{ width: 0 }}
            animate={{ width: "10vw" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.span>

          <motion.span
            className={`${styles.About}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              type: "spring",
              stiffness: 200,
            }}
          >
            ABOUT ME
          </motion.span>

          <motion.span
            className="h-1 bg-amber-100"
            initial={{ width: 0 }}
            animate={{
              width: "20vw",
              "@media (min-width: 768px)": { width: "50vw" },
            }}
            transition={{ duration: 1.2, delay: 0.5 }}
          ></motion.span>
        </motion.div>

        <div className="h-[100%] w-[100%] justify-items-center md:p-10 md:flex md:justify-between md:items-start">
          {/* Animated paragraph */}
          <motion.p
            className="w-[100%] md:w-[50%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            I am a Curios learner with a strong intrest in{" "}
            <motion.b
              initial={{ color: "#ffffff" }}
              animate={{ color: "#fcd34d" }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Web Development, and Technology, Data Analysis
            </motion.b>
            . I enjoy working on projects that involve{" "}
            <motion.b
              initial={{ color: "#ffffff" }}
              animate={{ color: "#fcd34d" }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              HTML, CSS, Java Script, React, Redux and backend development
            </motion.b>
            .
            <br />
            Iam passionate and dedicated developer with expertise in{" "}
            <motion.b
              initial={{ color: "#ffffff" }}
              animate={{ color: "#fcd34d" }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              C, C++, Python and SQL
            </motion.b>
            . I have a strong foundation in{" "}
            <motion.b
              initial={{ color: "#ffffff" }}
              animate={{ color: "#fcd34d" }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              Data Structures & Algorithms(DSA)
            </motion.b>
            . My experience also includes working with{" "}
            <motion.b
              initial={{ color: "#ffffff" }}
              animate={{ color: "#fcd34d" }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              Data Analysis
            </motion.b>{" "}
            libraries like{" "}
            <motion.b
              initial={{ color: "#ffffff" }}
              animate={{ color: "#fcd34d" }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              Pandas and Numpy
            </motion.b>{" "}
            enabling me to handle and process large data sets efficiently And{" "}
            <motion.b
              initial={{ color: "#ffffff" }}
              animate={{ color: "#fcd34d" }}
              transition={{ duration: 0.6, delay: 2.6 }}
            >
              Machine Learning
            </motion.b>
          </motion.p>

          {/* Animated image */}
          <motion.div
            className="w-[50%] md:w-[35%] mt-6 md:mt-0 flex items-center justify-center"
            initial={{ x: 100, opacity: 0, rotate: -5 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              type: "spring",
              damping: 15,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src="./coding.png"
              className="w-full rounded-lg shadow-lg shadow-amber-900/20"
              alt="Coding illustration"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
