import React from "react";
import styles from "./aboutUs.module.css";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <div className={styles.aboutContainer}>
      <h1>Our History</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id minima,
        illum unde labore qui, neque excepturi, a repudiandae impedit architecto
        quam quae laboriosam amet. Aspernatur repudiandae quas nesciunt
        blanditiis voluptates.
      </p>
      <h1>Our Mission</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id minima,
        illum unde labore qui, neque excepturi, a repudiandae impedit architecto
        quam quae laboriosam amet. Aspernatur repudiandae quas nesciunt
        blanditiis voluptates.
      </p>
      <h1>Our Vision</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id minima,
        illum unde labore qui, neque excepturi, a repudiandae impedit architecto
        quam quae laboriosam amet. Aspernatur repudiandae quas nesciunt
        blanditiis voluptates.
      </p>
    </div>
  );
};

export { AboutUs };
