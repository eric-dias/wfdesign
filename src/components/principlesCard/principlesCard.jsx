import styles from "./principlesCard.module.css";

const PrinciplesCard = ({ principle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={principle.img}
          alt={principle.title}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{principle.title}</h1>
        <p className={styles.description}>{principle.description}</p>
      </div>
    </div>
  );
};

export default PrinciplesCard;
