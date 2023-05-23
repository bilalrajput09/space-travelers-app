import { useDispatch } from 'react-redux';
import styles from './styles/Rocket.module.css';
import { rocketActions } from '../redux/rocketsSlice';

const Rocket = (props) => {
  const dispatch = useDispatch();

  const {
    name, description, image, id, reserved,
  } = props;
  return (
    <article>
      <main className={styles.rocket_container}>
        <div className={styles.image_container}>
          <img src={image} alt="some-rocket" />
        </div>
        <div className={styles.rocket_details_container}>
          <h1>{name}</h1>
          {reserved && <span>Reserved</span>}
          <p>{description}</p>
          <button
            className={reserved ? styles.reserved : styles.not_reserved}
            type="button"
            onClick={() => dispatch(rocketActions.createReservation(id))}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </main>
    </article>
  );
};

export default Rocket;
