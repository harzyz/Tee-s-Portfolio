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
      link: "https://www.figma.com/design/cLwQw8XP6iidEmeIE8Xnp3/task-management-and-collab?node-id=15-2746&node-type=frame&t=pV8ZEgMnPh4I6RaN-0",
      imgUrl: Collab,
      label1: "Rogue dev",
      description1: "Software website",
      link1: "https://www.roguedevtech.com/",
      imgUrl1: Rogue,
    },
    {
      id: 2,
      label: "Digi dish",
      description: "E-menu website",
      link: "https://www.figma.com/design/sbM6VgAgqxTkr1NHXceqzM/Digi-dish?t=jf9fBBHKUqqGqI7o-0",
      imgUrl: Digi,
      label1: "Baselink",
      description1: "E-learning",
      link1: "https://www.figma.com/design/TpYTIZKe0TvRGRdW6aDWZz/baselinks-academy?t=hp48Q0bzL4tq0BRh-0",
      imgUrl1: Baselink,
    },
    {
      id: 3,
      label: "Kemmiespecial",
      description: "Catering service",
      link: "https://www.figma.com/design/7iBMD7KISyE6S6y7WrTS8P/Kemmie-special?t=ASWUPqyyDjEkzOFI-0",
      imgUrl: Kemmiespecial,
      label1: "Lenbo",
      description1: "Loan app",
      link1: "https://www.figma.com/design/P15eWv6kRHe3qYBB3hjNbj/Landing-page-design-wireframe?node-id=0-1&node-type=canvas&t=nD5JY59SIJWFjicW-0",
      imgUrl1: Lenbo,
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
              <Link className={styles.link} href={project.link}>
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
              <Link className={styles.link} href={project.link1}>
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
