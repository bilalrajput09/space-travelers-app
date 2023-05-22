import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Rockets /> },
      { path: '/missions', element: <Missions /> },
      { path: '/myprofile', element: <MyProfile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
