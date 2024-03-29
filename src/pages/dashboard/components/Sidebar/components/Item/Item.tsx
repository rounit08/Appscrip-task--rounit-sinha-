import { useState } from "react";
import styles from "./Item.module.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const robotoBold = Roboto({ subsets: ["latin"], weight: "700" });

interface ItemProps {
  name: string;
}
const Item = ({ name }: ItemProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h1 className={robotoBold.className}>{name}</h1>
        <select aria-label={name} id="drop" className={styles.select}>
          <option value="item1" className={roboto.className}>
            ALL
          </option>
          <option value="item2">item2</option>
          <option value="item3">item3</option>
          <option value="item4">item4</option>
        </select>
      </div>
      <div className={styles.dropdown} onClick={toggleDropdown}></div>
    </div>
  );
};

export default Item;
