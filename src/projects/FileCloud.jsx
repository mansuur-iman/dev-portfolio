import fileCloud from "../assets/filecloud.png";
import schema from "../assets/filecloud-schema.png";
import styles from "./ProjectDetail.module.css";

export default function FileCloud() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Backend Case Study</div>
          <h1>FileCloud</h1>
          <p className={styles.tagline}>
            A robust file management system prioritizing data isolation and
            relational integrity.
          </p>

          <div className={styles.stack}>
            {["Node.js", "Express", "Prisma", "PostgreSQL", "Multer"].map(
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
            src={fileCloud}
            alt="FileCloud Interface"
            className={styles.mainImage}
          />
          <div className={styles.imageShadow}></div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Objective</h2>
        <p>
          Design a system that allows users to upload, organize, and manage
          files while ensuring complete data isolation between users.
        </p>
      </section>

      <section className={styles.section}>
        <h2>System Design</h2>

        <p>
          The system is built around user ownership. Every folder and file is
          tied to a specific user via relational database constraints.
        </p>

        <ul>
          <li>User authenticates via session-based login</li>
          <li>Files are uploaded using Multer middleware</li>
          <li>Metadata is stored in PostgreSQL</li>
          <li>Each file is linked to a folder and user</li>
          <li>All queries are scoped using userId</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Database Design</h2>

        <img src={schema} alt="Database Schema" className={styles.schema} />

        <ul>
          <li>Users → own folders and files (1:N)</li>
          <li>Folders → contain multiple files</li>
          <li>Files → belong to user + folder</li>
          <li>Share links → include expiration timestamps</li>
        </ul>

        <p>
          The schema enforces relational integrity using foreign keys to prevent
          orphaned or unauthorized data access.
        </p>
      </section>

      <section className={styles.section}>
        <h2>API Design</h2>

        <pre className={styles.code}>
          {`POST /upload
GET /files
POST /folders
GET /share/:id`}
        </pre>

        <p>
          All routes are protected and scoped to the authenticated user.
          Requests are validated before interacting with the database.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Security Model</h2>

        <ul>
          <li>Session-based authentication</li>
          <li>Middleware-protected routes</li>
          <li>User-scoped database queries</li>
          <li>Input validation before file storage</li>
        </ul>

        <p>
          Security is enforced at the backend level — not the frontend — to
          prevent unauthorized access or data leaks.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Key Challenge</h2>

        <p>
          The main challenge was ensuring strict ownership across all file
          operations while keeping file storage and database state consistent.
          Every request had to be validated against the authenticated user.
        </p>
      </section>

      <section className={styles.links}>
        <a href="https://github.com/mansuur-iman/file_uploader" target="_blank">
          Source Code ↗
        </a>
        <a href="https://file-cloud-89fq.onrender.com" target="_blank">
          Live Demo →
        </a>
      </section>
    </div>
  );
}
