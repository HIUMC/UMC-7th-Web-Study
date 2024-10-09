import "./App.css";
import Movie from "./components/Movie";
import { MOVIES } from "./movies";

function App() {
  return (
    <div>
      <div className="app-container">
        {MOVIES.results.map((movie) => {
          return <Movie key={movie.id} poster_path={movie.poster_path} />;
        })}
      </div>
    </div>
  );
}

export default App;
