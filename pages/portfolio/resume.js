// import Link from "next/link";
import styles from "./resume.module.css";
export default function Resume() {
  // get rid of all the Li's and do a mapping array
  return (
    <>
      <div>
        <h1>Profesional Skills and Expereince</h1>

        <div className={styles.cornerRibbon}>
          <div className={styles.cornerRibbon__inner}>RIBBON</div>
        </div>

        <h2>About Me</h2>
        <p>im great its coo to be me sometimes blah blah blah blah blah blah</p>
        <h2>Coding Technologies</h2>
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
          <li>JavaScript</li>s<li>JavaScript</li>
        </ul>
        <h2>UI/UX Technologies</h2>
        <ul>
          <li>figma</li>
          <li>figma</li>
          <li>figma</li>
        </ul>
        <h2>Professional Experience</h2>
        <ul>
          <li>Revature</li>
          <li>CPCO</li>
        </ul>
      </div>
    </>
  );
}
