import React, { useState } from "react";
import styles from "../Authorization/auth.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = ({ setModal }) => {
  const [toReg, setToReg] = useState(false);

  return (
    <div className={styles.auth_wrapper}>
      

      {toReg ? (
        <SignUp setModal={setModal} setToReg={setToReg} />
      ) : (
        <SignIn setModal={setModal} setToReg={setToReg} />
      )}
    </div>
  );
};

export default Auth;
