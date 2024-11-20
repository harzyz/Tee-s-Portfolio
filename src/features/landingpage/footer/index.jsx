import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Arrow from "/public/images/arrow.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="contact" className={styles.wrapper}>
      <div data-aos='zoom-in' className={styles.contact_group}>
        <h1 className={styles.getInTouch}>Get in touch</h1>
        <p className={styles.get_text}>
          What&apos;s next? Feel free to reach out to me if you&apos;re looking for a <br />
          UI UX Designer, have a query, or simply want to connect.
        </p>
        <Image src={Arrow} alt="Arrow" />
        <div className={styles.contact}>
          <p>+2348133368767</p>
          {/* <Link href="">LinkedIn</Link> */}
          <Link href="mailto:abdulrahmanlateefah90@gmail.com">abdulrahmanlateefah90@gmail.com</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
