import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState("0");
  console.log("slectd", selectedJob);
  const [transformDirection, setTransformDirection] = useState("translateY");

  const jobs = [
    {
      id: 0,
      title: "Software Engineer Intern",
      company: "Attention.ad",
      date: "Jun. 2025 - Present",
      responsibilities: [
        "Led a 5-engineer team, delivering deploy-ready code and conducting weekly demos to leadership, improving project transparency and stakeholder feedback.",
        "Implemented end-to-end Twitter OAuth 2.0 login and user posting during software development, ensuring provider callback and refresh mechanisms were resilient, resulting in a 15% reduction in login-related issues",
        "Enhanced the image generation workflow (prompt templating, captioning, overlay composition) with React hooks, making the process 60% faster and reducing API costs by 40%",
        "Integrated Stripe payments with a straightforward transaction UI, resulting in a seamless payment process and increased user satisfaction",
        "Architected a production Node/Express + MongoDB platform featuring 30+ REST endpoints, achieving a 20% reduction in transaction processing time through optimized large-scale system design",
      ],
    },
    // {
    //   id: 0,
    //   title: "Machine Learning Intern",
    //   company: "Hands In Technology",
    //   date: "Jul 2023 - Sept 2023",
    //   responsibilities: [
    //     `Developed a Machine Learning model to filter out on trending political figures based on the historical data from 1938-2023 `,
    //     "Preprocessed the data and used N-gram model for prediction.",
    //   ],
    // },

  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setTransformDirection("translateX");
      } else {
        setTransformDirection("translateY");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.styledSection}>
      <section>
        <h2 className={styles.styledExp}>Experience</h2>
        <div className={styles.inner}>
          <div className={styles.tabsDiv}>
            {Object.keys(jobs).map((jobKey) => (
              <button
                key={jobKey}
                className={`${styles.styledButton} ${
                  selectedJob === jobKey ? styles.active : ""
                }`}
                onClick={() => setSelectedJob(jobKey)}
              >
                {jobs[jobKey].company}
              </button>
            ))}
            <div
              className={styles.selected}
              style={{
                transform: `${
                  transformDirection === "translateY"
                    ? `translateY(calc(${jobs[selectedJob].id} * var(--tab-height)))`
                    : `translateX(calc(${jobs[selectedJob].id} * var(--tab-width)))`
                }`,
              }}
            ></div>
          </div>
          <div>
            <div className={styles.styledInner}>
              <h3>
                <span>{jobs[selectedJob].title}</span>
                <span className={styles.company}>&nbsp;@&nbsp;</span>
                <a href="" className={styles.company}>
                  {jobs[selectedJob].company}
                </a>
              </h3>
              <p className={styles.date}>{jobs[selectedJob].date}</p>
              <div>
                <ul>
                  {jobs[selectedJob].responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
