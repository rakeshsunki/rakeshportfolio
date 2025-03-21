import styles from "./SpinnerAnime.module.css";

const Spinner = () => {
  return (
    <div className={styles.Banner}>
      <div className={styles.Slider} style={{ "--quantity": 14 }}>
        {[
          "C",
          "C++",
          "JavaScript",
          "DSA",
          "html",
          "CSS3",
          "REACT",
          "REDUX",
          "TAILWINDCSS",
          "MUI",
          "PANDAS",
          "PYTHON",
          "SQL",
          "POWERBI",
        ].map((name, index) => (
          <div
            key={index}
            className={`${styles.Item} text-sm text-white justify-items-center rounded-[0.5rem]`}
            style={{ "--position": index + 1 }}
          >
            <img src={`./${name}.svg`} alt={`image ${index + 1}`} />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spinner;
