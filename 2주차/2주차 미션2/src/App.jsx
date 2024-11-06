import "./App.css";
import Movie from "./components/Movie";
import { MOVIES } from "./mocks/movies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>홈 페이지입니다.</h1>,
  },
  {
    path: "/movies",
    element: <h1>영화 페이지 입니다.</h1>,
  },
]);

function App() {
  return (
    <>
      <div className="app-container">
        {MOVIES.results.map((movie) => {
          return <Movie key={movie.id} poster_path={movie.poster_path} />;
        })}
      </div>
    </>
  );
}

export default App;
