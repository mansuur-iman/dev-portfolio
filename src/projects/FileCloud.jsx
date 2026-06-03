import { useNavigate } from "react-router";
import fileCloud from "../assets/filecloud.png";
import schema from "../assets/filecloud-schema.png";
import styles from "./ProjectDetail.module.css";

export default function FileCloud() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "ti-lock",
      title: "Data isolation",
      desc: "Strictly scoped backend queries ensure users only interact with their own files",
    },
    {
      icon: "ti-database",
      title: "Relational integrity",
      desc: "Folders and files tied via foreign keys to prevent orphaned or unauthorized data access",
    },
    {
      icon: "ti-folder",
      title: "Hierarchical storage",
      desc: "Intuitive structural data model mapping Users → Folders → Files seamlessly",
    },
    {
      icon: "ti-link",
      title: "Secure sharing",
      desc: "Generated share links include built-in expiration timestamps for security",
    },
  ];

  const flowSteps = [
    { icon: "ti-device-laptop", label: "Client" },
    { icon: "ti-auth-jwt", label: "Session auth" },
    { icon: "ti-files", label: "Multer middleware" },
    { icon: "ti-shield-check", label: "User scope validation" },
    { icon: "ti-database", label: "PostgreSQL" },
  ];

  const lessons = [
    "Keeping file storage and database state synchronized requires robust transaction management and error handling",
    "Security must be rigidly enforced at the backend level through user-scoped database queries, not trusted frontend states",
    "Designing shareable links with expiration timestamps requires careful attention to database indices and clean cleanup workers",
    "Input validation before moving files to permanent storage is the ultimate line of defense against malicious uploads",
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
        <span className={styles.badge}>Backend & architecture</span>
      </div>

      <h1 className={styles.title}>
        FileCloud — cloud
        <br />
        storage platform
      </h1>
      <p className={styles.subtitle}>
        A robust file management system prioritizing complete data isolation,
        relational integrity, and organized file structural modeling. Built
        backend-first, shipped end to end.
      </p>

      <div className={styles.ctaRow}>
        <a
          href="https://file-cloud-89fq.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          <i className="ti ti-player-play" aria-hidden="true" />
          Live demo
        </a>
        <a
          href="https://github.com/mansuur-iman/file_uploader"
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
          "Multer",
          "Session auth",
        ].map((t) => (
          <span key={t} className={styles.tech}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.imageFrame}>
        <img
          src={fileCloud}
          alt="FileCloud Interface"
          className={styles.mainImage}
        />
      </div>

      <hr className={styles.divider} />

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Objective</p>
          <p className={styles.statValue}>Data isolation</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Auth pattern</p>
          <p className={styles.statValue}>Session-based</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Database</p>
          <p className={styles.statValue}>PostgreSQL</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>What it does</h2>
      <p className={styles.body}>
        Users can securely sign up, create folders, and upload files through an
        isolated API interface. Every request is heavily validated—ensuring
        backend-level protection where users are only ever permitted to view,
        query, or mutate resources explicitly linked to their unique database
        account metadata.
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
            ["POST", "/upload", "private — upload new files"],
            ["GET", "/files", "private — fetch user files"],
            ["POST", "/folders", "private — create empty directory"],
            ["GET", "/share/:id", "public — access with timestamp expiry"],
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

      <h2 className={styles.sectionLabel}>Database design</h2>
      <div className={styles.schemaFrame}>
        <img
          src={schema}
          alt="Database Schema Diagram"
          className={styles.schemaImg}
        />
      </div>
      <p className={styles.schemaCaption}>
        Hierarchical structural mapping — Users own folders and files (1:N) with
        complete foreign key enforcement
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>Key challenge</h2>
      <p className={styles.body}>
        The main architectural challenge was enforcing absolute data boundaries
        across nested structural levels while keeping local filesystem storage
        blocks perfectly synchronous with database rows during unexpected
        failures.
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
