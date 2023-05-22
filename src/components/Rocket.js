import styles from './styles/Rocket.module.css';

const Rocket = (props) => {
  const { name, description, image } = props;

  return (
    <article>
      <main className={styles.rocket_container}>
        <div className={styles.image_container}>
          <img src={image} alt="some-rocket" />
        </div>
        <div className={styles.rocket_details_container}>
          <h1>{name}</h1>
          <p>{description}</p>
          <button type="button">Reserve Rocket</button>
        </div>
      </main>
    </article>
  );
};

export default Rocket;
