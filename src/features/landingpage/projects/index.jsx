"use client";
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
import Chopbet from "/public/images/chopbet.png";
import Clubarant from "/public/images/clubarant.png";
import Tosin from "/public/images/Tosin.png";
import ChopLife from "/public/images/choplife.png";

const Projects = () => {
  const [hoveredId, setHoveredId] = React.useState(null);

  const Projects = [
    {
      id: 1,
      label: "Life friends",
      description: "Community",
      link: "https://www.lifefriends.co/",
      imgUrl: LifeFriends,
      videoUrl: "/videos/lifefriends.mp4",
      label1: "ChopBet",
      description1: "Gaming",
      link1: "https://dev.chopbet.ci/",
      imgUrl1: Chopbet,
      videoUrl1: "/videos/chopbet.mp4",
    },
    {
      id: 2,
      label: "Clubarant",
      description: "E-menu website",
      link: "https://www.clubarant.com/",
      imgUrl: Clubarant,
      videoUrl: "/videos/clubarant.mp4",
      label1: "Tosin Yusuf",
      description1: "Portfolio",
      link1: "https://portfolio-mu-ecru-22.vercel.app/",
      imgUrl1: Tosin,
      videoUrl1: "/videos/tosin.mp4",
    },
    {
      id: 3,
      label: "Rogue dev",
      description: "Software website",
      link: "https://www.roguedevtech.com/",
      imgUrl: Rogue,
      videoUrl: "/videos/rogue.mp4",
      label1: "Choplife Gaming",
      description1: "Gaming",
      link1: "https://www.choplifegaming.com/",
      imgUrl1: ChopLife,
      videoUrl1: "/videos/choplife.mp4",
    },
  ];
  return (
    <div id="projects" className={styles.wrapper}>
      <Header label={"Projects"} />
      {Projects.map((project) => (
        <div key={project.id} className={styles.special_magic}>
          <div data-aos="zoom-out" className={styles.special_box}>
            <div
              className={styles.special_boxsub}
              onMouseEnter={() => setHoveredId(project.label)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {hoveredId === project.label ? (
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  className={styles.video}
                />
              ) : (
                <Image src={project.imgUrl} alt={project.label} />
              )}
            </div>
          </div>
          <div data-aos="zoom-in" className={styles.magic_box}>
            <div
              className={styles.magic_boxsub}
              onMouseEnter={() => setHoveredId(project.label1)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {hoveredId === project.label1 ? (
                <video
                  src={project.videoUrl1}
                  autoPlay
                  loop
                  muted
                  className={styles.video}
                />
              ) : (
                <Image src={project.imgUrl1} alt={project.label} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
