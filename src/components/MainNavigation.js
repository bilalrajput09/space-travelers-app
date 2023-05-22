import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import styles from './styles/MainNavigation.module.css';

const MainNavigation = () => (
  <header className={styles.header}>
    <nav className={styles.nav_bar}>
      <div className={styles.img_container}>
        <img src={planet} alt="space-travel-app-logo" />
        <span>Space Travelers&apos;Hub</span>
      </div>
      <ul className={styles.links_container}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myprofile"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
