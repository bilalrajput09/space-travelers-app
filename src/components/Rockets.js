import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import fetchRocketsData from '../redux/rocketsActions';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);
  const arrayOfRockets = useSelector((state) => state.rockets.rocket);

  return (
    <ul>
      {arrayOfRockets
        && arrayOfRockets.map((rocket) => (
          <li key={rocket.id}>
            <Rocket
              id={rocket.id}
              image={rocket.flickr_image}
              name={rocket.name}
              type={rocket.type}
              description={rocket.description}
            />
          </li>
        ))}
    </ul>
  );
};

export default Rockets;
