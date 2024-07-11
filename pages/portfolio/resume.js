import Link from "next/link";
import styles from "./resume.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function Resume() {
  // get rid of all the Li's and do a mapping array public/images/Alexander_Abrams_FS.pdf
  return (
    <>
      <div className={styles.container}>
        <div className={styles.starContainer}>
          <a href="/images/Alexander_Abrams_FS.pdf" download="Alexander-Abrams-Resume">
            <Image
            priority
            src="/images/pdf_download.png"
            alt="my-logo"
            height={200}
            width={200}
            />
          </a>
        </div>


      <h1 className={styles.header}>Profesional Skills and Experience</h1>

      <div className={styles.resumeContent}>
        <div className={styles.aboutMe}>
        <h2>About Me</h2>
          <p>
            Highly motivated software developer with 4+ years in full-stack development and UI/UX design. Skilled in designing and deploying
            web and mobile applications using technologies like Next.js, TypeScript, React, Kotlin, and GraphQL. Strong collaborator with experience
            in cross-functional teams, committed to continuous learning and innovation. Seeking to drive quality solutions in a forward-thinking team.
         </p>
        </div>


        <div className={styles.codingTechs}>
        <h2>Coding Technologies</h2>
        <p>JavaScript, TypeScript, React, React Native, PostgreSQL, Ruby on Rails, Kotlin, Java, HTML, CSS, Ruby, Ruby on Rails  </p>
        </div>

        <div className={styles.uiuxTechs}>
          <h2>UI/UX Technologies</h2>
          <ul>
            <p>Figma, Adobe XD, Sketch</p>
          </ul>
        </div>

        <div className={styles.workExp}>
          <h2>Professional Experience</h2>
          <ul>
          <div>

          </div>
          <h3>Platinum Digital<span>August 2023 - Present</span></h3>
          <jobtitle>Junior Developer</jobtitle>
          <ul>
              <li>
                Spearheaded the development and design of a dynamic
                website from inception to deployment, leveraging
                cutting-edge technologies including Next.js, TypeScript,
                React, Kotlin, and GraphQL.
              </li>
              <li>
                Seamlessly integrated API endpoints to enhance
                functionality and optimize user experience.
              </li>
              <li>
                Implemented secure payment processing through Stripe
                integration, ensuring seamless transactions and
                safeguarding user data.
              </li>
              <li>
                Enhanced location-based services by integrating the Seatics
                maps API, providing users with intuitive navigation and
                personalized experiences.
              </li>
              <li>
                Led the UI/UX rebrand of the entire website, conducting user studies and market research to inform
                design decisions and improve overall user satisfaction.
              </li>
              <li>
                Coordinated our SEO by improving organic search rankings, increasing website traffic, and driving
                conversion rates through strategic SEO initiatives and technical optimizations.
              </li>
              <li>
                Collaborated closely with cross-functional teams to identify requirements, streamline processes,
                and deliver high-quality solutions within tight deadlines.
              </li>
              <li>
                Proactively engaged in ongoing research and learning to stay abreast of industry trends and
                emerging technologies, driving continuous innovation and improvement.
              </li>
          </ul>
<div className={styles.horizontalLine}></div>
            <h3>Revature LLC.<span>October 2022 - August 2023</span></h3>
            <jobtitle>Junior Developer</jobtitle>
            <ul>
              <li>
                Designed health insurance software utilizing PostgreSQL, Java, JavaScript, Angular, HTML, CSS, and TypeScript technologies.
              </li>
              <li>
                Collaborated on stages of systems development lifecycle from requirement gathering to production releases.
              </li>
              <li>
                Participated in cross-functional projects while working in lean development environments.
              </li>
            </ul>
<div className={styles.horizontalLine}></div>
            <h3>Freelance Web Developer<span>August 2019 - October 2022</span></h3>
            <jobtitle>Junior Developer</jobtitle>
            <ul>
              <li>
                Designed, implemented, and monitored web pages, plugins, and functionality utilizing JavaScript, HTML, CSS, Ruby on Rails, PostgreSQL, and React technologies.
              </li>
              <li>
                Planned website development, converting necessary data streams into SQL relational databases using MVC structures.
              </li>
              <li>
                Implemented scripted tests for Rails backend code using the Rspec framework.
              </li>
            </ul>

          </ul>
        </div>

        </div>
      </div>
    </>
  );
}
