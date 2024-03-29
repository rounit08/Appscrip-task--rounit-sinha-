import { Roboto } from "next/font/google";
import styles from "./Card.module.css";
import HeartIcon from "@/assets/icons/heart.png";
import Image from "next/image";
const robotoBold = Roboto({ subsets: ["latin"], weight: "700" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

interface ICardProps {
  imageUrl: string;
  title: string;
}
const Card = ({ imageUrl, title }: ICardProps) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={imageUrl}
        alt="card__image"
        height={399}
        width={300}
      />
      <div className={styles.description}>
        <div className={styles.left}>
          <h1 className={robotoBold.className}>{title}</h1>
          <p className={roboto.className}>
            <span>Sign in</span> or Create an account to see pricing
          </p>
        </div>
        <div className={styles.right}>
          <Image src={HeartIcon} alt="heartIcon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
