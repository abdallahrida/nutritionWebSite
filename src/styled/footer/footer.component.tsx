import React from "react";
import styles from "./footer.module.css";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div>
          <h1>Hannan</h1>
          <p>i am hannan hijazi</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square" />
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <h4>Project</h4>
          <a href="/">data</a>
          <a href="/">data</a>
          <a href="/">data</a>
          <a href="/">data</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">data</a>
          <a href="/">data</a>
          <a href="/">data</a>
          <a href="/">data</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">data</a>
          <a href="/">data</a>
          <a href="/">data</a>
          <a href="/">data</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">data</a>
          <a href="/">data</a>
          <a href="/">data</a>
          <a href="/">data</a>
        </div>
      </div>
    </div>
  );
};

export { Footer };
