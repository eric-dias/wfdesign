"use client";

import styles from "./mobileNav.module.css";

import { useState } from "react";
import MenuIcon from "../menuIcon/menuIcon";
import Link from "next/link";

const links = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Work", url: "/work" },
  { name: "About", url: "/about" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const size = 50;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.linksList} ${
          isOpen ? styles.opened : styles.closed
        }`}
        onClick={closeMenu}
      >
        {links.map((link) => (
          <Link href={link.url} key={link.name} className={styles.linkItem}>
            {link.name}
          </Link>
        ))}
      </div>

      <button
        className={`${styles.menu} ${isOpen ? styles.opened : ""}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label="Main Menu"
      >
        <svg width={size} height={size} viewBox="0 0 100 100">
          <path
            className={`${styles.line} ${styles.line1}`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
          <path
            className={`${styles.line} ${styles.line3}`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileNav;
