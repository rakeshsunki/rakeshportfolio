import { MiniProjects, ProjectsList } from "../../store/projectsstore";
import Cards from "./cards";
import styles from "./projectstyles.module.css";
const Projects = () => {
  return (
    <div id="projects" className="w-[100vw] h-[fit-content] p-[1rem]">
      <div className="flex items-center">
        <span className="h-1 w-[10vw] bg-amber-100"></span>
        <span className={`${styles.About}`}>Projects</span>
        <span className="h-1 w-[20vw] md:w-[50vw] bg-amber-100"></span>
      </div>
      <h1 className="font-[cursive] text-white text-2xl">Major Projects</h1>
      <div className="flex flex-wrap justify-center items-center ">
        {ProjectsList.map((project, index) => (
          <Cards key={index} project={project} />
        ))}
      </div>
      <h1 className="font-[cursive] text-white text-2xl">Mini Fun Projects</h1>
      <div className="flex flex-wrap justify-center items-center ">
        {MiniProjects.map((project, index) => (
          <Cards key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
