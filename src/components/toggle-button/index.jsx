"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MoonIcon, SunIcon } from "../icons/Icons";

const ToggleDarkMode = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.wrapper}>
      <div className={toggle === false ? styles.container : styles.container3}>
        <div onClick={handleToggle} className={styles.toggler}></div>
        {!toggle && (
          <span className={styles.moon_icon}>
            <MoonIcon />
          </span>
        )}
        {toggle && (
          <span className={styles.sun_icon}>
            <SunIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default ToggleDarkMode;
