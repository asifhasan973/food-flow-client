import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Pages/Home.jsx';
import FrontPage from './components/Pages/FrontPage.jsx';
import AddFood from './components/Pages/AddFood.jsx';
import AvailableFoods from './components/Pages/AvailableFoods.jsx';
import Login from './components/Pages/Login.jsx';
import Register from './components/Pages/Register.jsx';
import { AuthProvider } from './components/Context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FrontPage></FrontPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/AddFood',
        element: <AddFood></AddFood>,
      },

      {
        path: '/AvailableFoods',
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
