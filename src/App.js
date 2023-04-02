import './App.css';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Header />,
      
      children: [
        {
          index: true,
          element: <Home />,
          loader: ()=>redirect('/Home'),
        },
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/LandLord",
          element: undefined,
        },
        {
          path: "/Tenants",
          element: undefined,
        },
        {
          path: "/ContactUs",
          element: undefined,
        },
      ]
    },
  ],

  {
    basename: '/home_rentals'
  }
)


export default router;
