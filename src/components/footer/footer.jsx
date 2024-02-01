import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.block}>
        <h1>WF Design + Build © 2024</h1>
        <p>4432 Wilson Rd. Chilliwack, BC V2R 5C5</p>
        <a href="#">Privacy Policy</a>
      </div>
      <div className={styles.block}>
        <h1>Join Our Team</h1>
        <p>
          We're always open to discussing collaboration opportunities with other
          professional trades. Go ahead and introduce yourself.
        </p>
        <a href="#">Say hello</a>
      </div>
      <div className={styles.block}>
        <h1>Get Social</h1>
        <ul className={styles.linksList}>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </div>

      <div className={styles.block}>
        <h1>Contact Us</h1>
        <ul className={styles.linksList}>
          <li>
            <a href="#">Send an email</a>
          </li>
          <li>
            <a href="#">778-808-3929</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
