import './App.css'
import { MOVIES } from './components/movies'
import MovieButton from './components/movieButton'

function App() {

  return (
    <>
      <div className = "movieList">
        {MOVIES.results.map((movie) => {
          return(
            <MovieButton
            key={movie.id}
            {...movie}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
