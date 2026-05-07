# Mansur Iman

Personal portfolio built with React and React Router — showcasing backend-focused projects, technical writing, and system design thinking.

## Stack

- **React** — component-based UI
- **React Router** — client-side routing
- **CSS Modules** — scoped, co-located styles
- **Vite** — dev server and bundler

## Pages

| Route       | Description                                         |
| ----------- | --------------------------------------------------- |
| `/`         | Home — intro, skills, design process, selected work |
| `/projects` | Full case studies for each project                  |
| `/notes`    | Technical writing — things learned while building   |
| `/about`    | Background, approach, and contact                   |

## Projects Featured

- **FileCloud** — File and folder management system with shareable links, built with Node.js, Express, Prisma, and PostgreSQL
- **MembersOnly** — Role-based messaging app with session authentication and server-side rendering via EJS
- **Blog** — Full-stack blogging platform with CRUD and user authentication
- **Where's Waldo** — Browser-based game with coordinate detection, validation logic, and a leaderboard

## Structure

```
src/
├── assets/          # Images and static files
├── components/      # Shared components (NoteCard, Nav)
├── data/            # Notes data
├── pages/           # Route-level pages
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Notes.jsx
│   ├── NoteDetail.jsx
│   └── About.jsx
└── projects/        # Individual project case studies
    ├── FileCloud.jsx
    ├── MembersOnly.jsx
    ├── Blog.jsx
    └── Waldo.jsx
```

## Design System

Consistent design language across all pages:

- **Serif headings** — Lora for titles and body prose
- **Mono labels** — DM Mono for eyebrows, dates, tags, and metadata
- **Accent color** — `#10b981` (emerald green) for tags, hover states, and list markers
- **CSS variables** — `--text-main`, `--text-muted`, `--border-color`, `--bg-subtle` — all auto-adapt to light and dark mode

## Running Locally

```bash
git clone https://github.com/mansuur-iman/dev-portfolio
cd dev-portfolio
npm install
npm run dev
```

## Contact

- **Email** — mansuriman18@gmail.com
- **LinkedIn** — [mansur-iman-550588370](https://www.linkedin.com/in/mansur-iman-550588370/)
- **X** — [@mansuur_iman](https://x.com/mansuur_iman)
