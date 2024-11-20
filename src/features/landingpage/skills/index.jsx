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
      data: 'fade-down',
    },
    {
      id: 2,
      skill_label: 'User research',
      desc: '"Understanding User Needs to Drive Design Decisions"',
      data: 'fade-down',
    },
    {
      id: 3,
      skill_label: 'Problem solving',
      desc: '"Crafting Innovative Solutions for Complex Challenges"',
      data: 'fade-down',
    },
    {
      id: 4,
      skill_label: 'Interactive design',
      desc: '"Creating Engaging Experiences Through User-Centered Design"',
      data: 'fade-up',
    },
    {
      id: 5,
      skill_label: 'Attention to detail',
      desc: '"Meticulous Craftsmanship"',
      data: 'fade-up',
    },
    {
      id: 6,
      skill_label: 'Front-end',
      desc: '"Understanding feasible designs"',
      data: 'fade-up',
    },
  ];
  return (
    <div id="skills" className={styles.wrapper}>
      <Header label={"Skills"} />
      <div className={styles.inner_wrapper}>
        {Skills.map((skill) => (
          <SkillsCard data={skill.data} skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
