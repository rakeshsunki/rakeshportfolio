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
      <div className="bg-gray-900 p-10 rounded-lg shadow-2xl max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
        {[
          {
            icon: <IoCodeSlash size={40} />,
            name: "Coding",
            color: "bg-blue-600",
          },
          {
            icon: <IoFastFood size={40} />,
            name: "Cooking",
            color: "bg-red-600",
          },
          {
            icon: <IoSchool size={40} />,
            name: "Teaching",
            color: "bg-green-600",
          },
          {
            icon: <IoGameController size={40} />,
            name: "Video Games",
            color: "bg-purple-600",
          },
          {
            icon: <IoSparkles size={40} />,
            name: "Inner Engineering",
            color: "bg-yellow-500",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-xl text-white w-36 h-36 ${item.color} cursor-pointer transition-all duration-300`}
            whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "#1e293b" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            {item.icon}
            <span className="mt-3 font-bold text-lg">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Hobbies;
