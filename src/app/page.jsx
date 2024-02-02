import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HomeTopContainer from "@/components/homeTopContainer/homeTopContainer";

import projectsJson from "../../public/projects.json";
import ProjectCard from "@/components/projectCard/projectCard";

export default function Home() {
  //console.log(projects);

  const firstProjects = projectsJson.projects.slice(0, 4);

  return (
    <main className={styles.main}>
      <HomeTopContainer />
      <div className={styles.projectsContainer}>
        {firstProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </main>
  );
}
