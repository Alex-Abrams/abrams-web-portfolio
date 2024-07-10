import Link from "next/link";
import styles from "../components/test_layout.module.css";
import Image from "next/image";

export default function TestLayout() {
  return (
    <div className={styles.sideContainer}>
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
          <li>thing 1zz</li>
          <li>thing 1</li>
          <li>thing 1</li>
          <li>thing 1</li>
          <li>thing 1</li>
        </ul>
      </div>
      <div className={styles.content}>content</div>
    </div>
  );
}
