import { Roboto } from "next/font/google";
import styles from "./Menu.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });
const robotoLight = Roboto({ subsets: ["latin"], weight: "400" });

interface IMenuProps {
  handleOnClick: () => void;
  isSidebar: boolean;
}

const Menu = ({ handleOnClick, isSidebar }: IMenuProps) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuLeft}>
        <p className={roboto.className}>3425 ITEMS</p>
        <div role="button" className={styles.filter} onClick={handleOnClick}>
          <p>{isSidebar ? "Hide Filter" : "Show Filter"}</p>
        </div>
      </div>
      <div>
        <p className={roboto.className}>
          <select
            aria-label="recommended"
            className={`${styles.select} ${robotoLight.className}`}
          >
            <option value="item1">RECOMMENDED</option>
            <option value="item2">NEWEST FIRST</option>
            <option value="item3">POPULAR</option>
            <option value="item4">PRICE: HIGH TO LOW</option>
            <option value="item4">PRICE: LOW TO HIGH</option>
          </select>
        </p>
      </div>
    </div>
  );
};

export default Menu;
