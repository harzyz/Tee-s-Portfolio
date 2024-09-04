import React from "react";
import styles from "./style.module.scss";
import Tee from "/public/images/Tee.png"
import Image from "next/image";

const Navbar = () => {
  const navItems = ["Portfolio", "Skills", "Contact"];
  return (
    <nav className={styles.wrapper}>
      <div className={styles.navigation}>
        <h1 className={styles.logo}><Image src={Tee} alt="Tee" /></h1>

        <ul className={styles.nav_items}>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <input type="radio" />
    </nav>
  );
};

export default Navbar;
