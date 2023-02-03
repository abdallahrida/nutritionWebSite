import React from "react";
import styles from "./underHomeComp.module.css";

import image1 from "&assets/images/1.jpg";
import image2 from "&assets/images/2.jpg";
import image3 from "&assets/images/3.jpg";
import image4 from "&assets/images/4.jpg";
import { Section } from "./section.styled";
import { useTranslation } from "react-i18next";

const UnderHomeComp = () => {
  const { t } = useTranslation("home");

  return (
    <div className={styles.container}>
      <h1>{t("underHomeCompantTitle")}</h1>
      <p className={styles.subTitle}>{t("underHomeCompantSubtile")}</p>
      <Section
        header={t("underHomeCompantSectionOneTitle")}
        text={t("underHomeCompantSectionOneText")}
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
