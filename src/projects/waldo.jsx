import waldoImage from "../assets/waldo.png";
import schema from "../assets/waldo-schema.png";
import styles from "./ProjectDetail.module.css";

export default function Waldo() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Game Logic & Validation Case Study</div>
          <h1>Where’s Waldo</h1>
          <p className={styles.tagline}>
            A high-integrity search game where the backend acts as the sole
            "Source of Truth" for coordinate validation and state progression.
          </p>

          <div className={styles.stack}>
            {["React", "Node.js", "Express", "PostgreSQL", "Prisma"].map(
              (tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={waldoImage}
            alt="Where's Waldo game interface"
            className={styles.mainImage}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Objective</h2>
        <p>
          Build a game that relies on backend-controlled validation and
          progression rather than trusting client-side logic, ensuring fair
          gameplay and accurate results.
        </p>
      </section>

      <section className={styles.section}>
        <h2>System Flow</h2>

        <ul>
          <li>User selects a field (level)</li>
          <li>If not authenticated → redirected to login</li>
          <li>Game starts with first image and target characters</li>
          <li>User clicks image → coordinates sent to backend</li>
          <li>Backend validates guess and updates progress</li>
          <li>When all characters are found → next image loads</li>
          <li>When all images are completed → field marked complete</li>
          <li>Final time is recorded and leaderboard updated</li>
        </ul>

        <p>
          The backend manages progression state and determines advancement,
          preventing the client from bypassing game logic.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Progression System</h2>

        <ul>
          <li>Each field contains multiple images</li>
          <li>User progress is tracked per field</li>
          <li>Completion state is stored in the database</li>
          <li>Users must complete images sequentially</li>
        </ul>

        <p>
          The system treats progression as backend-managed state, ensuring
          consistency across sessions and preventing skipped steps.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Data Model</h2>

        <img
          src={schema}
          alt="Database schema diagram"
          className={styles.schema}
        />

        <ul>
          <li>Users → authenticated players</li>
          <li>Fields → game levels</li>
          <li>Images → belong to fields</li>
          <li>Characters → store valid coordinates per image</li>
          <li>Progress → tracks user completion per field</li>
          <li>Leaderboard → stores completion time per user per field</li>
        </ul>

        <p>
          Relationships ensure that validation, progression, and scoring are all
          tied to the authenticated user and specific game field.
        </p>
      </section>

      <section className={styles.section}>
        <h2>API Design</h2>

        <pre className={styles.code}>
          {`POST /guess
GET /image/:id
GET /progress/:fieldId
POST /complete
GET /leaderboard/:fieldId`}
        </pre>

        <p>
          The API validates user actions and controls progression, ensuring that
          all game logic remains on the server.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Validation & Integrity</h2>

        <ul>
          <li>All guesses validated on the server</li>
          <li>No character coordinates exposed to client</li>
          <li>Progress controlled by backend state</li>
          <li>Leaderboard submissions verified server-side</li>
        </ul>

        <p>
          The backend acts as the source of truth — the frontend only sends
          input, never determines results.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Key Challenge</h2>

        <p>
          The main challenge was handling coordinate accuracy across different
          screen sizes. This required normalizing click positions relative to
          image dimensions before validating them against stored character
          coordinates.
        </p>
      </section>

      <section className={styles.links}>
        <a
          href="https://github.com/mansuur-iman/wheres-waldo-fullstack"
          target="_blank"
          rel="noreferrer"
        >
          Source Code ↗
        </a>
        <a
          href="https://wheres-waldo-fullstack.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo →
        </a>
      </section>
    </div>
  );
}
