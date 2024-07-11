import Image from "next/image";
// import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.homeTitle}>
        <h1 className="">Hello!</h1>
        <h1 className="">I'm Alex,</h1>
        <h1 className="">Frontend Developer & UI/UX Designer</h1>
      </div>

      <div className={styles.homeSmallText}>
        Frontend Developer: React, JavaScript, TypeScript, HTML, Ruby on Rails, Java,
<<<<<<< HEAD
        Figma, CSS
=======
        Figma, CSS, Kotlin, Next.js, jQuery, PostgreSQL
>>>>>>> merge_branch
      </div>
    </div>
  );
}
