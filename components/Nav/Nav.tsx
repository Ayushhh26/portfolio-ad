import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navLinks } from "../../src/config";
import styles from "./Nav.module.css";
import Menu from "../menu/Menu";

const Nav = ({ scrollToRef, refs }: { scrollToRef: any; refs: any }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                    className={styles.NavLink}
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
