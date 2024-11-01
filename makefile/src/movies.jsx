import "./App.css"
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
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


  const App = () => {
    return (
        <div>
            <MovieList />
        </div>
    )
  }
  
  export default App;