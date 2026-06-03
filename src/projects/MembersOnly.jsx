import { useNavigate } from "react-router";
import membersOnly from "../assets/membersOnly.png";
import schema from "../assets/membersOnlySchema.png";
import styles from "./ProjectDetail.module.css";

export default function MembersOnly() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "ti-shield-lock",
      title: "Granular RBAC",
      desc: "Data visibility (Guest vs. Member vs. Admin) is explicitly separated at the application level",
    },
    {
      icon: "ti-fingerprint",
      title: "Bcrypt hashing",
      desc: "Secure user password security utilizing industry-standard salted cryptographic hashing",
    },
    {
      icon: "ti-users",
      title: "Conditional data joins",
      desc: "Message author and timestamp SQL details are only joined if the user holds valid permission",
    },
    {
      icon: "ti-user-minus",
      title: "Privilege containment",
      desc: "Destructive actions like message deletions are dynamically restricted to Admin roles only",
    },
  ];

  const flowSteps = [
    { icon: "ti-device-laptop", label: "Client" },
    { icon: "ti-lock", label: "Passport auth" },
    { icon: "ti-user-check", label: "Role validation" },
    { icon: "ti-settings", label: "EJS compiler" },
    { icon: "ti-database", label: "PostgreSQL" },
  ];

  const lessons = [
    "Role-Based Access Control must be locked down at the database layer — frontend hiding is never a real security solution",
    "Managing stateful user sessions server-side demands strict session store sanitation to counter performance degradation",
    "Conditional querying prevents accidental data leaks by completely omitting restricted data sets from database outputs",
    "Decoupling application business logic from controller authorization middleware maintains clean code predictability",
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
        <span className={styles.badge}>Security & auth</span>
      </div>

      <h1 className={styles.title}>
        MembersOnly — exclusive
        <br />
        messaging workspace
      </h1>
      <p className={styles.subtitle}>
        A server-rendered anonymous message board system implementing granular
        Role-Based Access Control (RBAC), stateful sessions, and conditional
        database querying.
      </p>

      <div className={styles.ctaRow}>
        <a
          href="https://members-only-821k.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          <i className="ti ti-player-play" aria-hidden="true" />
          Live demo
        </a>
        <a
          href="https://github.com/mansuur-iman/Members-only"
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
          "Passport.js",
          "Bcrypt",
          "EJS templates",
        ].map((t) => (
          <span key={t} className={styles.tech}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.imageFrame}>
        <img
          src={membersOnly}
          alt="MembersOnly Interface"
          className={styles.mainImage}
        />
      </div>

      <hr className={styles.divider} />

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Objective</p>
          <p className={styles.statValue}>Dynamic RBAC</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Auth pattern</p>
          <p className={styles.statValue}>Stateful session</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Database</p>
          <p className={styles.statValue}>PostgreSQL</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>What it does</h2>
      <p className={styles.body}>
        Users can drop anonymous messages onto a public feed, but metadata
        layers—such as the author's name and accurate creation timestamps—remain
        dynamically encrypted or omitted unless a reader has explicitly input
        secret keys to ascend into a higher role status tier.
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

      <h2 className={styles.sectionLabel}>Security model</h2>
      <pre className={styles.code}>
        <code>
          {[
            ["MIDDLEWARE", "isAdmin", "verify context user.role === 'ADMIN'"],
            [
              "CONTROLLER",
              "getMessages",
              "conditionally join authorship lines",
            ],
            [
              "ENCRYPTION",
              "bcrypt.hash",
              "securely salt text values pre-commit",
            ],
          ].map(([method, route, comment]) => (
            <span key={route + method}>
              <span className={styles.codeMethod}>{method.padEnd(12)}</span>
              <span className={styles.codeRoute}>{route.padEnd(15)}</span>
              <span className={styles.codeComment}>{"// " + comment}</span>
              {"\n"}
            </span>
          ))}
        </code>
      </pre>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>Database design</h2>
      <div className={styles.schemaFrame}>
        <img
          src={schema}
          alt="Database Schema Diagram"
          className={styles.schemaImg}
        />
      </div>
      <p className={styles.schemaCaption}>
        Relational integrity ensures messages are strictly bound to User IDs
        while handling dynamic clearance logic
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
