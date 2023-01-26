import React from "react";
import styles from "./underHomeComp.module.css";

import Montain1 from "&assets/images/1.jpg";
import Montain2 from "&assets/images/2.jpg";
import Montain3 from "&assets/images/3.jpg";
import Montain4 from "&assets/images/4.jpg";
import { Section } from "./section.styled";

const UnderHomeComp = () => {
  return (
    <div className={styles.container}>
      <h1>Popular Destinations</h1>
      <p className={styles.subTitle}>
        Tours gives you the opportunity to see a lot within a time frame
      </p>
      <Section
        header="Taal volcano,Batan gas "
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          dolores quam, commodi eaque voluptatibus corrupti omnis eos sint earum
          deleniti facere sapiente blanditiis quidem assumenda, ad nulla
          molestiae eveniet aspernatur?"
        img1={Montain1}
        img2={Montain2}
        containerClassName="first-des"
      />

      <Section
        header="Taal volcano,Batan gas "
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          dolores quam, commodi eaque voluptatibus corrupti omnis eos sint earum
          deleniti facere sapiente blanditiis quidem assumenda, ad nulla
          molestiae eveniet aspernatur?"
        img1={Montain3}
        img2={Montain4}
        containerClassName="first-des-reverse"
      />
    </div>
  );
};

export { UnderHomeComp };
