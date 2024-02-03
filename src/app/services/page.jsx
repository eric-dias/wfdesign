import MenuIcon from "@/components/menuIcon/menuIcon";
import styles from "./services.module.css";
import MobileNav from "@/components/mobileNav/mobileNav";

const Services = () => {
  return (
    <div className={styles.container}>
      <h1>Services</h1>
      <div className={styles.navbar}>
        <div className={styles.chapter}>
          <p> 246: a batalha decisiva na terra assombrada de shinjuku</p>
        </div>
        <div className={styles.menu}>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Services;
