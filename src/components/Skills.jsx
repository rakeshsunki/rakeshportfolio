import { useState } from "react";
import IMAGES from "../store/images";
import styles from "./landingpage.module.css";
import Spinner from "./Animation/3Danimation";
import ToggleButton from "./Toggle";

const Skills = () => {
  const imageSet = [...IMAGES, ...IMAGES];
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <div id="skills" className="flex items-center ml-[2rem] mt-16">
        <span className="h-1 w-[10vw] bg-amber-100"></span>
        <span className={`${styles.About}`}>Skills</span>

        <span className="h-1 w-[20vw] md:w-[50vw] bg-amber-100"></span>
      </div>
      <center className="text-white font-[cursive]">
        Switch
        <ToggleButton isOn={isOn} setIsOn={setIsOn} />
      </center>
      {isOn ? (
        <Spinner />
      ) : (
        <div className="m-10 h-[60vh] flex justify-center">
          <div className={styles.slider}>
            <div className={styles.slidertrack}>
              {imageSet.map((item, index) => (
                <div key={index}>
                  <img src={`./${item.link}`} alt={item.name} />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
