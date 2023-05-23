import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchRocketsData from './redux/rocketsActions';
import getAllMission from './redux/missions/missionActions';
import Root from './components/Root';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Rockets /> },
      { path: 'missions', element: <Missions /> },
      { path: 'myprofile', element: <MyProfile /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMission());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
