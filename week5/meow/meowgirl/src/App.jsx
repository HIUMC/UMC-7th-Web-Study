import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import MovieDetailPage from './pages/moviedetail';


import HomePage from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Search from './pages/search';
import NotFound from './pages/error';
import MoviesPage from './pages/movies'; 
import RootLayout from './layout/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,   
        element: <HomePage />
      },
      {
        path: 'movies/:category?',  
        element: <MoviesPage />
      
      },
      {
        path: 'movies/:movieId',  
        element: <MovieDetailPage />
      },
      
      {
        path: 'login',  
        element: <Login />
      },
      {
        path: 'signup',  
        element: <Signup />
      },
      {
        path: 'search',  
        element: <Search />
      },
      
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
