import Card from "@/components/Card";
import Menu from "./components/Menu/Menu";
import Spotlight from "./components/Spotlight";
import styles from "./Dashboard.module.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebar((isSidebar) => !isSidebar);
  };

  return (
    <>
      <Spotlight />
      <Menu handleOnClick={toggleSidebar} isSidebar={isSidebar} />

      <section className={styles.content}>
        {isSidebar && <Sidebar />}

        <section
          style={{ flex: isSidebar ? 0.8 : 1 }}
          className={styles.cardSection}
        >
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
      </section>
    </>
  );
};

export default Dashboard;
