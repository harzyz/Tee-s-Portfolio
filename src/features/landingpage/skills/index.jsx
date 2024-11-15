import React from "react";
import styles from "./styles.module.scss";
import Header from "@/components/header";
import SkillsCard from "@/components/skills-card";

const Skills = () => {
  const Skills = [
    {
      id: 1,
      skill_label: 'Problem solving',
      desc: '"Crafting Innovative Solutions for Complex Challenges"',
    },
    {
      id: 2,
      skill_label: 'Problem solving',
      desc: '"Crafting Innovative Solutions for Complex Challenges"',
    },
    {
      id: 3,
      skill_label: 'Problem solving',
      desc: '"Crafting Innovative Solutions for Complex Challenges"',
    },
    {
      id: 4,
      skill_label: 'Problem solving',
      desc: '"Crafting Innovative Solutions for Complex Challenges"',
    },
    {
      id: 5,
      skill_label: 'Problem solving',
      desc: '"Crafting Innovative Solutions for Complex Challenges"',
    },
    {
      id: 6,
      skill_label: 'Problem solving',
      desc: '"Crafting Innovative Solutions for Complex Challenges"',
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Header label={"Skills"} />
      <div className={styles.inner_wrapper}>
        {Skills.map((skill) => (
          <SkillsCard skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
