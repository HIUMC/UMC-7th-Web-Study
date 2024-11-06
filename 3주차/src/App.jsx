import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NowPlaying from './pages/movies/NowPlaying';
import TopRated from './pages/movies/TopRated.jsx';
import UpComing from './pages/movies/UpComing.jsx';
import MovieDetail from './components/MovieDetail';
import Home from './pages/Home'; 
import Login from './pages/Login'; 
import Signup from './pages/SignUp'; 
import RootLayout from './layout/RootLayout';
import MoviesCategory from './components/MovieCategory';
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movies", element: <MoviesCategory /> },
      { path: "/search", element: <Search /> },
      { path: "/movies/now-playing", element: <NowPlaying /> },
      { path: "/movies/popular", element: <Popular /> },
      { path: "/movies/top-rated", element: <TopRated /> },
      { path: "/movies/upcoming", element: <UpComing /> },
      { path: "/movies/:movieId", element: <MovieDetail /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
