// ProjectCard.js
import React from "react";
import styles from "./ProjectCard.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <img className={styles.cardImage} src={project.img} alt={project.title} />
      <div className={styles.overlay}>
        <Link href={`/work/${project.url}`} className={styles.link}>
          <p className={styles.linkText}>
            {project.title}&nbsp;&nbsp;
            <span>
              <FaArrowRight className={styles.icon} />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
