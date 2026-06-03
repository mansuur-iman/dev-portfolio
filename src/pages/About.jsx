import styles from "./About.module.css";

export default function About() {
  const skills = [
    {
      icon: "ti-server",
      title: "Backend",
      desc: "Node.js, Express, REST API design, auth, middleware",
    },
    {
      icon: "ti-database",
      title: "Data layer",
      desc: "PostgreSQL, Prisma ORM, relational modeling, migrations",
    },
    {
      icon: "ti-layout-2",
      title: "Frontend",
      desc: "React, JavaScript, HTML/CSS, clean UI patterns",
    },
    {
      icon: "ti-shield-lock",
      title: "Auth & security",
      desc: "JWT, sessions, access control, input validation",
    },
  ];

  const stack = [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "React",
    "REST APIs",
    "Git",
    "JavaScript",
    "typescript",
  ];

  const contacts = [
    {
      icon: "ti-mail",
      label: "Email",
      value: "mansuriman18@gmail.com",
      href: "mailto:mansuriman18@gmail.com",
    },
    {
      icon: "ti-brand-linkedin",
      label: "LinkedIn",
      value: "mansur-iman-550588370",
      href: "https://www.linkedin.com/in/mansur-iman-550588370/",
    },
    {
      icon: "ti-brand-x",
      label: "X / Twitter",
      value: "@mansuur_iman",
      href: "https://x.com/mansuur_iman",
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>About</p>
        <h1 className={styles.title}>
          Fullstack engineer.
          <br />
          Backend-first thinker.
        </h1>
        <p className={styles.lead}>
          I build software end to end — from database schema and API design to
          the interfaces users interact with. My foundation is backend: I care
          deeply about how data moves, how systems are structured, and how logic
          is organized. But I'm equally comfortable on the frontend when the
          work calls for it.
        </p>
        <p className={styles.lead}>
          I'm early in my career and intentionally building depth over breadth —
          writing production-grade Node.js, working with real databases, and
          shipping projects that go beyond tutorials.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>What I work with</h2>
        <div className={styles.skillsGrid}>
          {skills.map((s) => (
            <div key={s.title} className={styles.skillCard}>
              <i
                className={`ti ${s.icon} ${styles.skillIcon}`}
                aria-hidden="true"
              />
              <p className={styles.skillTitle}>{s.title}</p>
              <p className={styles.skillDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.stackRow}>
          {stack.map((t) => (
            <span key={t} className={styles.pill}>
              {t}
            </span>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>How I work</h2>
        <p className={styles.body}>
          I start from the data. Before writing a single line of code, I think
          about what the system needs to store, how entities relate to each
          other, and what the API contract between layers should look like. That
          approach keeps the codebase honest as complexity grows.
        </p>
        <p className={styles.body}>
          I break features into small, testable pieces and iterate — not because
          it's a process I follow, but because I've learned it's the only way to
          catch edge cases early. I'd rather spend twenty minutes designing a
          clean interface than two hours debugging a tightly coupled one.
        </p>
        <p className={styles.body}>
          I'm also comfortable on the frontend. I build the UI myself on
          personal projects, which means I've had to think through the full
          picture — how the API response maps to state, how a form's UX reflects
          the backend's validation logic, and where the seams between layers
          should be.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Background</h2>
        <p className={styles.body}>
          I started with fundamentals — HTML, JavaScript, how HTTP actually
          works. I didn't rush into frameworks; I wanted to understand what they
          were solving first. That curiosity pulled me toward backend
          development, where the interesting problems live: designing databases,
          modeling relationships, handling state that persists.
        </p>
        <p className={styles.body}>
          I've focused on building real understanding in a small number of areas
          rather than surface-level exposure to many:
        </p>
        <ul className={styles.list}>
          <li>
            Designing APIs that are consistent, versioned, and easy to consume
          </li>
          <li>
            Modeling relational data with constraints that actually enforce
            business logic
          </li>
          <li>
            Implementing auth flows from scratch — not just wiring up a library
          </li>
          <li>
            Structuring backend code so it stays readable as the project grows
          </li>
          <li>
            Building fullstack features where I own the entire vertical slice
          </li>
        </ul>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Outside of code</h2>
        <p className={styles.body}>
          I'm deliberate about how I spend my time. I train consistently, focus
          on long-term health, and try to improve at things I care about with
          the same attention I bring to engineering. I'm interested in
          distributed systems and AI integration as the next technical areas to
          build depth in.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Get in touch</h2>
        <p className={styles.body}>
          I'm open to backend, fullstack, and software engineering internships
          and junior roles. If you're building something real and need someone
          who thinks carefully about systems — let's talk.
        </p>
        <div className={styles.contactList}>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className={styles.contactRow}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              <div className={styles.contactIcon}>
                <i className={`ti ${c.icon}`} aria-hidden="true" />
              </div>
              <span className={styles.contactLabel}>{c.label}</span>
              <span className={styles.contactValue}>{c.value}</span>
              <span className={styles.contactArrow}>→</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
