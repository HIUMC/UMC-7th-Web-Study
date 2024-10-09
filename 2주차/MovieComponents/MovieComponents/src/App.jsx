import { MOVIES } from "./mocks/movies";
import Movie from "./components/Movie";
import "./App.css";

function App() {
  return (
    <>
      {MOVIES.results.map((movie) => {
        return <Movie key={movie.id} poster_path={movie.poster_path} />;
      })}
    </>
  );
}

export default App;
