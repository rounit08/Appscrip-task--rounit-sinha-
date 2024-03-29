import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>SHOP</div>
      <div>SKILLS</div>
      <div>STORIES</div>
      <div>ABOUT</div>
      <div>CONTACT US</div>
    </nav>
  );
};

export default Navbar;
