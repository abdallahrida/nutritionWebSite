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
      <h1>Packages</h1>
      <p className={styles.subTitle}>
        We gives you the opportunity to see a lot within a time frame
      </p>
      <Section
        header="Consultation package"
        text="This service helps you to modify your behaviors and eating habits. Through weekly consultations, we will work together to wean you off emotional eating and build peace with food. Package consist of: 4 weekly consultations 60-minute initial consultation 3 consultations followed by a duration of 20 minutes per consultation Follow up twice a week The package price is $50"
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
