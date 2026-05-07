import membersOnly from "../assets/membersOnly.png";
import schema from "../assets/membersOnlySchema.png";
import styles from "./ProjectDetail.module.css";

export default function MembersOnly() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Security & Auth Case Study</div>
          <h1>MembersOnly</h1>
          <p className={styles.tagline}>
            A server-rendered messaging system implementing granular Role-Based
            Access Control (RBAC).
          </p>

          <div className={styles.stack}>
            {["Node.js", "Express", "PostgreSQL", "Passport.js", "EJS"].map(
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
            src={membersOnly}
            alt="MembersOnly Interface"
            className={styles.mainImage}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Objective</h2>
        <p>
          Architect a system where data visibility is dynamically determined by
          user roles (Guest, Member, Admin), solving the challenge of
          unauthorized data exposure in a server-rendered environment.
        </p>
      </section>

      <section className={styles.section}>
        <h2>System Flow</h2>
        <div className={styles.flowDiagram}>
          Client Request → Passport Middleware → Session Validation → Role
          Authorization → EJS Rendering
        </div>
        <ul>
          <li>
            Passwords are hashed using <strong>bcrypt</strong> before
            persistence.
          </li>
          <li>
            Server-side sessions are managed via <strong>Passport.js</strong>.
          </li>
          <li>
            Custom middleware intercepts requests to validate permissions before
            DB queries.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Database Design</h2>
        <div className={styles.schemaContainer}>
          <img src={schema} alt="Database Schema" className={styles.schema} />
          <p className={styles.schemaCaption}>
            Relational integrity ensures messages are strictly tied to User IDs,
            while a dedicated role column handles authorization logic.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Security Model</h2>
        <pre className={styles.code}>
          {`// Example of Role-Based Middleware
function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'ADMIN') return next();
  res.status(403).send('Unauthorized');
}`}
        </pre>
        <p>
          Authentication is handled via stateful sessions. Security is enforced
          at the controller level to ensure restricted data (like message
          authors) is only joined in the SQL query when the user has the
          "Member" role.
        </p>
      </section>

      <section className={styles.links}>
        <a
          href="https://github.com/mansuur-iman/Members-only"
          target="_blank"
          rel="noreferrer"
        >
          Source Code ↗
        </a>
        <a
          href="https://members-only-821k.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo →
        </a>
      </section>
    </div>
  );
}
