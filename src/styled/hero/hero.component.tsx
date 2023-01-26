import React from "react";
import styles from "./hero.module.css";

interface Props {
  cName: string;
  heroImg: string;
  title: string;
  text: string;
  url: string;
  btnClass: string;
  btnText: string;
}

const Hero = (props: Props) => {
  const { cName, heroImg, title, text, url, btnClass, btnText } = props;

  return (
    <div className={styles[cName]}>
      <img alt="HeroImg" src={heroImg} />
      <div className={styles.heroText}>
        <h1>{title}</h1>
        <p>{text} </p>
        <a href={url} className={styles[btnClass]}>
          {btnText}
        </a>
      </div>
    </div>
  );
};

export { Hero };
