import {
  IoCodeSlash,
  IoGameController,
  IoSchool,
  IoFastFood,
  IoSparkles,
} from "react-icons/io5";
import { motion } from "framer-motion";

const Hobbies = () => {
  return (
    <>
      <div className="bg-gray-900 p-4 sm:p-6 md:p-10 rounded-lg shadow-2xl max-w-full sm:max-w-2xl md:max-w-4xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {[
          {
            icon: <IoCodeSlash className="text-2xl sm:text-3xl md:text-4xl" />,
            name: "Coding",
            color: "bg-blue-600",
          },
          {
            icon: <IoFastFood className="text-2xl sm:text-3xl md:text-4xl" />,
            name: "Cooking",
            color: "bg-red-600",
          },
          {
            icon: <IoSchool className="text-2xl sm:text-3xl md:text-4xl" />,
            name: "Teaching",
            color: "bg-green-600",
          },
          {
            icon: <IoGameController className="text-2xl sm:text-3xl md:text-4xl" />,
            name: "Video Games",
            color: "bg-purple-600",
          },
          {
            icon: <IoSparkles className="text-2xl sm:text-3xl md:text-4xl" />,
            name: "Inner Engineering",
            color: "bg-yellow-500",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl text-white w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 ${item.color} cursor-pointer transition-all duration-300`}
            whileHover={{ scale: 1.1, rotate: 6, backgroundColor: "#1e293b" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            {item.icon}
            <span className="mt-2 sm:mt-3 font-bold text-base sm:text-lg md:text-xl text-center">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Hobbies;
