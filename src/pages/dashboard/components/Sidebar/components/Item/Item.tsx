import { useState } from "react";
import styles from "./Item.module.css";

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
        <h1>{name}</h1>
        <select aria-label={name} id="drop" className={styles.select}>
          <option value="item1">ALL</option>
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
