import styles from "./navbar.module.css";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";
import MobileNav from "../mobileNav/mobileNav";

const links = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Work", url: "/work" },
  { name: "About", url: "/about" },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <img src="/logo.svg" alt="logo" />
      </Link>

      <nav className={styles.links}>
        {links.map((link) => (
          <Link href={link.url} key={link.name} className={styles.link}>
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          key={"contact"}
          className={`${styles.link} ${styles.contactLink}`}
        >
          Start Your Project &nbsp;
          <FaArrowRight className={styles.icon} />
        </Link>
      </nav>

      <nav className={styles.mobileLinks}>
        <MobileNav links={links} />
      </nav>
    </div>
  );
};

export default Navbar;
