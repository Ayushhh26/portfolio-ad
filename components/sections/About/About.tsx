// components/About.js
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.styledSection}>
      <section>
        <div className={styles.styledAbout}>
          <div>
            <h2>About Me</h2>
          </div>
        </div>
        <div className={styles.inner}>
          <div>
            <div className={styles.styledP}>
              <p>
                Hey! I'm Ayush, I'm a Computer Science Masters Student at Rutgers University
                with a passion for coding and exploring new
                technologies.
              </p>

              <p>
                As I continue to explore new technologies and push the
                boundaries of what's possible on the web, I'm excited to embark
                on new challenges and contribute to groundbreaking projects that
                make a difference.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <div className={styles.styledText}>
              <ul className={styles.skills}>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Python</li>
                <li>Machine Learning</li>
                <li>Typescript</li>
              </ul>
            </div>
          </div>
          <div className={styles.aboutPic}>
            <div className={styles.wrapper}>
              <img
                src="/profile photo-Photoroom.png"
                alt="photo of ayush dodia"
                className={styles.wrapperimg}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
