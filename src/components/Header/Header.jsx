import React, { useState } from "react";
import styles from "./header.module.css";
import Auth from "../Authorization/Auth";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { serverUrl } from '../../serverUrl'


const Header = () => {
  const token = useSelector((state) => state.application.token);

  const id = useSelector((state) => state.application.id);

  const [modal, setModal] = useState(false);

  const handleAuth = () => {
    setModal(true);
  };

  return (
    <>
      {modal ? <Auth setModal={setModal} /> : null}
      <div className={styles.header}>
        <div className={styles.header_items}>
          <div className={styles.logo}>
            <img src={`${serverUrl}/public/logo.png`} alt="" />
          </div>
          <p>
            <Link to="/" className={styles.site_name}>
              GOGOL-MOGOL
            </Link>
          </p>
          <div>
            <input className={styles.header_input} type="text" />
            <img
              className={styles.lupa}
              src={`${serverUrl}/public/lupa.png`}
              alt=""
            />
          </div>
        </div>
        <div className={styles.review_and_btn}>
          {token && (
            <p>
              <Link to="/chat" className={styles.chat_link}>
                <img src={`${serverUrl}/public/chat.png`} alt="" />
                Чат
              </Link>
            </p>
          )}

        
          {id ? (
            <div>
              <Link to={`/personal/${id}`} className={styles.profil}>
                <FontAwesomeIcon color="black" icon={faUserSecret} />
              </Link>
            </div>
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
