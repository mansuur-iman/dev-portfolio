import { useNavigate } from "react-router";
import messagingAppImg from "../assets/img2.png"; // Adjust path to your asset
import schema from "../assets/msg-schema.png"; // Adjust path to your asset
import styles from "./ProjectDetail.module.css";

export default function MessagingApp() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "ti-message-circle",
      title: "Isolated bidirectional chat",
      desc: "Secure message exchanges constrained entirely to verified friend relationships, including self-messaging notes capabilities",
    },
    {
      icon: "ti-user-plus",
      title: "Friendship state machine",
      desc: "Robust lifecycle handling for discovering users, firing friend requests, and managing real-time accept/decline responses",
    },
    {
      icon: "ti-bell-ringing",
      title: "Unread count indicators",
      desc: "Reactive tracking layers showcasing distinct counter badges that immediately flush upon opening active threads",
    },
    {
      icon: "ti-forms",
      title: "Zod layout validation",
      desc: "Strict type safety barriers validating inputs seamlessly across both the client-side UI forms and server endpoints",
    },
  ];

  const flowSteps = [
    { icon: "ti-device-laptop", label: "React / Vite" },
    { icon: "ti-refresh-alert", label: "TanStack Query" },
    { icon: "ti-key", label: "JWT validation" },
    { icon: "ti-checkup-list", label: "Zod validation" },
    { icon: "ti-database", label: "Prisma / Postgres" },
  ];

  const lessons = [
    "Managing highly relational, real-time unread badge increments demands atomic database operations to keep backend tables clean",
    "Self-messaging mechanics require explicit adjustments inside the constraint layer to permit a user ID to join conversations with itself",
    "Separating logic across clean dual-tab interfaces (Chats vs. People) keeps client state crisp and lowers multi-fetch payload strain",
    "Synchronizing TanStack Query validation caches with Zustand global state simplifies profile updates, deletes, and session expirations",
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
        <span className={styles.badge}>Real-time communication</span>
      </div>

      <h1 className={styles.title}>
        ChatSpaces — dynamic
        <br />
        messaging ecosystem
      </h1>
      <p className={styles.subtitle}>
        A secure, fullstack social network offering dual-pane exploration
        matrices, secure session authorization, and strict relational context
        constraints. Engineered end-to-end with deep end-point type guarantees.
      </p>

      <div className={styles.ctaRow}>
        <a
          href="https://messaging-app-ashen-five.vercel.app/" // Swap out with your deployed application URL if applicable
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          <i className="ti ti-player-play" aria-hidden="true" />
          Live demo
        </a>
        <a
          href="https://github.com/mansuur-iman/messaging-app" // Swap out with your repository link
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
          "TypeScript",
          "React",
          "Node.js",
          "PostgreSQL",
          "Prisma ORM",
          "TanStack Query",
          "Zustand",
          "Styled Components",
        ].map((t) => (
          <span key={t} className={styles.tech}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.imageFrame}>
        <img
          src={messagingAppImg}
          alt="Messaging application dashboard wireframe"
          className={styles.mainImage}
        />
      </div>

      <hr className={styles.divider} />

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Architecture</p>
          <p className={styles.statValue}>Fullstack TypeScript</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Auth Pattern</p>
          <p className={styles.statValue}>JWT + HttpOnly</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>State Strategy</p>
          <p className={styles.statValue}>Zustand + Queries</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.sectionLabel}>What it does</h2>
      <p className={styles.body}>
        This system powers a secure communication application where clients
        discover new profiles, coordinate friend links, and manage message
        histories. Authenticated users toggle between a **Chat Tab** (which
        handles active communication nodes—including self-directed note tunnels)
        and a **People Tab** (housing comprehensive member lists, search fields,
        and quick-action buttons to accept or reject incoming connection
        proposals). Red counter chips alert users to pending interactions and
        wipe away cleanly the moment details are viewed.
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
            [
              "POST",
              "/auth/login",
              "public — authenticate and deliver JWT token",
            ],
            [
              "GET",
              "/users/profile",
              "private — fetch or update personal profile details",
            ],
            [
              "POST",
              "/friends/request",
              "private — dispatch connection query payload",
            ],
            [
              "PUT",
              "/friends/respond",
              "private — accept or decline dynamic request nodes",
            ],
            [
              "GET",
              "/chats/:id",
              "private — pull filtered log history & flush badges",
            ],
          ].map(([method, route, comment]) => (
            <span key={route + method}>
              <span className={styles.codeMethod}>{method.padEnd(10)}</span>
              <span className={styles.codeRoute}>{route.padEnd(18)}</span>
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
        Relational model implementing explicit recursive joins for friend
        statuses, unique composite indexes to prevent duplicate invitations, and
        tracking columns for unread messages.
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
