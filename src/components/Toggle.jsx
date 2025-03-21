import { motion } from "framer-motion";

const ToggleButton = ({ isOn, setIsOn }) => {
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`w-16 h-8 flex items-center px-1 cursor-pointer rounded-full transition-colors duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-md"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        animate={{ x: isOn ? 28 : 0 }}
      />
    </div>
  );
};

export default ToggleButton;
