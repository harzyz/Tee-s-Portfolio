import Header from "@/components/header";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Arrow from "/public/images/Vector.svg";
import LifeFriends from "/public/images/lifefriends.png";
import Rogue from "/public/images/roguedev.png";
import Baselink from "/public/images/baselink.png";
import Digi from "/public/images/digidish.png";
import Kemmiespecial from "/public/images/kemmispecial.png";
import Lenbo from "/public/images/lenbo.png";
import Image from "next/image";
import Chopbet from "/public/images/chopbet.png"
import Clubarant from "/public/images/clubarant.png"
import Tosin from "/public/images/Tosin.png"
import ChopLife from "/public/images/choplife.png"

const Projects = () => {
  const Projects = [
    {
      id: 1,
      label: "Life friends",
      description: "Community",
      link: "https://www.lifefriends.co/",
      imgUrl: LifeFriends,
      label1: "ChopBet",
      description1: "Gaming",
      link1: "https://dev.chopbet.ci/",
      imgUrl1: Chopbet,
    },
    {
      id: 2,
      label: "Clubarant",
      description: "E-menu website",
      link: "https://www.clubarant.com/",
      imgUrl: Clubarant,
      label1: "Tosin Yusuf",
      description1: "Portfolio",
      link1: "https://portfolio-mu-ecru-22.vercel.app/",
      imgUrl1: Tosin,
    },
    {
      id: 3,
      label: "Rogue dev",
      description: "Software website",
      link: "https://www.roguedevtech.com/",
      imgUrl: Rogue,
      label1: "Choplife Gaming",
      description1: "Gaming",
      link1: "https://www.choplifegaming.com/",
      imgUrl1: ChopLife,
    },
  ];
  return (
    <div id="projects" className={styles.wrapper}>
      <Header label={"Projects"} />
      {Projects.map((project) => (
        <div key={project.id} className={styles.special_magic}>
          <div data-aos="zoom-out" className={styles.special_box}>
            <div className={styles.special_boxsub}>
              <Image src={project.imgUrl} alt={project.label} />
            </div>
            <div className={styles.detail_box}>
              <div className={styles.detail_wrap}>
                <h3>{project.label}</h3>
                <p>{project.description}</p>
              </div>
              <Link target="_blank" className={styles.link} href={project.link}>
                <div className={styles.view_more}>
                  View <Image src={Arrow} alt="Arrow" />
                </div>{" "}
              </Link>
            </div>
          </div>
          <div data-aos="zoom-in" className={styles.magic_box}>
            <div className={styles.magic_boxsub}>
              <Image src={project.imgUrl1} alt={project.label1}/>
            </div>
            <div className={styles.detail_box}>
              <div className={styles.detail_wrap}>
                <h3>{project.label1}</h3>
                <p>{project.description1}</p>
              </div>
              <Link target="_blank" className={styles.link} href={project.link1}>
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
