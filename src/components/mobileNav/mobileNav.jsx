"use client";

import styles from "./mobileNav.module.css";

import { useState } from "react";
import MenuIcon from "../menuIcon/menuIcon";
import Link from "next/link";

const MobileNav = ({ links }) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.linksList} ${
          isMenuOpen ? styles.opened : styles.closed
        }`}
      >
        {links.map((link) => (
          <Link href={link.url} key={link.name} className={styles.linkItem}>
            {link.name}
          </Link>
        ))}

      </div>

      <div className={styles.btnContainer} onClick={handleToggle}>
        <MenuIcon className={styles.btn} size={50} />
      </div>
    </div>
  );
};

export default MobileNav;
