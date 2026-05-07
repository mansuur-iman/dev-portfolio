import blogImage from "../assets/waldo.png";
import schema from "../assets/blog-schema.png";
import styles from "./ProjectDetail.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>CRUD & Architecture Case Study</div>
          <h1>Blog</h1>
          <p className={styles.tagline}>
            A RESTful blogging platform architected for secure content
            management and relational data integrity.
          </p>

          <div className={styles.stack}>
            {["Node.js", "Express", "PostgreSQL", "Prisma"].map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={blogImage}
            alt="Blog interface"
            className={styles.mainImage}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Objective</h2>
        <p>
          Develop a content-driven system that prioritizes{" "}
          <strong>Atomic CRUD operations</strong> and strict ownership
          validation, ensuring a clear boundary between public consumption and
          authorized management.
        </p>
      </section>

      <section className={styles.section}>
        <h2>System Flow</h2>
        <div className={styles.flowDiagram}>
          Client → Auth Middleware → Controller → Resource Ownership Check →
          PostgreSQL
        </div>
        <ul>
          <li>
            <strong>Write Ops:</strong> Every <code>PUT</code> and{" "}
            <code>DELETE</code> request triggers a pre-flight check to compare
            the <code>req.user.id</code> against the <code>post.authorId</code>.
          </li>
          <li>
            <strong>Read Ops:</strong> Efficiently fetching posts with author
            metadata using SQL joins/Prisma includes.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Database Design</h2>
        <div className={styles.schemaContainer}>
          <img
            src={schema}
            alt="Database schema diagram"
            className={styles.schema}
          />
          <p className={styles.schemaCaption}>
            Standardized One-to-Many relationship mapping users to their
            respective posts, enforcing referential integrity at the database
            level.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>API Design</h2>
        <pre className={styles.code}>
          {`GET /posts          // Public: Fetch all entries
POST /posts         // Private: Create new entry
PUT /posts/:id      // Private: Update (Owner only)
DELETE /posts/:id   // Private: Destroy (Owner only)`}
        </pre>
      </section>

      <section className={styles.section}>
        <h2>Security Model</h2>
        <p>
          Beyond simple authentication, the security model implements a{" "}
          <strong>Resource-Based Authorization</strong> pattern. This prevents
          "Insecure Direct Object Reference" (IDOR) vulnerabilities by ensuring
          that knowing a Post ID isn't enough to modify it.
        </p>
      </section>

      <section className={styles.links}>
        <a
          href="https://github.com/mansuur-iman/blog-api"
          target="_blank"
          rel="noreferrer"
        >
          Source Code ↗
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          Live Demo →
        </a>
      </section>
    </div>
  );
}
