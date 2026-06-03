import { useNavigate } from "react-router";
import waldoImage from "../assets/waldo.png";
import schema from "../assets/waldo-schema.png";
import styles from "./ProjectDetail.module.css";

export default function Waldo() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "ti-crosshair",
      title: "Backend verification",
      desc: "All click coordinates are validated on the server; target locations are never exposed to the client",
    },
    {
      icon: "ti-trending-up",
      title: "State-driven progression",
      desc: "Sequential stage advancement is completely managed by backend state, preventing game-skipping exploits",
    },
    {
      icon: "ti-scale-percentage",
      title: "Coordinate normalization",
      desc: "Translates click positions relative to image dimensions to guarantee accurate validation across all screen resolutions",
    },
    {
      icon: "ti-trophy",
      title: "Secure leaderboards",
      desc: "Completion times are calculated server-side upon completion to ensure high-integrity scoreboard standings",
    },
  ];

  const flowSteps = [
    { icon: "ti-mouse", label: "Client click" },
    { icon: "ti-transform", label: "Scale normalization" },
    { icon: "ti-vector-triangle", label: "Coordinate check" },
    { icon: "ti-refresh", label: "State progression" },
    { icon: "ti-database", label: "PostgreSQL" },
  ];

  const lessons = [
    "Treating the backend as the sole source of truth is mandatory for competitive integrity in web-based gaming applications",
    "Responsive canvas and coordinate checking require percentage-based layout tracking rather than raw viewport pixels",
    "Session-based state machines prevent client manipulation of time-stamps or artificial game completion signals",
    "Normalizing mathematical properties early avoids heavy layout bugs when rendering assets dynamically across device viewports",
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
        <span className={styles.badge}>Game logic & validation</span>
      </div>

      <h1 className={styles.title}>
        Where’s Waldo — high
        <br />
        integrity photo search
      </h1>
      <p className={styles.subtitle}>
        A secure photo-hunt application leveraging server-side validation,
        relational progress tracking, and viewport-independent coordinate
        normalization formulas. Built backend-first, shipped end to end.
      </p>

      <div className={styles.ctaRow}>
        <a
          href="https://wheres-waldo-fullstack.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          <i className="ti ti-player-play" aria-hidden="true" />
          Live demo
        </a>
        <a
          href="https://github.com/mansuur-iman/wheres-waldo-fullstack"
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
          "React",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma ORM",
          "REST API",
        ].map((t) => (
          <span key={t} className={styles.tech}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.imageFrame}>
        <img
          src={waldoImage}
          alt="Where's Waldo game interface"
          className={styles.mainImage}
        />
      </div>

      <hr className={styles.divider} />

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Objective</p>
          <p className={styles.statValue}>Backend validation</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Core challenge</p>
          <p className={styles.statValue}>Scale normalization</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Database</p>
          <p className={styles.statValue}>PostgreSQL</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>What it does</h2>
      <p className={styles.body}>
        Players browse maps, select targets, and click to reveal hidden
        components. Instead of trusting the client-side system with spatial
        values, the frontend maps coordinates into relative percentages and
        sends them to the REST API layer, where precise validations, state
        tracking, and stopwatch markers are kept isolated and un-tamperable.
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
            ["POST", "/guess", "private — validate coordinates & progress"],
            ["GET", "/image/:id", "public — load assets metadata"],
            ["GET", "/progress/:id", "private — fetch active level status"],
            ["POST", "/complete", "private — seal timer & record score"],
            ["GET", "/leaderboard/:id", "public — get field score ranks"],
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

      <h2 className={styles.sectionLabel}>Data model</h2>
      <div className={styles.schemaFrame}>
        <img
          src={schema}
          alt="Database schema diagram"
          className={styles.schemaImg}
        />
      </div>
      <p className={styles.schemaCaption}>
        Relational structure linking users, levels, image scales, and valid
        target coordinates safely under system constraints
      </p>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>Key challenge</h2>
      <p className={styles.body}>
        Managing accurate coordinates across unpredictable screen aspect ratios
        required calculating dynamic, viewport-agnostic percentage values on
        click vectors. This ensured coordinate mappings remained mathematically
        sound on server matches whether played on compact cellular devices or
        expansive 4K monitors.
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
