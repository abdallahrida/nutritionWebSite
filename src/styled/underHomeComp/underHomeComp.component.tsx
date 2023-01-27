import React from "react";
import styles from "./underHomeComp.module.css";

import image1 from "&assets/images/1.jpg";
import image2 from "&assets/images/2.jpg";
import image3 from "&assets/images/3.jpg";
import image4 from "&assets/images/4.jpg";
import { Section } from "./section.styled";

const UnderHomeComp = () => {
  return (
    <div className={styles.container}>
      <h1>Learn how to eat healthy</h1>
      <p className={styles.subTitle}>
        We gives you the opportunity to see a lot within a time frame
      </p>
      <Section
        header="Set personal goals for healthy eating"
        text="Build healthy eating habits one goal at a time! Use the Start Simple with My app to pick simple daily food goals, see real-time progress, and earn badges along the way."
        img1={image1}
        img2={image2}
        containerClassName="first-des"
      />

      <Section
        header="Find easy, low-cost recipes"
        text="View delicious recipes in our very own MyPlate Kitchen! Search by ingredient to use what you already have or browse by category to find something new. Save your favorites, make personalized cookbooks, and more!"
        img1={image3}
        img2={image4}
        containerClassName="first-des-reverse"
      />
    </div>
  );
};

export { UnderHomeComp };
