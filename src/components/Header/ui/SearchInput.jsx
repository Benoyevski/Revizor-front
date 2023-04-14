import React from "react";
import styles from "../header.module.css";
import { serverUrl } from "../../../serverUrl";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className={styles.inputDiv}>
      <input
        onChange={onChange}
        value={value}
        className={styles.inputItem}
        type='text'
      />
      <img className={styles.lupa} src={`${serverUrl}/public/lupa.png`} alt='' />
    </div>
  );
};

export default SearchInput;
