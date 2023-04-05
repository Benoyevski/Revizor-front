import React from "react";
import styles from "./footer.module.css";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.icons}>
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faInstagram} />
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faFacebook} />
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faTelegram} />
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faYoutube} />
          <FontAwesomeIcon fontSize="50px" className={styles.icon} icon={faWhatsapp} />
        </div>
        <p className={styles.contact}>8(800)-555-35-35</p>

        <div className={styles.dno}>
        © Gogol-Mogol, 2022 г. Все права защищены.
        </div>
    </footer>
  );
};

export default Footer;