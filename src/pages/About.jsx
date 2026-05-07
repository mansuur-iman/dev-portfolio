import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>About</p>
        <h1 className={styles.title}>
          Builder, problem-solver, backend-focused.
        </h1>
        <p className={styles.lead}>
          I've always been curious about how systems work — not just what users
          see, but what happens underneath. That curiosity led me into web
          development, where I focus on building backend systems, APIs, and
          data-driven applications.
        </p>
        <p className={styles.lead}>
          I'm currently developing my skills as a backend developer, working
          with Node.js, Express, and PostgreSQL. I enjoy designing how data
          flows through an application, structuring logic, and building systems
          that are clear, reliable, and scalable.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>How I work</h2>
        <p>
          I approach problems from the backend first — understanding the data,
          the relationships, and how different parts of the system communicate
          before writing code.
        </p>
        <p>
          I break down features into smaller pieces, design the flow, and then
          implement them step by step. I focus on writing clean, structured
          logic and making sure things work as expected before adding
          complexity.
        </p>
        <p>
          I'm comfortable debugging, iterating, and improving systems over time
          as requirements evolve.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Background</h2>
        <p>
          I started learning web development with a focus on fundamentals —
          HTML, JavaScript, and how the web actually works. Over time, I moved
          into backend development, working on projects that involve
          authentication, databases, file handling, and application logic.
        </p>
        <p>Instead of jumping between tools, I've focused on understanding:</p>
        <ul className={styles.list}>
          <li>How APIs are designed</li>
          <li>How databases are structured</li>
          <li>How authentication and security work</li>
          <li>How to organize backend code for clarity and scalability</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Outside of coding</h2>
        <p>
          Outside of coding, I focus on improving my physical health, learning
          consistently, and building discipline. I'm interested in long-term
          growth — both technically and personally.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Get in touch</h2>
        <p>
          I'm currently open to backend internships and junior developer roles.
          If you're looking for someone focused on backend development, systems,
          and building real-world applications, feel free to reach out.
        </p>
        <div className={styles.contactLinks}>
          <a href="mailto:mansuriman18@gmail.com" className={styles.contactRow}>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactValue}>mansuriman18@gmail.com</span>
            <span className={styles.contactArrow}>→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mansur-iman-550588370/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactRow}
          >
            <span className={styles.contactLabel}>LinkedIn</span>
            <span className={styles.contactValue}>mansur-iman-550588370</span>
            <span className={styles.contactArrow}>→</span>
          </a>
          <a
            href="https://x.com/mansuur_iman"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactRow}
          >
            <span className={styles.contactLabel}>X / Twitter</span>
            <span className={styles.contactValue}>@mansuur_iman</span>
            <span className={styles.contactArrow}>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
