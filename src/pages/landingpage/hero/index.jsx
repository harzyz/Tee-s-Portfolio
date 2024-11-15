import React from "react";
import styles from "./styles.module.scss";
import Button from "@/components/custom_button";
import Noise from "../../../../public/images/noise.png";
import Background from "../../../../public/images/background.png"
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.noise} src={Noise} alt="noise" />
      <Image className={styles.overlay} src={Background} alt="noise" />
      <div className={styles.container}>
        <div className={styles.inner_wrapper}>
          <div>
            <h1>Hi, I&apos;m Lateefah</h1>
            <h1>Abdulrahman 👋</h1>
          </div>
          <div>
            <p className={styles.description}>
              I'm a UI UX designer with a focus on creating
            </p>
            <p className={styles.description}>
              exceptional digital experiences that are fast,
            </p>
            <p className={styles.description}>
              accessible, visually appealing, and responsive.
            </p>
          </div>
          <Button label={"Lets talk"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
