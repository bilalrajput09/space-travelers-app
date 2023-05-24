import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

const Root = () => (
  <>
    <MainNavigation />
    <Outlet />
  </>
);

export default Root;
