import system from "../assets/system.png";
import membersOnly from "../assets/membersOnly.png";
import fileCloud from "../assets/filecloud.png";
import waldo from "../assets/waldo.png";
import blogImage from "../assets/blog.png";
import styles from "./Home.module.css";

export default function Home() {
  const steps = [
    {
      title: "Understand the problem",
      description: "Clarify requirements and define system goals.",
    },
    {
      title: "Define data flow",
      description: "Map how data moves between components.",
    },
    {
      title: "Design API structure",
      description: "Create clean, consistent, and RESTful endpoints.",
    },
    {
      title: "Model the database",
      description: "Design tables, relationships, and constraints.",
    },
    {
      title: "Plan for reliability",
      description:
        "Add validation, error handling, authentication, and security.",
    },
    {
      title: "Iterate & improve",
      description: "Refine as the system grows and requirements evolve.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "membersOnly",
      description:
        "A secure, server-rendered full-stack messaging application built with Node.js, Express, and EJS. It features user authentication, session management, and role-based access control, allowing different experiences for guests, members, and admins. Users can create accounts, log in securely, post messages, and view content based on their access level — demonstrating practical implementation of backend security, protected routes, and dynamic server-side rendering.",
      image: membersOnly,
    },
    {
      id: 2,
      title: "FileCloud",
      description:
        "A full-stack file and folder management system inspired by cloud storage platforms. Users can create folders, upload files, organize content, and generate shareable links with expiration support. Built with Node.js, Express, Prisma, and PostgreSQL, it focuses on handling file uploads, relational data modeling, and managing user-specific content — demonstrating real-world backend patterns like resource ownership, secure file access, and structured data relationships.",
      image: fileCloud,
    },
    {
      id: 3,
      title: "Blog",
      description:
        "A full-stack blogging platform with complete CRUD functionality and user authentication. Users can create, edit, and delete posts, while authentication ensures only authorized actions are allowed. The project emphasizes backend architecture, database relationships, and clean API design — showcasing how content-driven applications are structured, secured, and managed end to end.",
      image: blogImage,
    },
    {
      id: 4,
      title: "Where's Waldo",
      description:
        "An interactive browser-based game where users search for hidden characters in large images under time pressure. Includes click-based coordinate detection, validation logic, and a leaderboard system to track performance. Built with a full-stack approach, it demonstrates handling real-time user interactions, game logic, and syncing frontend actions with backend validation.",
      image: waldo,
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>Backend Developer</p>
        <h1 className={styles.hero}>Building scalable web applications.</h1>
        <p className={styles.lead}>
          I'm a backend-focused developer with fullstack experience — building
          APIs, handling data, and designing reliable application logic.
        </p>
        <p className={styles.lead}>
          I enjoy working on the systems behind products: authentication,
          databases, business logic, and how different parts of an application
          communicate. I'm currently growing toward scalable systems, AI, and
          machine learning.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>What I help teams do</h2>
        <ul className={styles.list}>
          <li>Turn ideas into functional backend systems</li>
          <li>Design and build REST APIs</li>
          <li>Manage databases and data relationships</li>
          <li>Implement authentication and secure user systems</li>
          <li>Structure backend logic for scalability and clarity</li>
          <li>Collaborate with frontend and product teams to ship features</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>How I design systems</h2>
        <p className={styles.body}>
          When building backend systems, I focus on clarity, scalability, and
          reliability. I break problems down into smaller parts and design how
          data flows through the system before writing code.
        </p>

        <div className={styles.systemImage}>
          <img src={system} alt="System design flow diagram" />
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.stepNumber}>0{index + 1}</span>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Selected work</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              {project.image && (
                <div className={styles.projectImageWrap}>
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Let's connect</h2>
        <p className={styles.body}>
          I'm currently open to backend internships and junior developer roles.
          If you're looking for someone who enjoys building backend systems,
          APIs, and data-driven applications, feel free to reach out.
        </p>
        <a href="mailto:mansuriman18@gmail.com" className={styles.ctaLink}>
          mansuriman18@gmail.com →
        </a>
      </section>
    </div>
  );
}
