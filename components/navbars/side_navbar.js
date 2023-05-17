import Link from "next/link";
import Image from "next/image";

import styles from "../layout.module.css";
import { useRouter } from "next/router";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearchengin } from "@fortawesome/free-solid-svg-icons";
// import { faGitHub } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

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

        <li onClick={(e) => handleClick(e, "/portfolio/tour")}>
          {/* <Link href="/portfolio/resume">Apps tour</Link> */}
          Apps tour
        </li>

        <li onClick={(e) => handleClick(e, "/portfolio/skills")}>
          {/* <Link href="/portfolio/resume">Skills</Link> */}
          Skills
        </li>

        <li onClick={(e) => handleClick(e, "/portfolio/resume")}>
          {/* <Link href="/portfolio/resume">Resume</Link> */}
          Resume
        </li>

        <li onClick={(e) => handleClick(e, "/portfolio/contact")}>
          {/* <Link href="/portfolio/resume">Contact Me</Link> */}
          Contact Me
        </li>

        <li onClick={(e) => handleClick(e, "/")}>
          {/* <Link href="/">Home</Link> */}
          Home
        </li>

        <li onClick={(e) => handleClick(e, "/")}>
          <div className={styles.socialLinks}>
            <FaLinkedinIn size={30} />
            <FaGithub size={30} />
          </div>
        </li>
      </ul>
    </div>
  );
}
