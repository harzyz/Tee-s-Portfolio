import React from "react";
import styles from "./styles.module.scss";
import Button from "@/components/custom_button";
import Noise from "/public/images/noises.png";
import Background from "/public/images/background.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      {/* <Image className={styles.noise} src={Noise} alt="noise" /> */}
      {/* <div className={styles.bouncingBall}></div> */}
      <Image className={styles.noise} src={Noise} alt="noise" />
      <div className={styles.container}>
        <div className={styles.inner_wrapper}>
          <div data-aos="zoom-in">
            <h1>Hi, I&apos;m Lateefah</h1>
            <h1>Abdulrahman 👋</h1>
          </div>
          <div data-aos="zoom-out">
            <p className={styles.description}>
              I&apos;m a UI UX designer with a focus on creating
            </p>
            <p className={styles.description}>
              exceptional digital experiences that are fast,
            </p>
            <p className={styles.description}>
              accessible, visually appealing, and responsive.
            </p>
          </div>
          <Link data-aos="fade-up" href="#contact">
            <Button label={"Lets talk"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
