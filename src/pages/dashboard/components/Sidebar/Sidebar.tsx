import { Roboto } from "next/font/google";
import ItemList from "./components/ItemList";
import styles from "./Sidebar.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.custom}>
        <input type="checkbox" className={styles.checkbox} />
        <label className={roboto.className}>CUSTOMIZABLE</label>
      </div>
      <ItemList />
    </div>
  );
};

export default Sidebar;
