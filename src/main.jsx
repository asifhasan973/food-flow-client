import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Pages/Home.jsx';
import FrontPage from './components/Pages/FrontPage.jsx';
import AddFood from './components/Pages/AddFood.jsx';
import Login from './components/Pages/Login.jsx';
import Register from './components/Pages/Register.jsx';
import { AuthProvider } from './components/Context/AuthProvider.jsx';
import AvailableFoods from './components/Pages/AvailableFoods.jsx';
import PrivateRoute from './components/Context/PrivateRoute.jsx';
import FoodDetails from './components/Pages/FoodDetails.jsx';
import ManageFoods from './components/Pages/ManageFoods.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FrontPage></FrontPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/foods/'),
      },
      {
        path: '/AddFood',
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },

      {
        path: '/AvailableFoods',
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch('http://localhost:3000/foods/'),
      },
      {
        path: '/ManageFoods',
        element: <ManageFoods></ManageFoods>,
        loader: ({ params }) => {
          console.log(params);
        },
      },
      {
        path: '/ManageFoods/:email',
        element: <ManageFoods></ManageFoods>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/email/${params.email}`),
      },
      {
        path: '/FoodDetails/:id',
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
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
