import React from "react";
import styles from "./styles.module.scss";
import Header from "@/components/header";
import SkillsCard from "@/components/skills-card";

const Skills = () => {
  const Skills = [
    {
      id: 1,
      skill_label: 'Visual design',
      desc: '"Crafting Aesthetic and Functional Interfaces"',
    },
    {
      id: 2,
      skill_label: 'User research',
      desc: '"Understanding User Needs to Drive Design Decisions"',
    },
    {
      id: 3,
      skill_label: 'Problem solving',
      desc: '"Crafting Innovative Solutions for Complex Challenges"',
    },
    {
      id: 4,
      skill_label: 'Interactive design',
      desc: '"Creating Engaging Experiences Through User-Centered Design"',
    },
    {
      id: 5,
      skill_label: 'Attention to detail',
      desc: '"Meticulous Craftsmanship"',
    },
    {
      id: 6,
      skill_label: 'Front-end',
      desc: '"Understanding feasible designs"',
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
