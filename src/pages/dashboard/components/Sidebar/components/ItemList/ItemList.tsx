import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = () => {
  return (
    <div className={styles.itemlist}>
      <Item name="IDEAL FOR" />
      <Item name="OCCASION" />
      <Item name="WORK" />
      <Item name="FABRIC" />
      <Item name="SEGMENT" />
      <Item name="SUITABLE FOR" />
      <Item name="RAW MATERIALS" />
      <Item name="PATTERN" />
    </div>
  );
};

export default ItemList;
