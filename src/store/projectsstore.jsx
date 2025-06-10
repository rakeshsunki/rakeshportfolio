import { SiRedux } from "react-icons/si";
import {
  FaReact,
  FaBootstrap,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { TbMathMax } from "react-icons/tb";
import { FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMongoose } from "react-icons/si";
export const ProjectsList = [
  {
    name: "Airbnb",
    previewShot: "./Airbnb.PNG",
    github: "https://github.com/rakeshsunki/Airbnb.git",
    play: "https://airbnb-50pt.onrender.com",
    icons: [<FaNodeJs />, <SiMongodb />, <RiTailwindCssFill />, <SiMongoose />],
    description:
      "Airbnb clone built with Node.js, MongoDB, and Tailwind CSS. It replicates the core features of Airbnb, allowing users to book and list properties.This is a Full Stack Project based on Server Side Rendering.",
  },
  {
    name: "FreshBasket",
    previewShot: "./FreshBasket.png",
    github: "https://github.com/rakeshsunki/freshbasket.git",
    play: "https://lively-cocada-1b28ba.netlify.app/",
    icons: [<FaReact />, <SiRedux />, <FaBootstrap />, <FaJsSquare />],
    description:
      "FreshBasket is a grocery shopping app clone using React, Redux, and Bootstrap. It allows users to browse products, add them to the cart, and checkout.This project focuses on the frontend, providing a responsive and user-friendly interface, Client Side Rendering.",
  },
  {
    name: "Amazon Clone",
    previewShot: "./amazon.png",
    github: "https://github.com/rakeshsunki/amazonclone.git",
    play: "https://radiant-zabaione-2af60f.netlify.app/",
    icons: [<FaReact />, <SiRedux />, <FaBootstrap />, <FaJsSquare />],
    description:
      "Amazon clone using React, Redux, and Bootstrap. It mimics Amazon's UI and functionality, including product listings, shopping cart, only frontend.",
  },
  {
    name: "Myntra CLone",
    previewShot: "./Myntra.png",
    github: "https://github.com/rakeshsunki/myntraclone.git",
    play: "https://rainbow-meerkat-a04a45.netlify.app/",
    icons: [<FaReact />, <SiRedux />, <FaBootstrap />, <FaJsSquare />],
    description:
      "Myntra clone built with React, Redux, and Bootstrap. It replicates Myntra's core features, focusing on fashion e-commerce. only frontend.",
  },
  {
    name: "Soil Classification Using SVM",
    previewShot: "./MATLAB.PNG",
    github:
      "https://drive.google.com/drive/folders/1IFsWUk-grmJtjfP997KpBP8e1sy3IH86?usp=share_link ",
    play: "#",
    icons: [<FaPython />, <TbMathMax />],
    description:
      "A project on soil classification using Support Vector Machine (SVM) implemented in Python. It classifies soil types based on various features.",
  },
];
export const MiniProjects = [
  {
    name: "Calculator",
    previewShot: "./Calculator.PNG",
    github: "https://github.com/rakeshsunki/Calculator.git",
    play: "https://inquisitive-youtiao-74271a.netlify.app/",
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaReact />],
    description:
      "A simple calculator app built with HTML, CSS, and JavaScript. It performs basic arithmetic operations.",
  },
  {
    name: "CurrencyConverter",
    previewShot: "./CurrencyConverter.PNG",
    github: "https://github.com/rakeshsunki/currencyconverter.git",
    play: "https://profound-fairy-f9da98.netlify.app/",
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    description:
      "A currency converter app that converts amounts between different currencies using real-time exchange rates.",
  },
  {
    name: "GAME Rock Paper Scissors",
    previewShot: "./RockPaperScissor.PNG",
    github: "https://github.com/rakeshsunki/rockpaperscissors.git",
    play: "https://delicate-strudel-98babd.netlify.app/",
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    description:
      "A web-based Rock Paper Scissors game built with HTML, CSS, and JavaScript. It allows users to play against the computer.",
  },
  {
    name: "Vector Using linked list",
    previewShot: "./Miniproject.PNG",
    github: "https://github.com/rakeshsunki/vector.git",
    play: "#",
    icons: [<SiCplusplus />],
    description:
      "A project demonstrating vector implementation using linked list in C++. It showcases dynamic memory allocation and pointer manipulation.",
  },
];
