import { Roboto } from "next/font/google";
import styles from "./Spotlight.module.css";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Spotlight = () => {
  return (
    <section className={styles.spotlight}>
      <h1 className={roboto.className}>DISCOVER OUR PRODUCTS</h1>
      <p className={roboto.className}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </section>
  );
};

export default Spotlight;
