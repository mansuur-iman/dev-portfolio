import { Link } from "react-router";
import styles from "./NoteCard.module.css";

export default function NoteCard({ note }) {
  const month = new Date(note.date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <Link to={`/notes/${note.slug}`} className={styles.card}>
      <span className={styles.date}>{month}</span>
      <div className={styles.body}>
        <p className={styles.title}>{note.title}</p>
        <p className={styles.description}>{note.description}</p>
        <div className={styles.tags}>
          {note.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span className={styles.arrow}>→</span>
    </Link>
  );
}
