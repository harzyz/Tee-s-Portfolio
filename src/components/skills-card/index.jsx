import React from "react";
import styles from "./styles.module.scss";

const SkillsCard = ({ skill, data }) => {
  const { id, skill_label, desc } = skill;
  return (
    <div data-aos={data} className={styles.wrapper}>
      <span className={styles.item_number}>{`O` + id}</span>
      <span className={styles.item_info}>
        <p className={styles.item_label}>{skill_label}</p>
        <p className={styles.item_desc}>{desc}</p>
      </span>
    </div>
  );
};

export default SkillsCard;
