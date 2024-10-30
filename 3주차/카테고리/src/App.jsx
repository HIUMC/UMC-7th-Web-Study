import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/home-page";
import NowPlayingPage from "./components/now-playing-page";
import PopularPage from "./components/popular-page";
import TopRatedPage from "./components/top-rated-page";
import UpComingPage from "./components/up-coming-page";
import RootLayout from "./layout/root-layout";
import ErrorPage from "./components/error-page";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
