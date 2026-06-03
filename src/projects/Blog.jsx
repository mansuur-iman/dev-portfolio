import { useNavigate } from "react-router";
import blogImage from "../assets/blog1.png";
import schema from "../assets/blog-schema.png";
import styles from "./ProjectDetail.module.css";

export default function Blog() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "ti-lock",
      title: "Ownership-based auth",
      desc: "Every mutation verifies req.user.id === post.authorId before proceeding",
    },
    {
      icon: "ti-database",
      title: "Relational data model",
      desc: "Users → Posts one-to-many with referential integrity at the DB level",
    },
    {
      icon: "ti-route",
      title: "Clean API surface",
      desc: "Public read endpoints, private write endpoints — consistent and predictable",
    },
    {
      icon: "ti-shield-check",
      title: "IDOR prevention",
      desc: "Knowing a post ID isn't enough — you must own it to change it",
    },
  ];

  const flowSteps = [
    { icon: "ti-device-laptop", label: "Client" },
    { icon: "ti-lock", label: "Auth middleware" },
    { icon: "ti-code", label: "Controller" },
    { icon: "ti-user-check", label: "Ownership check" },
    { icon: "ti-database", label: "PostgreSQL" },
  ];

  const lessons = [
    "Resource-based authorization is fundamentally different from simple auth — you have to think about who owns what, not just who is logged in",
    "Prisma's include syntax makes relational data easy to fetch but it's worth understanding the SQL it generates underneath",
    "Separating public and private route groups early keeps the codebase clean as the API grows",
    "Database constraints are the last line of defense — they enforce correctness even if application logic has a bug",
  ];

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        <i className="ti ti-arrow-left" aria-hidden="true" />
        All projects
      </button>

      <div className={styles.badgeRow}>
        <span className={`${styles.badge} ${styles.badgeAccent}`}>
          Case study
        </span>
        <span className={styles.badge}>CRUD & architecture</span>
      </div>

      <h1 className={styles.title}>
        Blog — fullstack
        <br />
        publishing platform
      </h1>
      <p className={styles.subtitle}>
        A RESTful blogging platform with complete CRUD, ownership-based
        authorization, and clean relational data modeling. Built backend-first,
        shipped end to end.
      </p>

      <div className={styles.ctaRow}>
        <a
          href="https://blog-reader-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          <i className="ti ti-player-play" aria-hidden="true" />
          Live demo
        </a>
        <a
          href="https://github.com/mansuur-iman/blog-api"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.btnSecondary}`}
        >
          <i className="ti ti-brand-github" aria-hidden="true" />
          Source code
        </a>
      </div>

      <div className={styles.stackRow}>
        {[
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma ORM",
          "JWT auth",
          "REST API",
        ].map((t) => (
          <span key={t} className={styles.tech}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.imageFrame}>
        <img
          src={blogImage}
          alt="Blog interface"
          className={styles.mainImage}
        />
      </div>

      <hr className={styles.divider} />

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Architecture</p>
          <p className={styles.statValue}>REST API</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Auth pattern</p>
          <p className={styles.statValue}>JWT + ownership</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Database</p>
          <p className={styles.statValue}>PostgreSQL</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>What it does</h2>
      <p className={styles.body}>
        Users can sign up, write posts, and manage their content through a clean
        API. Every write operation is protected — not just by authentication,
        but by ownership checks that verify the requesting user actually owns
        the resource they're trying to modify. Public readers can browse all
        posts without an account.
      </p>

      <div className={styles.featuresGrid}>
        {features.map((f) => (
          <div key={f.title} className={styles.featureCard}>
            <i
              className={`ti ${f.icon} ${styles.featureIcon}`}
              aria-hidden="true"
            />
            <p className={styles.featureTitle}>{f.title}</p>
            <p className={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>Request flow</h2>
      <div className={styles.flow}>
        {flowSteps.map((step, i) => (
          <div key={step.label} className={styles.flowInner}>
            <div className={styles.flowStep}>
              <i className={`ti ${step.icon}`} aria-hidden="true" />
              {step.label}
            </div>
            {i < flowSteps.length - 1 && (
              <span className={styles.flowArrow}>→</span>
            )}
          </div>
        ))}
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>API design</h2>
      <pre className={styles.code}>
        <code>
          {[
            ["GET", "/posts", "public — fetch all posts"],
            ["GET", "/posts/:id", "public — single post"],
            ["POST", "/posts", "private — create (auth required)"],
            ["PUT", "/posts/:id", "private — update (owner only)"],
            ["DELETE", "/posts/:id", "private — delete (owner only)"],
          ].map(([method, route, comment]) => (
            <span key={route + method}>
              <span className={styles.codeMethod}>{method.padEnd(7)}</span>
              <span className={styles.codeRoute}>{route.padEnd(16)}</span>
              <span className={styles.codeComment}>{"// " + comment}</span>
              {"\n"}
            </span>
          ))}
        </code>
      </pre>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>Database schema</h2>
      <div className={styles.schemaFrame}>
        <img
          src={schema}
          alt="Database schema diagram"
          className={styles.schemaImg}
        />
      </div>
      <p className={styles.schemaCaption}>
        One-to-many relationship — users mapped to posts with referential
        integrity enforced at the database level
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>What I learned building this</h2>
      <ul className={styles.lessons}>
        {lessons.map((l, i) => (
          <li key={i} className={styles.lessonItem}>
            <i className="ti ti-check" aria-hidden="true" />
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
