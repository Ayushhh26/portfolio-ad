import React from "react";
import styles from "./Contact.module.css";
import MailIcon from "../../../public/assets/svgs/MailIcon";
import Linkedin from "../../../public/assets/svgs/Linkedin";
import GithubIcon from "../../../public/assets/svgs/GithubIcon";

const Contact = () => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.head}>What's Next?</h1>
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          <div className={styles.descText}>
          <h3 className={styles.contactText}>I am actively looking for SDE/AI/ML internships<span className={styles.contactDot}>.</span></h3>
          </div>
          <div className={styles.ContactDiv}>
            
            <h4 className={styles.contactText}>
              Contact<span className={styles.contactDot}>.</span>
            </h4>
          </div>
          <div className={styles.desc}>

            
 
            <p className={styles.descText}>
              Shoot me an email if you want to connect! You can also find me on{" "}
              <a
                href="https://www.linkedin.com/in/ayush-dodia/"
                className={styles.contactDot}
              >
                Linkedin
              </a>{" "}
              or{" "}
              <a href="https://x.com/AyushDodia26" className={styles.contactDot}>
                Twitter
              </a>{" "}
              if that's more your speed.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <a href="mailto:ayushdrn@gmail.com">
              <div className={styles.contactBox}>
                <MailIcon />
                <span>ayushdrn@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
        {/* <div className="bg-white flex items-center justify-items-start">
          <ul className="text-base font-sans text-left font-base">
            <li className="text-linkcolor transition ease-in-out hover:bg-linkhover hover:rounded-lg pl-2 pr-8 py-2 text-sm font-medium font-sans">
              <a
                href="mailto:kavishshah30@gmail.com"
                className="grid grid-cols-2 items-center"
                target="_blank"
                rel="noreferrer"
              >
                <MailIcon />
                <p className="-ml-8">Mail</p>
              </a>
            </li>
            <li className="text-linkcolor transition ease-in-out hover:bg-linkhover hover:rounded-lg pl-2 pr-8 py-2 text-sm font-medium font-sans">
              <a
                href="https://www.linkedin.com/in/kavishshah30/"
                className="grid grid-cols-2 items-center"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
                <p className="-ml-8">Linkedin</p>
              </a>
            </li>
            <li className="text-linkcolor transition ease-in-out hover:bg-linkhover hover:rounded-lg pl-2 pr-8 py-2 text-sm font-medium font-sans">
              <a
                href="https://github.com/kavishshahh"
                className="grid grid-cols-2 items-center"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                <p className="ml-8">Github</p>
              </a>
            </li>
          </ul>
        </div> */}
      </section>
    </>
  );
};

export default Contact;
