import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
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
              reserved={rocket.reserved}
            />
          </li>
        ))}
    </ul>
  );
};

export default Rockets;
