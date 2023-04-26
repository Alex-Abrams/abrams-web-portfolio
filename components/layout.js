import styles from "./layout.module.css";
// import NavBarVertical from "./navbar";
import Image from "next/image";
import SideNavBar from './navbars/side_navbar';

// import styles from "../components/test_layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.sideContainer}>
      {/*
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
      */}
      <SideNavBar />
        <main className={styles.content}>{children}</main>
      </div>
    </>
  );
}
