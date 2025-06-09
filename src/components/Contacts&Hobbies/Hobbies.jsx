import {
  IoCodeSlash,
  IoGameController,
  IoSchool,
  IoFastFood,
  IoSparkles,
} from "react-icons/io5";
import { motion } from "framer-motion";

const Hobbies = () => {
  const hobbies = [
    {
      icon: <IoCodeSlash />,
      name: "Coding",
      color: "from-blue-600 to-blue-800",
      description: "Building projects and solving programming challenges",
      delay: 0.1,
    },
    {
      icon: <IoFastFood />,
      name: "Cooking",
      color: "from-red-600 to-red-800",
      description: "Exploring recipes and cuisines from around the world",
      delay: 0.2,
    },
    {
      icon: <IoSchool />,
      name: "Teaching",
      color: "from-green-600 to-green-800",
      description: "Sharing knowledge and helping others learn",
      delay: 0.3,
    },
    {
      icon: <IoGameController />,
      name: "Gaming",
      color: "from-purple-600 to-purple-800",
      description: "Enjoying strategy and adventure video games",
      delay: 0.4,
    },
    {
      icon: <IoSparkles />,
      name: "Inner Engineering",
      color: "from-yellow-500 to-yellow-700",
      description: "Meditation and personal growth practices",
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border-b border-white/10">
        <h2 className="text-2xl font-bold text-white">My Hobbies & Interests</h2>
        <p className="text-purple-200 mt-1">Things I enjoy in my free time</p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={itemVariants}
            transition={{
              duration: 0.4,
              delay: hobby.delay,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
            <motion.div
              className={`relative flex flex-col h-full bg-gradient-to-br ${hobby.color} rounded-xl overflow-hidden`}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
              <div className="absolute left-0 bottom-0 w-16 h-16 bg-black/10 rounded-tr-full"></div>

              <div className="p-6 flex-grow">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 5,
                      ease: "easeInOut",
                    }}
                    className="text-3xl text-white"
                  >
                    {hobby.icon}
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {hobby.name}
                </h3>
                <p className="text-white/80 text-sm">{hobby.description}</p>
              </div>

              <div className="p-4 bg-black/20 border-t border-white/10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1.5 w-1.5 bg-white/50 rounded-full"
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hobbies;
