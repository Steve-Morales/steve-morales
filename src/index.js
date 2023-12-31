import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Root from './routes/root';
import Contact from './views/Contact';

// project pages
import AutonomousVechicles from './views/projects/AutonomousVehicles';
import ZooKeeper from './views/projects/ZooKeeper';
import DelivAero from './views/projects/DelivAero';
import Otto from './views/projects/Otto';
import AutoJober from './views/projects/AutoJober';
import Unity from './views/projects/Unity';
import Marvin from './views/projects/Marvin';
import MyCountry from './views/projects/MyCountry';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path:'/contact',
    element: <Contact/>,
  },
  {
    path: "/projects/autonomous-vehicles",
    element: <AutonomousVechicles/>,
  },
  {
    path: "/projects/zoo-keeper",
    element: <ZooKeeper/>,
  },
  {
    path: "/projects/delivAero",
    element: <DelivAero/>,
  },
  {
    path: "/projects/otto",
    element: <Otto/>,
  },
  {
    path: "/projects/auto-jober",
    element: <AutoJober/>,
  },
  {
    path: "/projects/unity-script",
    element: <Unity/>,
  },
  {
    path: "/projects/marvin",
    element: <Marvin/>,
  },
  {
    path: "/projects/my-country",
    element: <MyCountry/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
