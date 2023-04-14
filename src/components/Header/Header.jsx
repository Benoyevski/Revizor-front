import React, { useState } from "react";
import styles from "./header.module.css";
import Auth from "../Authorization/Auth";
import { useSelector } from "react-redux";
import Logo from "./ui/Logo";
import ChatLink from "./ui/ChatLink";
import UserIcon from "./ui/UserIcon";
import SearchInput from "./ui/SearchInput";

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
                <Logo />
                <SearchInput value={searchValue} onChange={handleSearch} />
                <div className={styles.authDiv}>
                    {token && <ChatLink />}
                    {id ? (<UserIcon />) : (
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
