import styles from "./layout.module.css";
export default function NavBarVertical() {
  return (
    <>
      <div id={styles.navbar}>
        <a href="#books">Books</a>
        <a href="#quizzes">Quizzes</a>
        <a href="#snippets">Snippets</a>
        <a href="#tools">Tools</a>
        <a href="#stringfunctions">String Functions</a>
      </div>

      <div id={styles.container}>
        <h1>here must be title</h1>
        <p>Here must be your content</p>
      </div>
    </>
  );
}
