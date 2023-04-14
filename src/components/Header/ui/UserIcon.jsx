import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "../header.module.css";

const UserIcon = ({ id }) => {
  return (
    <div className={styles.authDiv}>
      <Link to={`/personal/${id}`} className={styles.lkIcon}>
        <FontAwesomeIcon color='black' icon={faUserSecret} />
      </Link>
    </div>
  );
};

export default UserIcon;
