import styles from "./Menu.module.css";

interface IMenuProps {
  handleOnClick: () => void;
  isSidebar: boolean;
}

const Menu = ({ handleOnClick, isSidebar }: IMenuProps) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuLeft}>
        <p>3425 ITEMS</p>
        <div role="button" className={styles.filter} onClick={handleOnClick}>
          {isSidebar && isSidebar ? "Hide Filter" : "Show Filter"}
        </div>
      </div>
      <div>
        <p>RECOMMENDED v</p>
      </div>
    </div>
  );
};

export default Menu;
