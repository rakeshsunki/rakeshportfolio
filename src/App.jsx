import "./App.css";
import AboutMe from "./components/Aboutme";
import Spinner from "./components/Animation/3Danimation";
import Endpage from "./components/Contacts&Hobbies/Endpage";
import Footer from "./components/Footer";
import LandingPage from "./components/landingpage";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
import { BsRocketFill } from "react-icons/bs";

function App() {
  return (
    <>
      <LandingPage />
      <button
        className="sticky top-[90%] left-[90%] rounded-[50%] bg-white hover:bg-blue-700 h-[2rem] w-[2rem] text-black hover:text-white justify-items-center content-center z-10"
        onClick={() => scrollTo({ top, behavior: "smooth" })}
      >
        <BsRocketFill />
      </button>
      <AboutMe />
      <Skills />
      <Projects />
      <Endpage />
      <Footer />
    </>
  );
}

export default App;
