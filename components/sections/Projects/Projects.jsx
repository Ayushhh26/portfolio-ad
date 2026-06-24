// components/Projects.js
import React, { useMemo, useState } from "react";
import styles from "./Projects.module.css";
import projects from "./projectsConfig";
import GithubIcon from "../../../public/assets/svgs/GithubIcon";

const projectFilters = [
  "Featured",
  "All",
  "AI / NLP",
  "Data / Cloud",
  "Full Stack",
  "Realtime",
  "Systems",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Featured");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    if (activeFilter === "Featured") {
      return projects.filter((project) => project.featured);
    }

    return projects.filter((project) =>
      project.categories?.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.head}>Projects</h2>
        <span className={styles.projectCount}>{filteredProjects.length}</span>
      </div>
      <div className={styles.filterBar} aria-label="Project categories">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterButton} ${
              activeFilter === filter ? styles.filterButtonActive : ""
            }`}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div key={project.name} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <a
                className={styles.imageA}
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={project.image} alt={project.name} />
              </a>
            </div>
            <div className={styles.projectDetails}>
              <div className={styles.projectTitle}>
                <h4>{project.name}</h4>
                <div className={styles.projectTitlesLine}></div>
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`Open ${project.name} on GitHub`}
                >
                  <GithubIcon />
                </a>
              </div>
              <div className={styles.projectTags}>
                {project.tags.join(" - ")}
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

{
  /* <ul>
        <li className={styles.projectList}>
          <div className={styles.projectContent}>
            <div>
              <p>Featured Project</p>
              <h3>GoPulse</h3>
            </div>
          </div>
          <div className={styles.projectImage}>
            <a
              href="/gopulse.png"
              rel="noopener noreferrer"
              target="_blank"
            ><img src="/gopulse.png" alt="" /></a>
          </div>
        </li>
        <li></li>
      </ul> */
}
