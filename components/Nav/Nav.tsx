import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navLinks } from "../../src/config";
import styles from "./Nav.module.css";
import Menu from "../menu/Menu";

const Nav = ({ scrollToRef, refs }: { scrollToRef: any; refs: any }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 770) {
        setIsMobileMenuOpen(true);
      } else {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Active section detection using Intersection Observer
  useEffect(() => {
    const sections = [
      { ref: refs.aboutRef, id: "#about" },
      { ref: refs.experienceRef, id: "#jobs" },
      { ref: refs.projectsRef, id: "#projects" },
      { ref: refs.contactRef, id: "#contact" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = sections.find(
            (s) => s.ref.current === entry.target
          )?.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  const handleScrollToSection = (url: any) => {
    switch (url) {
      case "#about":
        scrollToRef(refs.aboutRef);
        break;
      case "#jobs":
        scrollToRef(refs.experienceRef);
        break;
      case "#projects":
        scrollToRef(refs.projectsRef);
        break;
      case "#contact":
        scrollToRef(refs.contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <a href="/" className={styles.LogoLink}>
          Ayush Dodia
        </a>
        {!isMobileMenuOpen ? (
          <div className={styles.NavLinksContainer}>
            <ol className={styles.NavList}>
              {navLinks.map(({ url, name }, i) => (
                <li key={i} className={styles.NavListItem}>
                  <a
                    href={url}
                    className={`${styles.NavLink} ${
                      activeSection === url ? styles.NavLinkActive : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToSection(url);
                    }}
                  >
                    <span
                      style={{
                        color: "var(--green)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>{" "}
                    {name}
                  </a>
                </li>
              ))}
            </ol>
            <div>
              <a
                href="resume.pdf"
                target="_blank"
                className={styles.ResumeButton}
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        ) : (
          <div>
            <Menu handleScrollToSection={handleScrollToSection} />
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
