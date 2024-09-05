import React from "react";
import styles from "./styles.module.scss"

const Header = ({ label }) => {
  return <h1 className={styles.wrapper}>{label}</h1>;
};

export default Header;
