import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import NotFound from './pages/NotFound';
import RootLayout from './layout/RootLayout';
import SearchPage from './pages/Search';
import NowPlaying from './pages/movies/now-playing';
import TopRated from './pages/movies/top-rated.jsx';
import Popular from './pages/movies/popular';
import UpComing from './pages/movies/up-coming.jsx';
import MovieLayout from './layout/MoviesLayout';
import CategoriesPage from './pages/movies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,  // Catch-all error for root route
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <NotFound />,
      },
      {
        path: '/login',
        element: <LoginPage />,
        errorElement: <NotFound />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
        errorElement: <NotFound />,
      },
      {
        path: '/search',
        element: <SearchPage />,
        errorElement: <NotFound />,
      },
      {
        path: '/movies',
        element: <MovieLayout />,
        errorElement: <NotFound />,  // Catch-all error for movie routes
        children: [
          {
            index: true,
            element: <CategoriesPage />,  // Assuming CategoriesPage exists
            errorElement: <NotFound />,
          },
          {
            path: 'now-playing',  // Path updated without leading slash
            element: <NowPlaying />,
            errorElement: <NotFound />,
          },
          {
            path: 'top-rated',  // Path updated without leading slash
            element: <TopRated />,
            errorElement: <NotFound />,
          },
          {
            path: 'popular',  // Path updated without leading slash
            element: <Popular />,
            errorElement: <NotFound />,
          },
          {
            path: 'up-coming',  // Path updated without leading slash
            element: <UpComing />,
            errorElement: <NotFound />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
