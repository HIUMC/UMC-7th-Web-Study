import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/root-layout";
import HomePage from "./components/home-page";
import LoginPage from "./components/login-page";
import SignupPage from "./components/signup-page";
import SearchPage from "./components/search-page";
import MoviePage from "./components/movie-page";
import NowPlayingPage from "./components/now-playing-page";
import PopularPage from "./components/popular-page";
import TopRatedPage from "./components/top-rated-page";
import UpComingPage from "./components/upcoming-page";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/movie",
        element: <MoviePage />,
      },
      {
        path: "movie/now_playing",
        element: <NowPlayingPage />,
      },
      {
        path: "movie/popular",
        element: <PopularPage />,
      },
      {
        path: "movie/top_rated",
        element: <TopRatedPage />,
      },
      {
        path: "movie/upcoming",
        element: <UpComingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
