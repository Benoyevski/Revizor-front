import React from "react";
import { Link } from "react-router-dom";
import { serverUrl } from "../../../serverUrl";
import styles from "../header.module.css";

const ChatLink = () => {
    return (
        <Link to='/chat' className={styles.chat}>
            <img src={`${serverUrl}/public/chat.png`} alt='' />
            Чат
        </Link>
    );
};

export default ChatLink;
