import styles from "./Menu.module.css";
const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuLeft}>
        <p>3425 ITEMS</p>
        <div role="button" className={styles.filter}>
        >  SHOW FILTER
        </div>
      </div>
      <div><p>RECOMMENDED </p> </div>
    </div>
  );
};

export default Menu;
