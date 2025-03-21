import { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 100, delay = 1500 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const restartTimeout = setTimeout(() => {
        setIndex(0);
      }, delay);
      return () => clearTimeout(restartTimeout);
    }
  }, [index, text, speed, delay]);

  return <span className="text-black font-mono">{text.slice(0, index)}</span>;
};

export default Typewriter;
