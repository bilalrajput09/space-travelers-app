import { useSelector } from 'react-redux';
import styles from './styles/MyProfile.module.css';

const MyProfile = () => {
  const rocketsArray = useSelector((state) => state.rockets.rocket);
  const { missions } = useSelector((state) => state.mission);

  const myRockets = rocketsArray.filter((rocket) => rocket.reserved === true);
  const myMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <section className={styles.profile_main_container}>
      <main className={styles.my_missions_main_container}>
        <header>My Missions</header>
        <article>
          {myMissions.length === 0 ? (
            <span>No Mission joined!</span>
          ) : (
            <ul className={styles.list}>
              {myMissions.map((mission) => (
                <li key={mission.mission_id}>{mission.mission_name}</li>
              ))}
            </ul>
          )}
        </article>
      </main>
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
