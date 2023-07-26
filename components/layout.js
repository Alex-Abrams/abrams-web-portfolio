import styles from "./layout.module.css";
import Image from "next/image";
import SideNavBar from './navbars/side_navbar';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.sideContainer}>
      <SideNavBar className={styles.getSticky} />
        <main className={styles.content}>{children}</main>
      </div>
    </>
  );
}
