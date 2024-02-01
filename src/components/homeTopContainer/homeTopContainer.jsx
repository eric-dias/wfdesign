import styles from "./homeTopContainer.module.css";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const HomeTopContainer = () => {
  return (
    <div className={styles.topContainer}>
      <h1 className={styles.topTitle}>
        We create better spaces for you to live&nbsp;
        <span className={styles.topSpan}>+</span> play.
      </h1>
      <h2 className={styles.topSubtitle}>
        For over a decade, we've provided Fraser Valley homeowners like you with
        high-end, custom renovations and additions.
      </h2>
      <Link
        href="/work"
        key="work"
        className={`${styles.link} ${styles.contactLink}`}
      >
        See our work &nbsp;
        <FaArrowRight className={styles.icon} />
      </Link>
    </div>
  );
};

export default HomeTopContainer;
