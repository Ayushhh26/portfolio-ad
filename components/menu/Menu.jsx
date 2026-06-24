// components/Menu.js
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { navLinks } from "@/config";
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = (props) => {
  const { handleScrollToSection } = props;

  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className={styles.styledMenu}>
      <div ref={wrapperRef}>
        <button
          onClick={toggleMenu}
          className={styles.styledHamburgerButton}
          aria-label="Menu"
          ref={buttonRef}
        >
          <div className={styles.hamBox}>
            <div
              className={`${styles.hamBoxInner} ${
                menuOpen ? styles.hamBoxInnerOpen : styles.hamBoxInnerClose
              }`}
            />
          </div>
        </button>

        <aside
          className={`${styles.styledSidebar} ${
            menuOpen ? styles.styledSidebarOpen : styles.styledSidebarClose
          }`}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav className={styles.nav} ref={navRef}>
            {navLinks && (
              <ol className={styles.ol}>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i} className={styles.li}>
                    <Link
                      href={url}
                      onClick={(e) => {
                        setMenuOpen(false);
                        e.preventDefault();
                        handleScrollToSection(url);
                      }}
                      className={styles.a}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ol>
            )}
            <div className={styles.resumeLink}>
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ResumeButton}
              >
                Resume
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Menu;
