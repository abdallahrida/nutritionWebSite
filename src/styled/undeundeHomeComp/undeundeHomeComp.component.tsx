import React from "react";
import styles from "./undeundeHomeComp.module.css";
import { UnderunderHomeitem } from "./underunderHomeitem";

import img1 from "&assets/images/5.jpg";
import img2 from "&assets/images/8.jpg";

const UndeundeHomeComp = () => {
  return (
    <div className={styles.underUnderHomecontainer}>
      <h1>Recent Trips</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        eveniet sit in autem rem cupiditate blanditiis ea assumenda sint
        asperiores sunt fugit quae repellat iste, ipsam tempora libero dicta
        nesciunt.
      </p>
      <div className={styles.cardContainer}>
        <UnderunderHomeitem
          heading="heading1"
          imgUrl={img1}
          paragraph="parag1"
        />
        <UnderunderHomeitem
          heading="heading2"
          imgUrl={img2}
          paragraph="parag2"
        />
        <UnderunderHomeitem
          heading="heading3"
          imgUrl={img2}
          paragraph="parag3"
        />
      </div>
    </div>
  );
};

export { UndeundeHomeComp };
