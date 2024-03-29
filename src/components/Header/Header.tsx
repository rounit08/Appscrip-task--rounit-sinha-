import { Inter, Roboto } from "next/font/google";
import styles from "./Header.module.css";

const inter = Inter({ subsets: ["latin"], weight: "800" });

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.top}>
        <p>Loreum ipsum dolor</p>
        <p>Loreum ipsum dolor</p>
        <p>Loreum ipsum dolor</p>
      </div>
      <div className={styles.bottom}>
        <img src="./././." alt="logo" />
        <h1 className={inter.className}>LOGO</h1>
        <div className={styles.iconContainer}>
          <div>Se</div>
          <div>He</div>
          <div>Bg</div>
          <div>pro</div>
          <div>Lang </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
