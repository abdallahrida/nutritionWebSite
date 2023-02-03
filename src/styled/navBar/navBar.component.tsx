import React, { useEffect, useState } from "react";
import styles from "./navBar.module.css";

import { ReactComponent as AppLogo } from "&assets/images/appLogo.svg";
import { links } from "./navBarLinks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { i18n } = useTranslation();
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const switchLanguage = () => {
    const lang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(lang);
    window.location.reload();
  };

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
            <li
              key={index}
              onClick={() => {
                !item.url && switchLanguage();
                setClicked((prev) => !prev);
              }}
            >
              {item.url ? (
                <Link to={item.url} className={styles[item.cName]}>
                  <i className={item.icon} />
                  {item.title}
                </Link>
              ) : (
                <span className={styles[item.cName]}>
                  <i className={item.icon} />
                  {item.title}
                </span>
              )}
            </li>
          );
        })}
        {/* <button className={styles.buttonStyle}>Get the app</button> */}
      </ul>
    </nav>
  );
};

export { NavBar };
