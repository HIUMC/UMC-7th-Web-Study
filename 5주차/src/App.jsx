import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import UpComing from './pages/UpComing';
import MovieDetail from './components/MovieDetail';
import Home from './pages/Home'; 
import Login from './pages/Login'; 
import Signup from './pages/Signup.jsx'; 
import RootLayout from './layout/Rootlayout.jsx';
import MoviesCategory from './components/MoviesCategory.jsx';
import Search from './pages/Search.jsx';


// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  
  children: [
  {
    // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
    index: true,
    element: <Home/>
  },
  {
    path: "/movies", // Movies 페이지 경로 추가
    element: <MoviesCategory />, // Movies 카테고리 화면 렌더링
  },
  {
    path: "/search", // Movies 페이지 경로 추가
    element: <Search />, // Movies 카테고리 화면 렌더링
  },
  {
    path: "/movies/now-playing",
    element: <NowPlaying />,
  },
  {
    path: "/movies/popular",
    element: <Popular />,
  },
  {
    path: "/movies/top-rated",
    element: <TopRated />,
  },
  {
    path: "/movies/upcoming",
    element: <UpComing />,
  },
  {
    path: "/movies/:movieId",
    element: <MovieDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  ]
}
]);

function App() {
  return (
    <div>
      {/* RouterProvider with router */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
