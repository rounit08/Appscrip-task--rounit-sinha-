import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src="https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="card__image"
        height="399px"
        width="300px"
      />
      <div className={styles.description}>
        <div className={styles.left}>
          <h1>SOMETHING SOMETHING DOT...</h1>
          <p>
            <span>Sign in</span> or Create an account to see pricing
          </p>
        </div>
        <div className={styles.right}>♡</div>
      </div>
    </div>
  );
};

export default Card;
