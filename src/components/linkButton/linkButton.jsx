import { FaArrowRight } from "react-icons/fa6";
import styles from "./linkButton.module.css";

import Link from "next/link";

const LinkButton = (to, text) => {
  return (
    <Link
      href={`/${to}`}
      key={"contact"}
      className={`${styles.link} ${styles.contactLink}`}
    >
      {text}&nbsp;
      <FaArrowRight className={styles.icon} />
    </Link>
  );
};

export default LinkButton;
