import React from "react";
import styles from "./styles.module.scss";

const CaseStudy = () => {
  const DesignProcess = [
    {
      id: 1,
      process: "User Research and Persona Development",
    },
    {
      id: 2,
      process: "Defining the User Flow",
    },
    {
      id: 3,
      process: "Wireframing",
    },
    {
      id: 4,
      process: "Usability Testing and Iteration",
    },
  ];
  const OutcomeOne = [
    {
      id: 1,
      process: "Alison the Project Manager: Needs efficient project and team management tools.",
    },
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <h3>Design Process</h3>
        <h4>
          Design Process The design process for this project followed a
          structured approach, starting from understanding the user needs,
          moving on to defining the user flow, and finally creating the
          wireframes. The steps involved were:
        </h4>
        <ol className={styles.short_list}>
          {DesignProcess.map((item) => (
            <li key={item.id}>{item.process}</li>
          ))}
        </ol>
        <ol className={styles.research_list}>
          <li>User Research and Persona Development</li>
        </ol>
        <h4>Objective: Understand the target audience, their pain points, and needs to inform the design decisions.</h4>
        <h4>Approach:</h4>
        <ul className={styles.short_list}>
          <li>Interviews: Conducted interviews with potential users from various backgrounds, including project managers, freelancers, small business owners, students, and remote workers.</li>
          <li>Surveys: Distributed surveys to gather quantitative data on user preferences and challenges related to task management and collaboration.</li>
        </ul>
        <h4>Outcome: From the research, five key user personas were developed:</h4>
        <ol>

        </ol>
      </div>
    </div>
  );
};

export default CaseStudy;
