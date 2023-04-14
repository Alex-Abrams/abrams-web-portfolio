import styles from "./layout.module.css";
import NavBarVertical from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavBarVertical />
      <div className={styles.globo_container}>
        <main>{children}</main>
      </div>
    </>
  );
}
