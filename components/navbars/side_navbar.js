import Link from "next/link";
import Image from "next/image";

import styles from "../layout.module.css";
import { useRouter } from "next/router";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function SideNavBar() {
  const router = useRouter();
  const handleClick = (e, path) => {
    e.preventDefault();
    // router.push("/resume/resume");
    router.push(path);
  };

  //state
  return (
    <div className={styles.sidebar}>
      <div className="logo">
        <Image
          priority
          src="/images/Cat_August_2010-4.jpg"
          alt="my-logo"
          height={180}
          width={180}
        />
      </div>
      <ul className={styles.sidebarList}>
        <li onClick={(e) => handleClick(e, "/portfolio/ui_ux")}>
          UI/UX Designs
        </li>

        <li onClick={(e) => handleClick(e, "/portfolio/tour")}>Apps tour</li>

        <li onClick={(e) => handleClick(e, "/portfolio/skills")}>Skills</li>

        <li onClick={(e) => handleClick(e, "/portfolio/resume")}>Resume</li>

        <li onClick={(e) => handleClick(e, "/portfolio/contact")}>
          Contact Me
        </li>

        <li onClick={(e) => handleClick(e, "/")}>Home</li>

        <div className={styles.socialLinks}>
          <li>
            <Link
              href="https://www.linkedin.com/in/alexander-abrams-309615a3/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn size={30} />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Alex-Abrams"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={30} />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
