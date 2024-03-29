import { Inter, Roboto } from "next/font/google";
import styles from "./Header.module.css";
import headerTop from "@/assets/icons/topheader.png";
import headerLogo from "@/assets/icons/Vectorlogo.png";

import searchIcon from "@/assets/icons/search-normal.png";
import heartIcon from "@/assets/icons/heart.png";
import bagIcon from "@/assets/icons/shopping-bag.png";
import profileIcon from "@/assets/icons/profile.png";
import dropdownIcon from "@/assets/icons/arrow-left.png";

import Image from "next/image";
const inter = Inter({ subsets: ["latin"], weight: "800" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topContent}>
          <Image src={headerTop} alt="logoTop" />
          <p className={roboto.className}>Loreum ipsum dolor</p>
        </div>
        <div className={styles.topContent}>
          <Image src={headerTop} alt="logoTop" />
          <p className={roboto.className}>Loreum ipsum dolor</p>
        </div>
        <div className={styles.topContent}>
          <Image src={headerTop} alt="logoTop" />
          <p className={roboto.className}>Loreum ipsum dolor</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div style={{ display: "flex", gap: 10 }}>
          <span className={styles.hamMenu}>☰</span>
          <Image src={headerLogo} alt="logo" />
        </div>

        <h1 className={inter.className}>LOGO</h1>
        <div className={styles.iconContainer}>
          <div>
            <Image src={searchIcon} alt="logo" />
          </div>
          <div>
            <Image src={heartIcon} alt="logo" />
          </div>
          <div>
            <Image src={bagIcon} alt="logo" />
          </div>
          <div>
            <Image src={profileIcon} alt="logo" />
          </div>
          <div className={styles.lang}>
            <p className={inter.className}>ENG</p>
            <Image src={dropdownIcon} alt="logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
