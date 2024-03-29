import Card from "@/components/Card";
import Menu from "./components/Menu/Menu";
import Spotlight from "./components/Spotlight";
import styles from "./Dashboard.module.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { Roboto } from "next/font/google";
import type { IProduct } from "./types";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

interface IProductsProps {
  products: IProduct[];
}

const Dashboard = ({ products = [] }: IProductsProps) => {
  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebar((isSidebar) => !isSidebar);
  };

  const isProductsEmpty = !products || products.length < 1;

  return (
    <>
      <Spotlight />
      <Menu handleOnClick={toggleSidebar} isSidebar={isSidebar} />

      <section className={styles.content}>
        {isSidebar && <Sidebar />}
        <div>
          <p className={`${roboto.className} ${styles.newprod}`}>NEW PRODUCT</p>

          <section
            style={{ flex: isSidebar ? 0.8 : 1 }}
            className={styles.cardSection}
          >
            {products.map((product) => (
              <div key={product.id}>
                <Card imageUrl={product.image} title={product.title} />
              </div>
            ))}
            {isProductsEmpty && <div>NODATA</div>}
          </section>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
