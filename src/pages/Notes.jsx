import { notes } from "../data/notes";
import NoteCard from "../components/NoteCard";
import styles from "./Notes.module.css";

export default function Notes() {
  const sorted = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className={styles.container}>
      <p className={styles.eyebrow}>Writing</p>

      <p className={styles.count}>{sorted.length} notes</p>
      <div className={styles.noteList}>
        {sorted.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </main>
  );
}
