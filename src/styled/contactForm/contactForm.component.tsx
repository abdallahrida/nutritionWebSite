import React from "react";
import styles from "./contactForm.module.css";

interface Props {}

const ContactForm = (props: Props) => {
  return (
    <div className={styles.formContainer}>
      <h1>Let's get in contact!!</h1>
      <form className={styles.formStyle}>
        <div className={styles.inputContainer}>
          <input className={styles.inputStyle} type="text" placeholder="Name" />
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputStyle}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputStyle}
            type="text"
            placeholder="Subject"
          />
        </div>
        <div className={styles.messageContainer}>
          <textarea
            className={styles.inputStyle}
            placeholder="message"
            rows={4}
          />
        </div>
        <div className={styles.buttonStyle}>
          <p>Send Message</p>
        </div>
      </form>
    </div>
  );
};

export { ContactForm };
