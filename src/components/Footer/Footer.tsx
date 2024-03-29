import { Roboto } from "next/font/google";
import styles from "./Footer.module.css";
import instaIcon from "@/assets/icons/Insta.png";
import linkedinIcon from "@/assets/icons/mdi_linkedin.png";
import Image from "next/image";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={`${styles.container}`}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div style={{ gap: 20, display: "flex", flexDirection: "column" }}>
            <h1 className={robotoBold.className}>BE THE FIRST TO KNOW</h1>
            <p className={roboto.className}>
              Sign up for updates from metta muse.
            </p>
          </div>

          <div className={styles.subscribe}>
            <input type="text" placeholder="Enter your e-mail..." />
            <button className={roboto.className}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.topRight}>
          <h1 className={robotoBold.className}>CONTACT US</h1>
          <p className={roboto.className}>+44 221 133 5360</p>
          <p className={roboto.className}>customercare@metamuse.com</p>
          <h1 className={robotoBold.className}>CURRENCY</h1>
          <div className={styles.currency}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/flags-circle/100/USA_-1024.png"
              alt="usflag"
              height="24px"
              width="24px"
            />
            .<h3 className={robotoBold.className}>USD</h3>
          </div>
          <p className={roboto.className}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className={styles.middle}>
        <div className={styles.middleLeft}>
          <p className={robotoBold.className}>mettā muse </p>
          <ul className={roboto.className}>
            <li>About us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className={styles.middleMiddle}>
          <p className={robotoBold.className}>QUICK LINKS </p>
          <ul className={roboto.className}>
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
            <h3 className={robotoBold.className}>FOLLOW US</h3>
            <Image
              src={instaIcon}
              alt="instaIcon"
              style={{ height: "40px", width: "40px" }}
            />
            <Image
              src={linkedinIcon}
              alt="linkedinIcon"
              style={{
                border: "1px solid white",
                borderRadius: "50%",
                padding: "7px",
                height: "40px",
                width: "40px",
                marginLeft: "7px",
              }}
            />
          </div>
          <div className={styles.payments}>
            <h3 className={robotoBold.className}>
              mettā muse <span>ACCEPTS</span>
            </h3>
            <div className={styles.paymentGateway}>
              <img
                height="35"
                width="56"
                src="https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo-2018.png"
                alt="googlePay"
              />
              <img
                height="35"
                width="56"
                src="https://logolook.net/wp-content/uploads/2021/07/Mastercard-Logo.png"
                alt="cardPay"
              />
              <img
                height="35"
                width="56"
                src="https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png"
                alt="payPal"
              />
              <img
                height="35"
                width="56"
                src="https://logodix.com/logo/569430.jpg"
                alt="amex"
              />
              <img
                height="35"
                width="56"
                src="https://th.bing.com/th?id=OSK.6bf9a1eb675abef1a1f7bd877826498b&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=1.1&pid=SANGAM"
                alt="applePay"
              />
              <img
                height="35"
                width="56"
                src="https://th.bing.com/th/id/OIP.sUQeCV33SZ7IAdJVqqj15gAAAA?w=279&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                alt="phonePay"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={roboto.className}>
          Copyright © 2024 mettamuse. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
