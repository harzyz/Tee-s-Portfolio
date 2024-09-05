import Header from "@/components/header";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Arrow from "/public/images/Vector.svg";
import Collab from "/public/images/collab.png";
import Rogue from "/public/images/roguedev.png";
import Baselink from "/public/images/baselink.png";
import Digi from "/public/images/digidish.png";
import Kemmiespecial from "/public/images/kemmispecial.png";
import Lenbo from "/public/images/lenbo.png";
import Image from "next/image";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      label: "Collab",
      description: "Task assignment",
      link: "",
      imgUrl: Collab,
      label1: "Rogue dev",
      description1: "Software website",
      link1: "",
      imgUrl1: Rogue,
    },
    {
      id: 2,
      label: "Digi dish",
      description: "E-menu website",
      link: "",
      imgUrl: Digi,
      label1: "Baselink",
      description1: "E-learning",
      link1: "",
      imgUrl1: Baselink,
    },
    {
      id: 3,
      label: "Kemmiespecial",
      description: "Catering service",
      link: "",
      imgUrl: Kemmiespecial,
      label1: "Lenbo",
      description1: "Loan app",
      link1: "",
      imgUrl1: Lenbo,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Header label={"Projects"} />
      {Projects.map((project) => (
        <div key={project.id} className={styles.special_magic}>
          <div className={styles.special_box}>
            <div className={styles.special_boxsub}>
              <Image src={project.imgUrl} alt={project.label} />
            </div>
            <div className={styles.detail_box}>
              <div className={styles.detail_wrap}>
                <h3>{project.label}</h3>
                <p>{project.description}</p>
              </div>
              <Link className={styles.link} href={project.link}>
                <div className={styles.view_more}>
                  View <Image src={Arrow} alt="Arrow" />
                </div>{" "}
              </Link>
            </div>
          </div>
          <div className={styles.magic_box}>
            <div className={styles.magic_boxsub}>
              <Image src={project.imgUrl1} alt={project.label1}/>
            </div>
            <div className={styles.detail_box}>
              <div className={styles.detail_wrap}>
                <h3>{project.label1}</h3>
                <p>{project.description1}</p>
              </div>
              <Link className={styles.link} href="">
                <div className={styles.view_more}>
                  View <Image src={Arrow} alt="Arrow" />
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
