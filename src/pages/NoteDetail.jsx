import { useParams, Link } from "react-router";
import { notes } from "../data/notes";
import styles from "./NoteDetail.module.css";

function parseInline(text) {
  const tokens = text.split(/(\*\*.*?\*\*|`[^`]+`)/g);
  return tokens.map((token, i) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={i}>{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith("`") && token.endsWith("`")) {
      return (
        <code key={i} className={styles.inlineCode}>
          {token.slice(1, -1)}
        </code>
      );
    }
    return token;
  });
}

function renderContent(content) {
  const parts = content.split(/(```[\s\S]*?```)/g);

  return parts.flatMap((part, i) => {
    if (part.startsWith("```")) {
      const code = part.replace(/^```[a-z]*\n?/, "").replace(/```$/, "");
      return (
        <pre key={`code-${i}`} className={styles.code}>
          <code>{code}</code>
        </pre>
      );
    }

    const lines = part.split("\n");
    const blocks = [];
    let listBuffer = [];
    let listType = null;
    let tableBuffer = [];

    const flushList = () => {
      if (listBuffer.length === 0) return;
      const Tag = listType;
      blocks.push(
        <Tag key={`list-${i}-${blocks.length}`} className={styles.list}>
          {listBuffer.map((item, k) => (
            <li key={k} className={styles.listItem}>
              {parseInline(item)}
            </li>
          ))}
        </Tag>,
      );
      listBuffer = [];
      listType = null;
    };

    const flushTable = () => {
      if (tableBuffer.length === 0) return;

      const [headerRow, , ...bodyRows] = tableBuffer;

      const parseRow = (row) =>
        row
          .split("|")
          .map((cell) => cell.trim())
          .filter(Boolean);

      const headers = parseRow(headerRow);
      const rows = bodyRows.map(parseRow);

      blocks.push(
        <div
          key={`table-${i}-${blocks.length}`}
          className={styles.tableWrapper}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                {headers.map((h, k) => (
                  <th key={k} className={styles.th}>
                    {parseInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rk) => (
                <tr key={rk}>
                  {row.map((cell, ck) => (
                    <td key={ck} className={styles.td}>
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );

      tableBuffer = [];
    };

    lines.forEach((line, j) => {
      if (line.trim().startsWith("|")) {
        flushList();
        tableBuffer.push(line.trim());
        return;
      }

      if (tableBuffer.length > 0) flushTable();

      if (line.startsWith("## ")) {
        flushList();
        blocks.push(
          <h2 key={`h2-${i}-${j}`} className={styles.heading}>
            {parseInline(line.slice(3).trim())}
          </h2>,
        );
        return;
      }

      if (line.startsWith("### ")) {
        flushList();
        blocks.push(
          <h3 key={`h3-${i}-${j}`} className={styles.subheading}>
            {parseInline(line.slice(4).trim())}
          </h3>,
        );
        return;
      }

      const orderedMatch = line.match(/^\d+\.\s+(.*)/);
      if (orderedMatch) {
        if (listType && listType !== "ol") flushList();
        listType = "ol";
        listBuffer.push(orderedMatch[1]);
        return;
      }

      const unorderedMatch = line.match(/^[-*]\s+(.*)/);
      if (unorderedMatch) {
        if (listType && listType !== "ul") flushList();
        listType = "ul";
        listBuffer.push(unorderedMatch[1]);
        return;
      }

      if (line.trim() === "") {
        flushList();
        return;
      }

      flushList();
      blocks.push(
        <p key={`p-${i}-${j}`} className={styles.paragraph}>
          {parseInline(line.trim())}
        </p>,
      );
    });

    flushList();
    flushTable();
    return blocks;
  });
}

export default function NoteDetail() {
  const { slug } = useParams();
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    return (
      <main className={styles.container}>
        <p>Note not found.</p>
        <Link to="/notes">← Back to notes</Link>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <Link to="/notes" className={styles.back}>
        ← Notes
      </Link>

      <div className={styles.meta}>
        <time className={styles.date}>{note.date}</time>
        <div className={styles.tags}>
          {note.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h1 className={styles.title}>{note.title}</h1>
      <p className={styles.description}>{note.description}</p>

      <div className={styles.content}>{renderContent(note.content)}</div>
    </main>
  );
}
