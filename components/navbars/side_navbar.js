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
          height={144}
          width={144}
        />
      </div>
      <ul>
        <li>Should be its own like |NavBar|</li>
        <li>thing 1</li>
        <li>thing 1</li>
        <li>thing 1</li>
        <li>thing 1</li>
      </ul>
    </div>
  );
}
