import Image from "next/image";
// import { Inter } from "next/font/google";
import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex font-sans">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/test_layout">test_layout</Link>
      <div
        className="h-56 grid grid-cols-4 gap-10 content-center ..."
        id={styles.grid}
      >
        <div className="border-4 border-purple-500/100">01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
      </div>

      {/* <div id={styles.navbar}>
        <a href="#books">Books</a>
        <a href="#quizzes">Quizzes</a>
        <a href="#snippets">Snippets</a>
        <a href="#tools">Tools</a>
        <a href="#stringfunctions">String Functions</a>
      </div>

      <div id={styles.container}>
        <h1>here must be title</h1>
        <p>Here must be your content</p>
      </div> */}

      {/* <div id="navbar">
        <a href="#books">Books</a>
        <a href="#quizzes">Quizzes</a>
        <a href="#snippets">Snippets</a>
        <a href="#tools">Tools</a>
        <a href="#stringfunctions">String Functions</a>
      </div>

      <div id="container">
        <h1>here must be title</h1>
        <p>Here must be your content</p>
      </div> */}
    </div>
  );
}
