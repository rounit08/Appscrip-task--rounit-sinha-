import ItemList from "./components/ItemList";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ItemList />
    </div>
  );
};

export default Sidebar;
