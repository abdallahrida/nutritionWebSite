import React from "react";
import styles from "./underHomeComp.module.css";

interface Props {
  header: string;
  img1: string;
  img2: string;
  text: string;
  containerClassName: string;
}

const Section = ({ header, text, img1, img2, containerClassName }: Props) => {
  return (
    <div className={styles[containerClassName]}>
      <div className={styles.desText}>
        <h2>{header}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.image}>
        <img alt="img" src={img1} />
        <img alt="img" src={img2} />
      </div>
    </div>
  );
};

export { Section };
