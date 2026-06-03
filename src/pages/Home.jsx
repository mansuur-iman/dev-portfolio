import { useState } from "react";
import system from "../assets/system.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

import styles from "./Home.module.css";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, i) => (
          <div key={i} className={styles.carouselSlide}>
            <img src={img} alt={`slide ${i + 1}`} />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            className={`${styles.carouselBtn} ${styles.prev}`}
            onClick={prev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className={`${styles.carouselBtn} ${styles.next}`}
            onClick={next}
            aria-label="Next slide"
          >
            ›
          </button>
          <div className={styles.carouselDots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.carouselDot} ${i === current ? styles.activeDot : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const steps = [
    {
      title: "Understand the problem",
      description: "Clarify requirements and define what success looks like.",
    },
    {
      title: "Design the system",
      description: "Map components, data flows, and boundaries before coding.",
    },
    {
      title: "Build clean interfaces",
      description:
        "APIs, UIs, and data models that are consistent and easy to extend.",
    },
    {
      title: "Handle edge cases",
      description:
        "Validation, error handling, auth, and security from the start.",
    },
    {
      title: "Test and ship",
      description: "Verify behavior, deploy confidently, and document clearly.",
    },
    {
      title: "Iterate and improve",
      description: "Refine as requirements evolve and the system grows.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "messagingApp",
      tag: "Fullstack",
      description:
        "Real-time fullstack messaging with friend requests, authentication, and a REST API. Built with Node.js, Express, Prisma, and PostgreSQL — covering everything from database design to deployed backend.",
      stack: [
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "REST API",
        "JWT",
        "React",
        "Tanstack Query",
        "Zoustand",
        "Zod",
        "styled-components",
        "typescript",
      ],
      images: [img1, img2, img3],
    },

    {
      id: 2,
      title: "Blog",
      tag: "Fullstack",
      description:
        "A full-stack blogging platform with complete CRUD functionality and user authentication. Users can create, edit, and delete posts — showcasing how content-driven applications are structured, secured, and managed end to end.",
      stack: [
        "Node.js",
        "Express",
        "REST API",
        "JWT",
        "bcrypt",
        "React",
        "express-validator",
        "css modules",
        "Vite",
        "React Router",
      ],
      images: [blog1, blog2, blog3],
    },
    {
      id: 3,
      title: "Where's Waldo",
      tag: "Fullstack Game",
      description:
        "An interactive browser-based game where users search for hidden characters in large images under time pressure. Includes click-based coordinate detection, validation logic, and a leaderboard system to track performance.",
      stack: [
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "JWT",
        "bcrypt",
        "Express Validator",
        "React",
        "React Router",
        "CSS Modules",
        "Vite",
      ],
      images: [game1, game2, game3],
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>Software Engineer</p>
        <h1 className={styles.hero}>Building reliable software, end to end.</h1>
        <p className={styles.lead}>
          I'm a software engineer with strong backend foundations and fullstack
          experience — designing systems, building APIs, and shipping features
          across the entire stack.
        </p>
        <p className={styles.lead}>
          I care about writing clean, maintainable code and building software
          that scales. I'm currently growing toward distributed systems, AI
          integration, and machine learning.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>What I help teams do</h2>
        <ul className={styles.list}>
          <li>Design and build scalable backend systems and REST APIs</li>
          <li>Write clean, well-structured frontend interfaces</li>
          <li>Model databases and manage complex data relationships</li>
          <li>Implement authentication, security, and access control</li>
          <li>Debug and improve existing codebases</li>
          <li>Collaborate with frontend and product teams to ship features</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>How I approach systems</h2>
        <p className={styles.body}>
          I break problems down before writing code — understanding
          requirements, mapping data flows, and designing clean interfaces
          between components. I write software I'd be comfortable handing to
          someone else.
        </p>

        <div className={styles.systemImage}>
          <img src={system} alt="System design flow diagram" />
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepTrack}>
                <div className={styles.stepDot}>
                  <div className={styles.stepDotInner} />
                </div>
                {index < steps.length - 1 && (
                  <div className={styles.stepLine} />
                )}
              </div>
              <div className={styles.stepContent}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Selected work</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <Carousel slides={project.images} />
              <div className={styles.projectMeta}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectTitle}>{project.title}</span>
                  <span className={styles.projectTag}>{project.tag}</span>
                </div>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectStack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.stackPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Let's connect</h2>
        <p className={styles.body}>
          I'm open to software engineering internships and junior roles. If
          you're building something interesting and need someone who can work
          across the stack, I'd love to talk.
        </p>
        <a href="mailto:mansuriman18@gmail.com" className={styles.ctaLink}>
          mansuriman18@gmail.com →
        </a>
      </section>
    </div>
  );
}
