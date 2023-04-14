import React from "react";
import { Link } from "react-router-dom";
import { serverUrl } from "../../../serverUrl";
import styles from "../header.module.css";

const Logo = () => {
    return (
        <div className={styles.logoDiv}>
            <img src={`${serverUrl}/public/logo.png`} alt='' />
            <Link to='/' className={styles.title}>
                GOGOL-MOGOL
            </Link>
        </div>
    );
};

export default Logo;
