import React from "react";
import styles from "../modules/Footer.module.scss";
import logo from "../assets/White-Logo.svg";
import twitterIcon from "../assets/Twitter.svg";
import facebookIcon from "../assets/Facebook.svg";
import tiktokIcon from "../assets/Tiktok.svg";
import instagramIcon from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerWrapper} ${styles.container}`}>
        <div className={styles.descriptionWrapper}>
          <img src={logo} alt="Cyber Logo" />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        <div className={styles.footerOptionsWrapper}>
          <ul className={styles.firstOptionLine}>
            <li className={styles.boldFooterOption}>Services</li>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
          <ul className={styles.secondOptionLine}>
            <li className={styles.boldFooterOption}>Assistance to the buyer</li>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>

      <div className={`${styles.socialWrapper} ${styles.container}`}>
        <img src={twitterIcon} alt="Twitter" />
        <img src={facebookIcon} alt="Facebook" />
        <img src={tiktokIcon} alt="TikTok" />
        <img src={instagramIcon} alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
