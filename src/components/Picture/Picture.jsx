import React from "react";
import { serverUrl } from "../../serverUrl";
import styles from "../Picture/picture.module.css";

const Picture = () => {
  return (
    <div className={styles.picture}>
      <h1>Найдите идеальный ресторан</h1>
      <input placeholder="Введите название ресторана..." type="text" />
      <img className={styles.lupa} src={`${serverUrl}/public/lupa.png`} alt="" />
    </div>
  );
};

export default Picture;
