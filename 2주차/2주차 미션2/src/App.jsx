import "./App.css";
import Movie from "./components/Movie";
import { MOVIES } from "./movies";

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
