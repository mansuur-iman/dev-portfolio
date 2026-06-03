import { useNavigate } from "react-router";
import fileCloudImg from "../assets/filecloud.png";
import membersOnlyImg from "../assets/membersOnly.png";
import blogImg from "../assets/blog1.png";
import waldoImg from "../assets/waldo.png";
import styles from "./Projects.module.css";
import messagingAppImg from "../assets/img1.png";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "filecloud",
      title: "FileCloud — cloud storage platform",
      subtitle:
        "A robust file management system prioritizing complete data isolation, relational integrity, and organized file structural modeling.",
      image: fileCloudImg,
      badges: ["Case study", "Backend & architecture"],
      stack: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "Multer"],
      demoUrl: "https://file-cloud-89fq.onrender.com",
    },
    {
      id: "messaging-app",
      title: "ChatSpaces — dynamic messaging ecosystem",
      subtitle:
        "A secure, fullstack social network offering dual-pane exploration matrices, secure session authorization, and strict relational constraints.",
      image: messagingAppImg,
      badges: ["Case study", "Real-time communication"],
      stack: [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "Prisma ORM",
        "Zustand",
      ],
      demoUrl: "https://messaging-app-ashen-five.vercel.app/",
    },
    {
      id: "membersonly",
      title: "MembersOnly — exclusive messaging workspace",
      subtitle:
        "A server-rendered anonymous message board system implementing granular Role-Based Access Control (RBAC) and stateful sessions.",
      image: membersOnlyImg,
      badges: ["Case study", "Security & auth"],
      stack: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Passport.js",
        "EJS templates",
      ],
      demoUrl: "https://members-only-821k.onrender.com/",
    },
    {
      id: "blog",
      title: "Blog — fullstack publishing platform",
      subtitle:
        "A RESTful blogging platform with complete CRUD, ownership-based authorization, and clean relational data modeling.",
      image: blogImg,
      badges: ["Case study", "CRUD & architecture"],
      stack: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "JWT auth"],
      demoUrl: "https://blog-reader-five.vercel.app/",
    },
    {
      id: "waldo",
      title: "Where’s Waldo — photo search game",
      subtitle:
        "A secure photo-hunt application leveraging server-side validation, relational progress tracking, and coordinate normalization.",
      image: waldoImg,
      badges: ["Case study", "Game logic & validation"],
      stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma ORM"],
      demoUrl: "https://wheres-waldo-fullstack.vercel.app/",
    },
  ];

  return (
    <main className={styles.container}>
      <p className={styles.eyebrow}>Work</p>

      <div className={styles.projectList}>
        {projects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.badgeRow}>
                {project.badges.map((b, idx) => (
                  <span
                    key={b}
                    className={`${styles.badge} ${idx === 0 ? styles.badgeAccent : ""}`}
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDesc}>{project.subtitle}</p>

              <div className={styles.stackRow}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.ctaRow}>
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className={styles.btnPrimary}
                >
                  Read case study
                </button>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSecondary}
                >
                  <i className="ti ti-player-play" aria-hidden="true" />
                  Live demo
                </a>
              </div>
            </div>

            <div
              className={styles.projectImageFrame}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <img src={project.image} alt={project.title} />
            </div>
          </article>
        ))}
      </div>

      {/* --- ADDED GITHUB FOOTER ACTIONS BELOW --- */}
      <div className={styles.viewAllRow}>
        <hr className={styles.footerLine} />
        <a
          href="https://github.com/mansuur-iman"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubBtn}
        >
          <i className="ti ti-brand-github" aria-hidden="true" />
          View all repositories on GitHub
        </a>
      </div>
    </main>
  );
}
