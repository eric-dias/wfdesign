import styles from "./page.module.css";
import Link from "next/link";

import projectsJson from "../../public/projects.json";
import principlesJson from "../../public/principles.json";

import ProjectCard from "@/components/projectCard/projectCard";

import { FaArrowRight } from "react-icons/fa6";
import PrinciplesCard from "@/components/principlesCard/principlesCard";

export default function Home() {
  //console.log(projects);

  const firstProjects = projectsJson.projects.slice(0, 4);
  const principles = principlesJson.principles

  return (
    <main className={styles.main}>
      <div className={styles.topContainer}>
        <h1 className={styles.title}>
          We create better spaces for you to live&nbsp;
          <span className={styles.yellowSpan}>+</span> play.
        </h1>
        <h2 className={styles.subtitle}>
          For over a decade, we've provided Fraser Valley homeowners like you
          with high-end, custom renovations and additions.
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

      <div className={styles.projectsContainer}>
        {firstProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>

      <div className={styles.midContainer}>
        <h1 className={styles.title}>Vision. Clarity. Results.</h1>
        <h2 className={styles.subtitle}>
          Our client relationships are built on trust, collaboration, and
          transparency. With your ideas and our guidance and resources, the
          possibilities are endless.
        </h2>
      </div>

      <div className={styles.principlesContainer}>
        {principles.map((principle) => (
          <PrinciplesCard key={principle.id} principle={principle}/>
        ))}
      </div>
    </main>
  );
}
