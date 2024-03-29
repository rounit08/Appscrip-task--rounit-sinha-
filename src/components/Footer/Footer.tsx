import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div style={{ gap: 20, display: "flex", flexDirection: "column" }}>
            <h1>BE THE FIRST TO KNOW</h1>
            <p>Sign up for updates from metta muse.</p>
          </div>

          <div className={styles.subscribe}>
            <input type="text" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.topRight}>
          <h1>CONTACT US</h1>
          <p>+44 221 133 5360</p>
          <p>customercare@metamuse.com</p>
          <h1>CURRENCY</h1>
          <div className={styles.currency}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/flags-circle/100/USA_-1024.png"
              alt="usflag"
              height="24px"
              width="24px"
            />
            .<h3>USD</h3>
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className={styles.middle}>
        <div className={styles.middleLeft}>
          <p> mettā muse </p>
          <ul>
            <li>About us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className={styles.middleMiddle}>
          <p>QUICK LINKS </p>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.middleRight}>
          <div className={styles.social}>
            <h3>FOLLOW US</h3>
            <img />
            <img />
          </div>
          <div className={styles.payments}>
            <h3>
              mettā muse <span>ACCEPTS</span>
            </h3>
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright © 2024 mettamuse. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
