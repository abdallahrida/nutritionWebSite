import React, { useEffect, useState } from "react";
import styles from "./navBar.module.css";

import { ReactComponent as AppLogo } from "&assets/images/appLogo.svg";
import { links } from "./navBarLinks";
import { Link } from "react-router-dom";

interface Props {}

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }

        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={show ? styles.navBarItems : styles.navBarItemsHide}>
      <div className={styles.logoContainer}>
        <AppLogo className={styles.logo} />
      </div>

      <div className={styles.menuIcons}>
        <i
          onClick={() => setClicked((prev) => !prev)}
          className={clicked ? "fas fa-times" : "fas fa-bars"}
        />
      </div>

      <ul
        className={
          clicked ? `${styles.navMenu} ${styles.navMenuActive}` : styles.navMenu
        }
      >
        {links.map((item, index) => {
          return (
            <li key={index} onClick={() => setClicked((prev) => !prev)}>
              <Link to={item.url} className={styles[item.cName]}>
                <i className={item.icon} />
                {item.title}
              </Link>
            </li>
          );
        })}
        {/* <button className={styles.buttonStyle}>Get the app</button> */}
      </ul>
    </nav>
  );
};

export { NavBar };
