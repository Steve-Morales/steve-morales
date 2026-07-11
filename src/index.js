import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageTracker from './components/PageTracker';

import Root from './routes/root';
import Contact from './views/Contact';
import Resume from './views/Resume';

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
    element: <PageTracker><Root /></PageTracker>,
  },
  {
    path:'/contact',
    element: <PageTracker><Contact/></PageTracker>,
  },
  {
    path:'/resume',
    element: <PageTracker><Resume/></PageTracker>,
  },
  {
    path: "/projects/autonomous-vehicles",
    element: <PageTracker><AutonomousVechicles/></PageTracker>,
  },
  {
    path: "/projects/zoo-keeper",
    element: <PageTracker><ZooKeeper/></PageTracker>,
  },
  {
    path: "/projects/delivAero",
    element: <PageTracker><DelivAero/></PageTracker>,
  },
  {
    path: "/projects/otto",
    element: <PageTracker><Otto/></PageTracker>,
  },
  {
    path: "/projects/auto-jober",
    element: <PageTracker><AutoJober/></PageTracker>,
  },
  {
    path: "/projects/unity-script",
    element: <PageTracker><Unity/></PageTracker>,
  },
  {
    path: "/projects/marvin",
    element: <PageTracker><Marvin/></PageTracker>,
  },
  {
    path: "/projects/my-country",
    element: <PageTracker><MyCountry/></PageTracker>,
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
