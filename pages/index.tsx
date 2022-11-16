import styles from "../styles/Home.module.css";
import Btn from "./components/login-btn";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Btn />
      </main>
    </div>
  );
}
