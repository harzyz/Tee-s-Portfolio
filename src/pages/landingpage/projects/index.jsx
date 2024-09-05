import Header from "@/components/header";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Arrow from "/public/images/Vector.svg";
import Collab from "/public/images/collab.png";
import Rogue from "/public/images/roguedev.png";
import Image from "next/image";

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <Header label={"Projects"} />
      <div className={styles.special_magic}>
        <div className={styles.special_box}>
          <div className={styles.special_boxsub}>
            <Image src={Collab} alt="Collab" />
          </div>
          <div className={styles.detail_box}>
            <div className={styles.detail_wrap}>
              <h3>Collab</h3>
              <p>Task assignment</p>
            </div>
            <Link className={styles.link} href="">
              <div className={styles.view_more}>
                View <Image src={Arrow} alt="Arrow" />
              </div>{" "}
            </Link>
          </div>
        </div>
        <div className={styles.magic_box}>
          <div className={styles.magic_boxsub}>
            <Image src={Rogue} alt="Collab" />
          </div>
          <div className={styles.detail_box}>
            <div className={styles.detail_wrap}>
              <h3>Rogue dev</h3>
              <p>Software website</p>
            </div>
            <Link className={styles.link} href="">
              <div className={styles.view_more}>
                View <Image src={Arrow} alt="Arrow" />
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
