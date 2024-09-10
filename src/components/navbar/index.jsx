import React from "react";
import styles from "./style.module.scss";
import Tee from "/public/images/Tee.svg";
import Image from "next/image";

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
        <input type="radio" />
      </div>
    </nav>
  );
};

export default Navbar;
