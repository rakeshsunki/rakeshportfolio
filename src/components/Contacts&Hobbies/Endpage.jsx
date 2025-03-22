import { useState } from "react";
import Contacts from "./Contacts";
import Hobbies from "./Hobbies";

const Endpage = () => {
  const [Hover, setHover] = useState("");
  return (
    <div
      id="contact"
      className="h-fit w-[100vw] whitespace-nowrap overflow-hidden relative"
    >
      <div
        className={`bg-[#282c34] w-[100vw] h-[80vh] flex transition-transform duration-500 ease-linear ${
          Hover === "Left" && "translate-x-[50%]"
        } ${Hover === "Right" && "translate-x-[-50%]"}`}
      >
        <div
          className={
            "w-[100vw] h-[90vh] bg-white p-5 relative left-[-50%] flex justify-center items-center"
          }
          onMouseEnter={() => setHover("Left")}
          onMouseLeave={() => setHover("")}
        >
          <div
            className={` w-[100vw] h-[80vh] opacity-0 transition-all duration-[0.5s] !justify-center ${
              Hover === "Left" ? "opacity-[1]" : ""
            }`}
          >
            <Contacts />
          </div>
          <h1 className="text-black shadow-blue-400 text-xl md:text-2xl">
            CONTACTS
          </h1>
        </div>
        <div
          className={
            " w-[100vw] h-[80vh]  bg-stone-800 p-5 flex relative left-[-50%]"
          }
          onMouseEnter={() => setHover("Right")}
          onMouseLeave={() => setHover("")}
        >
          <h1 className="text-white text-xl md:text-2xl">HOBBIES</h1>
          <div
            className={` w-[100vw] h-[90vh] opacity-0 transition-all duration-[0.5s] ${
              Hover === "Right" ? "opacity-[1]" : ""
            }`}
          >
            <Hobbies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endpage;
