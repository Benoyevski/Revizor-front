import React, { useState } from "react";
import styles from "./header2.module.css";
import Auth from "../Authorization/Auth";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchValue, setsearchValue] = useState("");
  const token = useSelector((state) => state.application.token);

  const id = useSelector((state) => state.application.id);

  const [modal, setModal] = useState(false);

  const handleAuth = () => {
    setModal(true);
  };

  const handleSearch = (e) => {
    setsearchValue(e.target.value);
  };

  return (
    <>
      {modal ? <Auth setModal={setModal} /> : null}
        <div className={styles.header}>
          <div className={styles.logoDiv}>
            <img src={`imgs/logo.png`} alt="" />
            <Link to="/" className={styles.title}>
              GOGOL-MOGOL
            </Link>
          </div>
          <div className={styles.inputDiv}>
            <input
              onChange={handleSearch}
              value={searchValue}
              className={styles.inputItem}
              type="text"
            />
            <img
              className={styles.lupa}
              src={`imgs/lupa.png`}
              alt=""
            />
          </div>
          <div className={styles.authDiv}>
            {token && (
              <Link to="/chat" className={styles.chat}>
                <img src={`imgs/chat.png`} alt="" />
                Чат
              </Link>
            )}
              
            {id ? (
              <Link to={`/personal/${id}`} className={styles.lkIcon}>
                <FontAwesomeIcon color="black" icon={faUserSecret} />
              </Link>
            ) : (
            <button onClick={handleAuth} className={styles.auth_btn}>
              Войти
            </button>
            )}
          </div>  
        </div>
    </>
  );
};

export default Header;
