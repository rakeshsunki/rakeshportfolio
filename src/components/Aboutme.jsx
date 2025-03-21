import styles from "./landingpage.module.css";
const AboutMe = () => {
  return (
    <>
      <div
        id="About"
        className="w-full h-[fit-content] bg-[#282c34] flex-row items-center justify-between p-10 text-white "
      >
        <div className="flex items-center">
          <span className="h-1 w-[10vw] bg-amber-100"></span>
          <span className={`${styles.About}`}>ABOUT ME</span>
          <span className="h-1 w-[20vw] md:w-[50vw] bg-amber-100"></span>
        </div>
        <div className="h-[100%] w-[100%] justify-items-center md:p-10 md:flex md:justify-between md:items-start">
          <p className="w-[100%]  md:w-[50%]">
            I am a Curios learner with a strong intrest in{" "}
            <b>Web Development, and Technology, Data Analysis</b>. I enjoy
            working on projects that involve{" "}
            <b>HTML, CSS, Java Script, React, Redux and backend development</b>.
            <br />
            Iam passionate and dedicated developer with expertise in{" "}
            <b>C, C++, Python and SQL</b>. I have a strong foundation in{" "}
            <b>Data Structures & Algorithms(DSA)</b>. My experience also
            includes working with <b>Data Analysis</b> libraries like{" "}
            <b>Pandas and Numpy</b> enabling me to handle and process large data
            sets efficiently And <b>Machine Learning</b>
          </p>
          <img src="./coding.png" className="w-[50%] md:w-[35%]" />
        </div>
      </div>
    </>
  );
};
export default AboutMe;
