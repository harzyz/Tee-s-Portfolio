import React from "react";
import styles from "./styles.module.scss";
import { ArrowLeft } from "@/components/icons/Icons";
import Link from "next/link";

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
      process:
        "Alison the Project Manager: Needs efficient project and team management tools.",
    },
    {
      id: 2,
      process:
        "Bob the Freelance Designer: Requires organization and collaboration features for client projects.",
    },
    {
      id: 3,
      process:
        "Carol the Small Business Owner: Needs simple task and employee management tools.",
    },
    {
      id: 4,
      process:
        "David the Student: Seeks to balance multiple responsibilities with collaborative tools.",
    },
    {
      id: 5,
      process:
        "Eva the Remote Worker: Requires real-time collaboration and task management across different time zones.",
    },
  ];

  const ApproachOne = [
    {
      id: 1,
      process:
        "Mapping User Journeys: Mapped out the user journeys for each persona, focusing on their primary tasks and interactions within the app.",
    },
    {
      id: 2,
      process:
        "Task Analysis: Identified the key tasks users would need to perform, such as creating tasks, assigning them to team members, collaborating on tasks, and sharing them with others.",
    },
    {
      id: 3,
      process:
        "Flowchart Creation: Developed a flowchart to visualize the steps users would take to accomplish their goals.",
    },
  ];
  const ApproachTwo = [
    {
      id: 1,
      process:
        "Low-Fidelity Wireframes: Started with low-fidelity wireframes to quickly iterate on different layouts and interactions. These wireframes focused on the structure and placement of elements rather than detailed design.",
    },
    {
      id: 2,
      process:
        "Feedback and Iteration: Shared the wireframes with stakeholders and potential users to gather feedback. Iterated on the designs based on their input.",
    },
    {
      id: 3,
      process:
        "High-Fidelity Wireframes: Once the structure was finalized, moved on to high-fidelity wireframes that included more detailed design elements, such as typography, color schemes, and iconography.",
    },
  ];
  const ApproachThree = [
    {
      id: 1,
      process:
        "Prototype Creation: Developed an interactive prototype using the high-fidelity wireframes.",
    },
    {
      id: 2,
      process:
        "Usability Testing: Conducted usability testing with a group of users representing the personas. Observed how they interacted with the prototype and noted any difficulties or areas of confusion.",
    },
    {
      id: 3,
      process:
        "Feedback Collection: Gathered qualitative feedback from users about their experience, focusing on ease of use, clarity, and satisfaction.",
    },
    {
      id: 4,
      process:
        "Iteration: Made necessary adjustments to the design based on the testing results. This included simplifying certain interactions, improving the visibility of key features, and refining the overall user flow.",
    },
  ];
  const KeyConsiderations = [
    {
      id: 1,
      process:
        "Simplicity: Ensure the flow was simple and intuitive, minimizing the number of steps required to complete a task.",
    },
    {
      id: 2,
      process:
        "Consistency: Maintain a consistent experience across different screens and interactions.",
    },
    {
      id: 3,
      process:
        "Accessibility: Consider accessibility in design to cater to users with different needs.",
    },
  ];

  const OutcomeTwo = [
    {
      id: 1,
      process:
        "Dashboard Overview: The user views an overview of tasks and projects. They can see a graphical representation of the tasks and also their overall progress ",
    },
    {
      id: 2,
      process:
        "Task Overview: The user sees all tasks related to a project. They can click on a task to view more details and also click on add task to create a new task",
    },
    {
      id: 3,
      process:
        "Task Details: The user views the task description, who assigned it, view team members and also shared files, User is also able to add more to-do task and more team member. They can also attach files or comments.",
    },
    {
      id: 4,
      process:
        "Collaborate on Task: The user accesses the Collaboration Screen to discuss the task with team members, share files, and view updates in real-time.",
    },
    {
      id: 5,
      process:
        "Share Task: The user shares the task with external collaborators by clicking the option icon and selecting share task which will automatically copy the task link.",
    },
    {
      id: 6,
      process:
        "Receive Notifications: The user is notified of any updates, comments, or deadlines related to the task.",
    },
    {
      id: 7,
      process:
        "Complete Task: Once the task is completed, the user marks it as done, and the project progress is updated.",
    },
  ];
  const KeyScreens = [
    {
      id: 1,
      process:
        "Dashboard Screen: Displays an overview of ongoing tasks, deadlines, and notifications. The navigation menu allows users to access different projects, tasks, and settings.",
    },
    {
      id: 2,
      process:
        "Task Overview Screen: Provides a detailed view of a selected project, showing all associated tasks, their statuses, assigned team members, and deadlines. Users can add new tasks or edit existing ones.",
    },
    {
      id: 3,
      process:
        "Task Details Screen: Allows users to view and edit task details, including the task description, attachments, and comments. Users can add to team members and set deadlines.",
    },
    {
      id: 4,
      process:
        "Collaboration Screen: A real-time chat interface where team members can discuss the task, share files, and view updates. This screen also integrates with video conferencing tools for meetings.",
    },
    {
      id: 5,
      process:
        "Task Sharing Screen: Enables users to share tasks with external collaborators by clicking the option icon and selecting share task which will automatically copy the task link.",
    },
    {
      id: 6,
      process:
        "Notifications Screen: Shows all notifications related to task updates, comments, file uploads, and deadlines. Users can click on a notification to navigate to the relevant task or project.",
    },
    {
      id: 7,
      process:
        "Settings Screen: Allows users to customize their profile, notification preferences.",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Link href='/' className={styles.arrow_icon}>
        <ArrowLeft />
      </Link>
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
        <h3>1. User Research and Persona Development</h3>
        <h4>
          Objective: Understand the target audience, their pain points, and
          needs to inform the design decisions.
        </h4>
        <h4>Approach:</h4>
        <ul className={styles.short_list}>
          <li>
            Interviews: Conducted interviews with potential users from various
            backgrounds, including project managers, freelancers, small business
            owners, students, and remote workers.
          </li>
          <li>
            Surveys: Distributed surveys to gather quantitative data on user
            preferences and challenges related to task management and
            collaboration.
          </li>
        </ul>
        <h4>
          Outcome: From the research, five key user personas were developed:
        </h4>
        <ol className={styles.short_list}>
          {OutcomeOne.map((item) => (
            <li>{item.process}</li>
          ))}
        </ol>
        <h4>
          These personas provided a clear understanding of the users’ needs,
          which guided the design of the task collaboration and sharing feature.
        </h4>
        <h3>2. Defining the User Flow</h3>
        <h4>
          Objective: Create a logical and intuitive sequence of actions for
          users to collaborate on and share tasks.
        </h4>
        <h4>Approach:</h4>
        <ul className={styles.short_list}>
          {ApproachOne.map((item) => (
            <li>{item.process}</li>
          ))}
        </ul>
        <h4>Key Considerations:</h4>
        <ul className={styles.short_list}>
          {KeyConsiderations.map((item) => (
            <li>{item.process}</li>
          ))}
        </ul>
        <h4>Outcome: The user flow was defined as follows:</h4>
        <ol className={styles.short_list}>
          {OutcomeTwo.map((item) => (
            <li>{item.process}</li>
          ))}
        </ol>
        <h3>3. Wireframing</h3>
        <h4>
          Objective: Create visual representations of the key screens and
          interactions based on the defined user flow.
        </h4>
        <h4>Approach:</h4>
        <ul className={styles.short_list}>
          {ApproachTwo.map((item) => (
            <li>{item.process}</li>
          ))}
        </ul>
        <h4>Key Screens:</h4>
        <ol className={styles.short_list}>
          {KeyScreens.map((item) => (
            <li>{item.process}</li>
          ))}
        </ol>
        <h3>4. Usability Testing and Iteration</h3>
        <h4>
          Objective: Ensure that the design is user-friendly and meets the needs
          of the target audience.
        </h4>
        <h4>Approach:</h4>
        <ul className={styles.short_list}>
          {ApproachThree.map((item) => (
            <li>{item.process}</li>
          ))}
        </ul>
        <h4>
          Outcome: The usability testing confirmed that the design was intuitive
          and met the needs of the target audience. Users appreciated the
          simplicity of the task collaboration and sharing features and found
          the real-time collaboration tools particularly useful.{" "}
        </h4>
      </div>
    </div>
  );
};

export default CaseStudy;
