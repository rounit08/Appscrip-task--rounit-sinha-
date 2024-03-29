import Card from "@/components/Card";
import Menu from "./components/Menu/Menu";
import Spotlight from "./components/Spotlight";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <Spotlight />
      <Menu />
      <section className={styles.cardSection}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default Dashboard;
