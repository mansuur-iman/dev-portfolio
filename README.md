# Mansur Iman — Full-Stack Engineering Portfolio

A personal portfolio built with React and React Router. Designed to showcase data-driven backend architectures, comprehensive case studies, technical writing, and holistic system design thinking.

---

## Tech Stack

- **Frontend Core:** React (Functional Components, Hooks)
- **Routing Engine:** React Router (Dynamic Layouts, Semantic Client-Side Nested Renders)
- **Styling Architecture:** CSS Modules (Scoped, Co-located Styles) paired with modern `color-mix()` CSS features
- **Build Pipeline:** Vite (HMR Dev Server & Optimized Asset Bundling)

---

## Information Architecture

| Route           | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `/`             | **Home** — Core introduction, architecture strategy, and selected work.  |
| `/projects`     | **Projects Matrix** — Grid of scalable full-stack case studies.          |
| `/projects/:id` | **Case Study Details** — Technical deep dives into specific codebases.   |
| `/notes`        | **Technical Notes** — Writing down engineering lessons learned.          |
| `/notes/:slug`  | **Note Detail View** — Markdown-style technical reading container.       |
| `/about`        | **Background** — Professional execution principles and contact routes.   |

---

## Featured Engineering Case Studies

### ChatSpaces — Dynamic Messaging Ecosystem
- **Overview:** A secure full-stack social platform using dual-pane exploration matrices, secure session authorization, and strict relational constraints.
- **Engine:** TypeScript, React, Node.js, Express, Prisma ORM, PostgreSQL, Zustand, TanStack Query.
- **Key Focus:** Multi-tab optimization (Chats vs. People), unread count triggers, and self-messaging note systems.

### FileCloud — Secure Cloud Storage Platform
- **Overview:** A file and folder asset management hub implementing complex structural trees, deep complete data isolation, and shareable asset links.
- **Engine:** Node.js, Express, PostgreSQL, Prisma ORM, Multer.
- **Key Focus:** Relational constraint modeling and nested resource ownership management.

### Where's Waldo — High-Integrity Search Architecture
- **Overview:** A photo-hunt application where the backend acts as the sole source of truth for coordinate verification.
- **Engine:** React, Node.js, Express, PostgreSQL, Prisma ORM.
- **Key Focus:** Viewport-agnostic coordinate normalization formulas to support multi-device responsive scaling.

### MembersOnly — RBAC Messaged Workspace
- **Overview:** A server-rendered anonymous discussion board implementing highly granular Role-Based Access Control hierarchies.
- **Engine:** Node.js, Express, PostgreSQL, Passport.js, EJS Templates.
- **Key Focus:** Stateful cookie session preservation and secure route encryption.

### Blog — Full-Stack Publishing Application
- **Overview:** A clean RESTful blog ecosystem supporting complete CRUD capabilities and structural ownership authorization.
- **Engine:** Node.js, Express, PostgreSQL, Prisma ORM, JWT Auth.
- **Key Focus:** Standard database normalization patterns and protected endpoint access maps.

---

## Repository Structure

```directory
src/
├── assets/           # Dynamic project graphics, schema diagrams, and wireframes
├── components/       # Shared presentation nodes (Layout, ProjectCard, Nav)
├── data/             # Scoped technical data structures (Notes Markdown records)
├── pages/            # View layout dashboards (Home, Projects, Notes, About)
├── projects/         # Individual production-grade case study documentation
│   ├── Blog.jsx
│   ├── FileCloud.jsx
│   ├── MembersOnly.jsx
│   ├── MessagingApp.jsx
│   └── Waldo.jsx
├── App.jsx           # Central client routing configurations
└── index.css         # Base system variable tokens and design constants
```

---

## Local Setup and Development

Ensure you have Node.js installed locally on your system.

```bash
# Clone the development workspace
git clone https://github.com/mansuur-iman/dev-portfolio

# Access the portfolio directory
cd dev-portfolio

# Install dependency configurations
npm install

# Initialize local HMR development environment
npm run dev
```
