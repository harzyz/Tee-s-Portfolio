import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Arrow from "/public/images/arrow.svg";

const Footer = () => {
  return (
    <div id="contact" className={styles.wrapper}>
      <div className={styles.contact_group}>
        <h1 className={styles.getInTouch}>Get in touch</h1>
        <p className={styles.get_text}>
          What&apos;s next? Feel free to reach out to me if you&apos;re looking for a <br />
          UI UX Designer, have a query, or simply want to connect.
        </p>
        <Image src={Arrow} alt="Arrow" />
        <div className={styles.contact}>
          <p>+2348133368767</p>
          <a href="">LinkedIn</a>
          <p>abdulrahmanlateefah90@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
