import styles from "./projectstyles.module.css";
import { FaCode } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";

const hoverColors = [
  "hover:bg-blue-900",
  "hover:bg-violet-900",
  "hover:bg-emerald-900",
  "hover:bg-pink-900",
  "hover:bg-yellow-900",
];

const Cards = ({ project }) => {
  return (
    <div className={styles.flipcard}>
      <div className={styles.card}>
        <div className={styles.front}>
          <h1>{project.name}</h1>
        </div>
        <div className={styles.back}>
          <h1>{project.name}</h1>
          <div className="h-[50%] w-[100%] content-center justify-items-center border-1 border-cyan-200 !rounded-[5px]">
            <img src={project.previewShot} />
          </div>
          <div className="flex justify-center space-x-2 mt-2 text-2xl">
            {project.icons &&
              project.icons.map((icon, index) => (
                <span
                  key={index}
                  className={`text-white bg-slate-900 rounded-[50%] text-4xl p-1.5 transition-colors duration-300 ${hoverColors[index % hoverColors.length]}`}
                >
                  {icon}
                </span>
              ))}
          </div>
          <center>Tech Stack Used</center>
          <div className="h-[30%] flex p-[1rem] justify-between items-center">
            <a
              href={project.github}
              target="_blank"
              className="bg-white w-[10%] h-[35%] text-black justify-items-center content-center transition-transform duration-[0.5s] hover:scale-x-[1.3] rounded-[50%]"
            >
              <FaCode />
            </a>
            <a
              href={project.play}
              target="-blank"
              className="bg-white w-[10%] h-[35%] text-black justify-items-center content-center transition-transform duration-[0.5s] hover:scale-x-[1.3] rounded-[50%]"
            >
              <IoMdPlay />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
