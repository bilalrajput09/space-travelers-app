import { useSelector } from 'react-redux';
import styles from './styles/MyProfile.module.css';

const MyProfile = () => {
  const rocketsArray = useSelector((state) => state.rockets.rocket);
  const myRockets = rocketsArray.filter((rocket) => rocket.reserved === true);
  return (
    <section>
      <main className={styles.my_rockets_main_container}>
        <header>My Rockets</header>
        <article>
          {myRockets.length === 0 ? (
            <span>Not reserved rockets!</span>
          ) : (
            <ul className={styles.list}>
              {myRockets.map((rocket) => (
                <li key={rocket.id}>{rocket.name}</li>
              ))}
            </ul>
          )}
        </article>
      </main>
    </section>
  );
};

export default MyProfile;
