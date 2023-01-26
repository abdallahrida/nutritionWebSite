import React from "react";
import styles from "./undeundeHomeComp.module.css";

interface IProps {
  imgUrl: string;
  heading: string;
  paragraph: string;
}

const UnderunderHomeitem = ({ imgUrl, heading, paragraph }: IProps) => {
  return (
    <div className={styles.cContainer}>
      <div className={styles.cImage}>
        <img src={imgUrl} alt="" />
      </div>
      <h4>{heading}</h4>
      <p>{paragraph}</p>
    </div>
  );
};

export { UnderunderHomeitem };
