import React from "react";
import styles from "./style.module.scss";
import Tee from "/public/images/Tee.svg";
import Image from "next/image";
import ToggleDarkMode from "../toggle-button";
import { HamburgerMenu } from "../icons/Icons";

const Navbar = () => {
  const navItems = ["Portfolio", "Skills", "Contact"];
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={Tee} alt="Tee" />
      </div>
      <div className={styles.navigation}>
        <ul className={styles.nav_items}>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* <ToggleDarkMode /> */}
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
