import { Roboto } from "next/font/google";
import styles from "./Navbar.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={roboto.className}>SHOP</div>
      <div className={roboto.className}>SKILLS</div>
      <div className={roboto.className}>STORIES</div>
      <div className={roboto.className}>ABOUT</div>
      <div className={roboto.className}>CONTACT US</div>
    </nav>
  );
};

export default Navbar;
