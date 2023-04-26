import Link from "next/link";
import Image from "next/image";

import styles from "../layout.module.css";

export default function SideNavBar() {
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
      <ul>
        <li>Should be its own like |NavBar|</li>

        <li>UI/UX Designs</li>

        <li>Apps tour</li>

        <li>Skills</li>

        <li>
          <Link href="/resume/resume">Resume</Link>
        </li>

        <li>
        <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
