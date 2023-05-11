import Link from "next/link";
import Image from "next/image";

import styles from "../layout.module.css";
import { useRouter } from "next/router";

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
          height={180}
          width={180}
        />
      </div>
      <ul className={styles.sidebarList}>
        <li onClick={(e) => handleClick(e, "/")}>UI/UX Designs</li>

        <li onClick={(e) => handleClick(e, "/")}>
          <Link href="/resume/resume">Apps tour</Link>
        </li>

        <li onClick={(e) => handleClick(e, "/")}>
          <Link href="/resume/resume">Skills</Link>
        </li>

        <li onClick={(e) => handleClick(e, "/resume/resume")}>
          <Link href="/resume/resume">Resume</Link>
        </li>

        <li onClick={(e) => handleClick(e, "/resume/resume")}>
          <Link href="/resume/resume">Contact Me</Link>
        </li>

        <li onClick={(e) => handleClick(e, "/resume/resume")}>
          <Link href="/">Home</Link>
        </li>

        <li onClick={(e) => handleClick(e, "/")}>
          <Link href="/resume/resume">% & symbols</Link>
        </li>
      </ul>
    </div>
  );
}
