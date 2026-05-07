import FileCloud from "../projects/FileCloud";
import MembersOnly from "../projects/MembersOnly";
import Blog from "../projects/Blog";
import Waldo from "../projects/waldo";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    { id: 1, component: <FileCloud /> },
    { id: 2, component: <MembersOnly /> },
    { id: 3, component: <Blog /> },
    { id: 4, component: <Waldo /> },
  ];

  return (
    <main className={styles.container}>
      <p className={styles.eyebrow}>Work</p>
      <h1 className={styles.pageTitle}>Projects</h1>
      <p className={styles.subtitle}>
        Things I built, shipped, and learned from.
      </p>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <article key={project.id} className={styles.projectWrapper}>
            {project.component}
          </article>
        ))}
      </div>
    </main>
  );
}
