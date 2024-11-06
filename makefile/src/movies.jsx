import "./App.css"
import {MOVIES} from "../mocks/movies";


const MovieList = () =>{
    return (
      <>
        <ul>
            {MOVIES.results.map(movie => ( 
                <li key = {movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </li>
            ))}
        </ul>
      </>
    )
  }



  
  export default MovieList;
