import Link from "next/link";
import styles from "./resume.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function Resume() {
  // get rid of all the Li's and do a mapping array
  return (
    <>
      <div className={styles.container}>
        <div className={styles.starContainer}>
          <a href="/images/Alexander_Abrams_Dev_Resume.pdf" download="cv">
            <div>Download Resume PDF</div>
            <FaStar className={styles.star} size={210}></FaStar>
          </a>
        </div>

        <h1 className={styles.header}>Profesional Skills and Experience</h1>

        <div className={styles.aboutMe}>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>


        <div className={styles.codingTechs}>
        <h2>Coding Technologies</h2>
        <p>JavaScript, React, React Native, PostgreSQL, Ruby on Rails, Kotlin, Java, HTML, CSS </p>
        </div>

        <div className={styles.uiuxTechs}>
          <h2>UI/UX Technologies</h2>
          <ul>
            <li>figma</li>
            <li>figma</li>
            <li>figma</li>
          </ul>
        </div>

        <div className={styles.workExp}>
          <h2>Professional Experience</h2>
          <ul>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <h2>Professional Experience</h2>
        <ul>
          <li>Revature</li>
          <li>CPCO</li>
        </ul>
      </div>
    </>
  );
}
