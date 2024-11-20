"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Tee from "/public/images/Tee.svg";
import Image from "next/image";
import ToggleDarkMode from "../toggle-button";
import { HamburgerMenu } from "../icons/Icons";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      label: "Projects",
      tag: "#projects",
    },
    {
      id: 2,
      label: "Skills",
      tag: "#skills",
    },
    {
      id: 3,
      label: "Contact",
      tag: "#contact",
    },
  ];
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={Tee} alt="Tee" />
      </div>
      <div className={styles.navigation}>
        <ul className={styles.nav_items}>
          {navItems.map((item, index) => (
            <Link key={index} href={item.tag}>
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>
        {/* <ToggleDarkMode /> */}
      </div>
      <span onClick={() => setMenu(!menu)} className={styles.hamburger}>
        <HamburgerMenu />
      </span>

      {/* {menu && ( */}
      <ul
        className={menu ? styles.hamburgerMobile : styles.hamburgerMobileclose}
      >
        {navItems.map((item, index) => (
          <Link key={index} href={item.tag}>
            <li>{menu && item.label}</li>
          </Link>
        ))}
      </ul>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
